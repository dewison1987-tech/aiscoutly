/**
 * 批量下载所有工具的 favicon 到 public/icons/{slug}.png
 * 主源：Google favicon（sz=256 高清）
 * 兜底：DuckDuckGo icons 服务
 *
 * 用法：node scripts/download-icons.mjs
 * 以后新增工具后重跑一次即可增量补齐。
 */
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CSV_PATH = path.join(ROOT, "data", "tools-seed.csv");
const OUT_DIR = path.join(ROOT, "public", "icons");
const CONCURRENCY = 8;
const TIMEOUT_MS = 15000;

// 与详情页一致：chat.openai.com → openai.com
function rootDomain(url) {
  try {
    const host = new URL(url).hostname;
    const parts = host.split(".");
    return parts.slice(-2).join(".");
  } catch {
    return "";
  }
}

function parseCsv(text) {
  // 去掉 BOM 与表头
  const lines = text.replace(/^\uFEFF/, "").split("\n").slice(1).filter(Boolean);
  return lines.map((line) => {
    const [slug, name, category, url, priceModel, keyword] = line.split(",");
    return {
      slug: slug.trim(),
      name: name.trim(),
      url: url.trim(),
      domain: rootDomain(url.trim()),
    };
  });
}

async function fetchBuffer(url) {
  const res = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 100) throw new Error(`too small (${buf.length} bytes)`);
  return buf;
}

async function downloadOne(tool, failed) {
  const outPath = path.join(OUT_DIR, `${tool.slug}.png`);
  // 已有文件则跳过（支持增量重跑）
  try {
    await fs.access(outPath);
    return { slug: tool.slug, status: "skipped" };
  } catch {}

  const sources = [
    `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=256`,
    `https://icons.duckduckgo.com/ip3/${tool.domain}.ico`,
  ];

  for (const src of sources) {
    try {
      const buf = await fetchBuffer(src);
      await fs.writeFile(outPath, buf);
      return { slug: tool.slug, status: "ok", source: src.split("/")[2] };
    } catch (err) {
      failed.push({ slug: tool.slug, domain: tool.domain, source: src, error: err.message });
    }
  }
  return { slug: tool.slug, status: "failed" };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const csv = await fs.readFile(CSV_PATH, "utf-8");
  const tools = parseCsv(csv).filter((t) => t.slug && t.domain);
  console.log(`共 ${tools.length} 个工具，开始下载…`);

  const failed = [];
  const results = [];
  const queue = [...tools];

  async function worker() {
    while (queue.length) {
      const tool = queue.shift();
      const r = await downloadOne(tool, failed);
      results.push(r);
      const mark = r.status === "ok" ? "✓" : r.status === "skipped" ? "·" : "✗";
      process.stdout.write(`${mark} ${tool.slug}\n`);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const ok = results.filter((r) => r.status === "ok").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const bad = results.filter((r) => r.status === "failed").length;

  console.log(`\n完成：新增 ${ok}，已存在跳过 ${skipped}，彻底失败 ${bad}`);

  if (failed.length) {
    await fs.writeFile(
      path.join(__dirname, "icon-download-failures.json"),
      JSON.stringify(failed, null, 2)
    );
    console.log("失败明细已写入 scripts/icon-download-failures.json");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
