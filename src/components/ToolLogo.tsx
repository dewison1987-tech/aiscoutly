"use client";

import { useMemo, useState } from "react";

/**
 * 工具图标组件
 * 加载链：本地静态图标（public/icons/{slug}.png，走 Vercel CDN）→ Google favicon → DuckDuckGo → 品牌首字母占位
 * 永不出现裂图。
 */
export default function ToolLogo({
  slug,
  domain,
  name,
  className = "h-16 w-16 flex-shrink-0 rounded-lg bg-white p-2 ring-1 ring-gray-200",
}: {
  slug: string;
  domain: string;
  name: string;
  className?: string;
}) {
  const [level, setLevel] = useState(0);

  const sources = useMemo(() => {
    const list = [`/icons/${slug}.png`];
    if (domain) {
      list.push(
        `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
        `https://icons.duckduckgo.com/ip3/${domain}.ico`
      );
    }
    return list;
  }, [slug, domain]);

  // 所有远程源都失败 → 显示首字母占位
  if (level >= sources.length) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-indigo-100 text-lg font-bold text-indigo-600`}
        aria-label={`${name} logo`}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={sources[level]}
      alt={`${name} logo`}
      className={className}
      loading="lazy"
      onError={() => setLevel((l) => l + 1)}
    />
  );
}
