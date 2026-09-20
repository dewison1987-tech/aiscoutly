# Affiliate 变现配置指南

## 一、技术链路（已完成）

工具详情页的 "Visit {tool}" 按钮会按以下优先级取链接：

1. `data/affiliate.json` 里配置了该工具的 affiliate 链接 → 用 affiliate 链接，`rel="sponsored nofollow noopener"`，并在按钮下方显示合规披露小字
2. 未配置 → 自动回退到官网原始链接，`rel="noopener noreferrer"`，不显示披露

**所以你只需要做一件事：把申请到的 affiliate 链接填进 `data/affiliate.json`。**

### 配置格式

```json
{
  "jasper": {
    "url": "https://www.jasper.ai/?fpr=你的ID",
    "program": "Jasper Affiliates",
    "commission": "25-30% recurring (12 months)",
    "cookie": "45 days"
  },
  "surfer": {
    "url": "https://surferseo.com/?via=你的ID",
    "program": "Surfer SEO",
    "commission": "25% recurring (lifetime)",
    "cookie": "60 days"
  }
}
```

- key 必须是站内工具的 slug（见 `data/tools-seed.csv` 第一列）
- `program` / `commission` / `cookie` 是记录用元数据，不显示在页面上
- 保存后重新部署即可生效

---

## 二、申请优先级（按 EPC × 与本站受众契合度排序）

数据来源：2026 年公开资料（affiliateprogramsguru / panstag / usearticle / swiftdigitalads），佣金与 cookie 会变动，申请前请以官方页面为准。

### 第一梯队（优先申请，受众高度契合）

| 工具 | slug | 佣金 | Cookie | 时长 | 申请入口 |
|---|---|---|---|---|---|
| **Jasper** | `jasper` | 25–30% | 45–90 天 | 12 个月 | jasper.ai/affiliates（直营） |
| **Surfer SEO** | `surfer` | 25% | 60 天 | **lifetime** | surferseo.com（直营） |
| **Semrush** | — | $200/单 + $10/试用 | 120 天 | 一次性 | semrush.com（直营） |
| **HubSpot** | `hubspot-ai` | 30% | 90 天 | 12 个月 | hubspot.com/partners（直营） |

> EPC 参考：Semrush $4–9.5、Surfer $4–8、HubSpot $6–14（B2B）、Jasper $3.2–7。

### 第二梯队（lifetime 佣金，长期复利）

| 工具 | slug | 佣金 | 时长 | 说明 |
|---|---|---|---|---|
| **Writesonic** | — | 30% | lifetime | 低价位易转化 |
| **NeuronWriter** | `neuronwriter` | 30% | lifetime | SEO 工具，与本站内容契合 |
| **Scalenut** | — | 30–50% | lifetime | SEO 内容全流程 |
| **Pictory** | — | 20–50% | lifetime | 视频工具 |
| **Surfer SEO** | `surfer` | 25% | lifetime | 见第一梯队 |

### 第三梯队（补充覆盖）

| 工具 | slug | 佣金 | 时长 | 平台 |
|---|---|---|---|---|
| Copy.ai | — | 45% 首年 / 20% | 12 个月 | PartnerStack |
| Frase | `frase` | 30% | 首年 | 直营 |
| Notion | `notion-ai` | 50% 首年 | 首年 | 直营 |
| ClickUp | `clickup-ai` | 20% | recurring | 直营 |
| Grammarly | `grammarly` | $20/注册 | 一次性 | CJ |
| Synthesia | — | 20–25% | 12 个月 | PartnerStack |
| Murf AI | — | 20% | 24 个月 | 直营 |
| Descript | — | 15% | 12 个月 | 直营 |

---

## 三、申请注意事项（重要）

### ⚠️ 目录站会被部分计划拒批

多个主流 AI affiliate 计划（尤其 Jasper）明确拒绝以下类型：

- **"Template-only sites that look like affiliate farms"**（模板化、看起来像联盟农场的站点）
- 没有已发布内容的站点
- 与 AI / 写作 / 营销 / 商业效率无关的垂直

**应对策略**：

1. **申请前先积累内容**：至少 5–10 篇有实质内容的文章（本站在做的 In-depth review 和 guides 就是在解决这个问题）
2. **申请时说明内容策略**：写清"我们做深度评测 + 对比文，有编辑政策页面"，可附 `aiscoutly.com/editorial-policy`
3. **不要提"目录站"**：描述为"AI 工具评测媒体（review site）"，这是事实也是定位
4. **被拒后可换平台申请**：Jasper 拒绝时，Writesonic / Copy.ai 审核更宽松、佣金同样或更高

### 合规要点（已内建，无需额外处理）

- affiliate 链接自动加 `rel="sponsored nofollow"`（Google 要求）
- 按钮下方自动显示披露小字
- 全站页脚 + `/disclaimer` 已有完整 FTC 披露
- 以上三项满足 FTC 16 CFR Part 255 与 Google 对联盟链接的规定

---

## 四、变现效率对比（为什么 affiliate 比 AdSense 重要）

| 变现方式 | 单次转化价值 | 需要流量 | 审核 |
|---|---|---|---|
| AdSense | RPM $3–8（目录站）→ 每千次展示 $3–8 | 高 | 需要，且难 |
| Jasper affiliate | 每个付费用户 $12–40/月（持续 12 个月） | 中 | 不需要 |
| Surfer affiliate | 每个付费用户 $22–55/月（**终身**） | 中 | 不需要 |

**一个 Surfer 年付用户 ≈ 数千次 AdSense 展示。** 4 个长期 Surfer 推荐 ≈ $100+/月的持续被动收入。
