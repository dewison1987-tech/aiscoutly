# Listing 商务方案（变现第二引擎）

> 状态：**方案就绪，待 AdSense 审核通过后执行**
> 关联事项：rxboiT（变现）
> ⚠️ 合规红线：AdSense 审核期间**禁止**发送 listing 邀约 / 上线赞助位 / 进行任何付费链接交易。本方案全部落地动作须在审核通过后启动。

---

## 一、定位与逻辑

- 目标：通过"厂商付费收录"产生现金流（与 AdSense 广告并行）
- 卖点：垂直营销人群（英文 Tier-1）+ 深度内容页 + 真实流量增长潜力
- 首批目标：**付费营销工具**（有营销预算 + 竞争激烈 + 获客需求强）——最可能付费的群体

## 二、目标工具名单（首批 15 个，按优先级）

### P0（第一波，付费意愿最高）
| 工具 | 分类 | 付费理由 |
|---|---|---|
| Jasper | 写作 | 成熟 B2B SaaS，有渠道预算 |
| Writesonic | 写作 | 增长期，急需获客 |
| Anyword | 写作 | 细分赛道，重视曝光 |
| Synthesia | 视频 | 高价产品，品牌曝光需求强 |
| HeyGen | 视频 | 高增长，竞争激烈 |
| Surfer SEO | SEO | 成熟产品，渠道体系完整 |

### P1（第二波）
| 工具 | 分类 | 付费理由 |
|---|---|---|
| AdCreative.ai | 广告 | 广告工具，天然懂营销 |
| Optmyzr | 广告 | 垂直 PPC，预算充足 |
| Veed.io | 视频 | 大众工具，增长期 |
| InVideo | 视频 | 有品牌预算 |
| ElevenLabs | 音频 | 高增长、高估值 |
| Lately | 社媒 | 垂直场景清晰 |

### P2（试探波）
| 工具 | 分类 | 付费理由 |
|---|---|---|
| Copy.ai | 写作 | 知名但竞争多 |
| Predis.ai | 社媒 | 增长期 |
| Vista Social | 社媒 | 中小 SaaS |

> 选择逻辑：B2B 付费产品 + 有营销/增长团队 + 处在需要外部流量的阶段。排除纯工具（无商业诉求）、开源、企业定制（无 listing 需求）。

## 三、定价套餐（三档）

| 档位 | 价格 | 权益 |
|---|---|---|
| **Featured Listing** | **$499/年** | 分类页置顶 + 专属 Featured 徽章 + 首页"本周精选"区 + 优先内容更新 |
| **Standard Listing** | **$249/年** | 标准收录 + 官网链接 + 年度内容更新（已含默认权益） |
| **Free Listing** | $0 | 现有全部工具（保持收录，含收录页链接） |

- 定价依据：竞品目录站（SimilarWeb 同级流量）listing 费普遍 $100-500/年；Tier-1 垂直流量溢价
- 首年策略：P0 名单可用 **$399 早鸟价** 促单
- 支付：Stripe / PayPal 收款（后续配置）

## 四、合规要求（重要）

1. **审核通过前**：只准备材料，不发邮件、不收款、不上线赞助位
2. **赞助标识**：所有付费 listing 页面必须标注 **"Sponsored"** 徽章（Google 要求）——技术实现：content 结构加 `sponsored: true`
3. **广告政策**：listing 页链接加 `rel="nofollow"`（避免 SEO 传递被判定为买卖链接）
4. **披露页**：需要一个 `/advertise` 或 `/list-your-tool` 页面，说明收录标准与赞助披露（AdSense 合规友好）

## 五、邮件模板

### 模板 A：通用邀约（首封）

```
Subject: Your tool deserves a featured spot in our AI directory

Hi [First Name],

I run AI Tools Directory (aiscoutly.com) — a curated directory of AI tools
for marketers and content teams, with hands-on reviews by people who
actually use the tools.

We currently feature [Tool Name] and readers are genuinely comparing
it against [Competitor 1] and [Competitor 2]. We're now opening a small
number of sponsored featured positions for [Category] tools.

A Featured Listing ($499/year) gives you:
• Top placement in the [Category] category
• A "Featured" badge on your listing page
• A spot in our weekly "Editor's picks" section on the homepage

Would you be open to a quick call, or should I send over more details?

Best,
[Your Name]
AI Tools Directory
```

### 模板 B：针对性跟进（有互动后）

```
Subject: Re: Featured spot — quick note

Hi [First Name],

Just following up on the featured listing opportunity for [Tool Name].
A few numbers that might help:

• [X] tools currently in the directory, all in marketing & content
• Our pages are indexed and we're building organic traffic in the
  [Category] space
• Your listing page: aiscoutly.com/tool/[slug]

We cap featured spots at [number] per category, so it's first-come
for this cycle. Happy to send a preview of what the placement looks like.

Best,
[Your Name]
```

## 六、执行步骤（审核通过后）

1. [ ] 上线 `/advertise` 页面（收录标准 + 赞助披露）
2. [ ] 内容结构加 `sponsored` 字段 + 徽章 + nofollow（技术改动）
3. [ ] 配置收款（Stripe/PayPal）
4. [ ] 按 P0 → P1 → P2 分批发送邀约（每批 5-8 封，间隔 3-5 天）
5. [ ] 跟进与成交管理（记录在事项 rxboiT）

## 七、需要的配套

- **真实商务邮箱**：`hello@aiscoutly.com`（替代占位 hello@example.com）——需配置域名邮箱或转发
- **域名邮箱配置**：Namecheap 邮件转发 → Gmail，或 Zoho Mail 免费版
- 联系人方式：官网 contact 页 + LinkedIn 公司页（后续收集）
