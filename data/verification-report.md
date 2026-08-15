# AI 工具目录 112 个工具内容真实性核验报告

- **核验对象**: `sites/ai-tools-directory/data/tool-content.json`（112 个工具）
- **核验日期**: 2026-08-15
- **核验方式**: 内部一致性检查（脚本）+ 官方定价页/权威第三方源网络核验
- **说明**: 定价类信息以 2026 年年中官方定价页与 2026 年第三方定价数据为准；工具存在性与功能描述以官方站点为准；rating 评分为目录方主观评分，无法客观核验，不纳入本报告判断范围。

---

## 一、总体结论

| 结论 | 数量 | 占比 |
|---|---|---|
| ✅ 基本属实（定价/功能/存在性与官方一致或高度接近） | 92 | 82% |
| ⚠️ 有偏差（档位命名过时、年付/月付标注不清、货币单位、个别档位价格出入） | 10 | 9% |
| ❌ 失实/严重过时（定价错误、虚构档位、品牌已更名或工具存疑） | 10 | 9% |

**核心发现**: 112 个工具中绝大多数内容真实可靠，但存在 **10 处需优先修复的失实内容**，集中在：定价档位编造（CopyGenius、AdCreative.ai、Pattern89、Instantly、Writesonic）、知名工具价格错误（ChatGPT Pro 应为 $200/mo 而非 $100/mo）、品牌已更名（Codeium → Windsurf → Devin Desktop）、虚构免费版（Beautiful.ai）、以及一个存在性存疑的工具（Longform）。

---

## 二、严重失实项（❌，必须修复）

### 1. `chatgpt` — Pro 档定价错误
- **文件内容**: Pro `$100/mo`
- **实际情况**: ChatGPT Pro 自 2024 年 12 月推出起即定价 **$200/mo**，截至 2026 年未变。Plus $20/mo 正确。
- **来源**: OpenAI 官方定价

### 2. `codeium` — 品牌已更名，整体内容过时
- **文件内容**: 以 "Codeium" 独立品牌收录，定价 Free / Pro $15 / Teams $25
- **实际情况**: Codeium 于 2024 年更名 **Windsurf**；2026 年 6 月被 Cognition 收购后再次更名为 **Devin Desktop**，Codeium 品牌已不再使用（旧 pricing 页直接重定向）。当前定价：Pro $20/月起、Teams $40/user/月起、新增 Max $200/mo 档。
- **建议**: 用 "Devin Desktop（原 Windsurf / Codeium）" 重写，或直接替换为当前品牌。

### 3. `copygenius` — 编造不存在的定价档位
- **文件内容**: Starter `$19/mo` | Pro `$49/mo`
- **实际情况**: CopyGenius 官方档位为 Free $0 / **Starter $19** / **Premium $39** / **Unlimited $79**（copygenius.io 定价页）。**不存在 $49 的 "Pro" 档**。另有同名站点 copy-genuis.com（$25/$65/$150），与 copygenius.io 为不同产品，需确认收录对象。

### 4. `adcreative` — 定价与官方严重不符
- **文件内容**: Starter `$29/mo` | Pro `$149/mo` | Agency Custom
- **实际情况**: AdCreative.ai 官方档位：Starter **$39/mo**（$29 为年付促销价）、Professional **$249/mo**、Ultimate **$999/mo**、Enterprise Custom。**$149 档不存在**。

### 5. `beautiful-ai` — 虚构免费版 + 年付价当月价
- **文件内容**: Free $0（"1 slide per deck"）| Pro $12/month | Team $40/month
- **实际情况**: Beautiful.ai **没有永久免费版**，仅 14 天免费试用；Pro 月付 **$45/mo**（年付约 $12/mo）、Team 月付 $50/user（年付 $40/user）。"1 slide per deck" 的免费版不存在。

### 6. `did`（D-ID）— 定价与官方不符
- **文件内容**: Lite `$5.90/mo` | Pro `$21/mo` | Advanced `$69/mo`
- **实际情况**: 官方 2026 年定价：Trial $0 / Lite **$4.70/mo**（年付）或 $5.90 月付 / Pro **$16/mo**（年付）或 $29 月付 / Advanced **$108/mo**（年付）或 $196 月付。Pro $21 与 Advanced $69 均无对应档位，文件价格明显偏旧。

### 7. `pattern89` — 定价严重低于实际
- **文件内容**: Starter `~$99/mo` | Pro Custom
- **实际情况**: Pattern89 为纯企业级产品，无公开自服务档位，实际合同普遍 **$1,000–$3,000+/mo**（2026 年第三方评估约 $500–2,000/mo 起）。`~$99/mo` 严重失实。

### 8. `instantly` — 档位名称与价格体系失实
- **文件内容**: Growth `$37/mo` | Scale `$97/mo` | Turbo `$197/mo`
- **实际情况**: 官方档位为 Growth **$37.6/mo**（或 $47）、Hypergrowth **$77.6–97/mo**、Light Speed **$286–358/mo**（SISR 专属）。**不存在 "Scale" 与 "Turbo" 档**，$197 无对应档位。

### 9. `writesonic` — 定价体系整体过时
- **文件内容**: Free $0 | Individual $19/mo | Standard $79/mo
- **实际情况**: Writesonic 2026 年已转型为 "AI Search Visibility / GEO" 平台，**无永久免费档**（仅 7 天试用），官方档位为 Starter **$79–99/mo**（年付/月付）、Basic **$199–249/mo**、Growth **$399–499/mo**、Enterprise。$19 的 "Individual" 档已不存在。

### 10. `longform` — 工具存在性存疑
- **文件内容**: 描述为 "来自 Human Proof Designs 社区的 AI 长文引擎"，定价仅 Monthly $19/mo
- **实际情况**: Human Proof Designs 是一家**人工内容代写服务公司**（$160/2 篇文章/月），并非 AI 工具社区；未检索到以 "Longform" 命名的该社区 AI 写作工具。存在性需向数据源作者确认，或整体删除该条目。

---

## 三、有偏差项（⚠️，建议修订）

| # | 工具 | 文件内容 | 实际情况 | 偏差性质 |
|---|---|---|---|---|
| 1 | `seo-ai` | Starter $49 / Pro $99 / Scale $199 | 官方档位 Basic $49 / Plus $99–149 / Premium $199 / Enterprise $399 | 档位命名不符，价格基本吻合 |
| 2 | `opus-clip` | Free / Pro $15 / Vision $29 | 官方 Free（60min）/ **Starter** $15（150min）/ **Pro** $29（300min）/ Business | 档位命名过时（Pro→Starter、Vision→Pro） |
| 3 | `synthesia` | Starter $18 / Creator $64 | 官方 Starter $29/mo（年付 $18）、Creator $89/mo（年付 $64） | 用了年付价但未标注；月付应为 $29/$89 |
| 4 | `designs-ai` | Basic $19 / Pro $49 | 官方 Basic $29（年付 $19）、Pro $69（年付 $49）、Enterprise $199 | 用了年付价未标注；月付应为 $29/$69 |
| 5 | `elevenlabs` | Scale $330/mo | 官方 Scale **$299/mo**（3 seats），部分第三方数据为 $330 | Scale 档价格出入 |
| 6 | `textcortex` | Lite $21 / Unlimited $48 | 官方以欧元计价：Lite €21 / Unlimited €48 | 货币单位未标注 |
| 7 | `drift` | Premium $2,500/yr | Drift 已被 Salesforce 收购，官方不公开定价，$2,500/yr 无来源佐证 | 存疑，建议改为 "Custom" |
| 8 | `firefly` | Firefly Premium $4.99/mo | 官方档位为 Firefly Standard $4.99 / Premium $9.99（月付），Creative Cloud 含 Firefly | 档位命名小出入 |
| 9 | `claude` / `jasper` / `surfer` / `midjourney` | 无 pricing 字段 | Claude：Free/Pro $20/Max $100+；Jasper：Creator $39/Pro $59–69/Business Custom；Surfer：Discovery $49/Standard $99/Pro $182/PoM $299/Enterprise $999；Midjourney：Basic $10/Standard $30/Pro $60/Mega $120 | 与其他 108 个工具结构不一致，缺定价数据 |

---

## 四、核验为基本属实（✅ 节选）

以下工具的定价/功能/存在性经官方页或权威第三方源核对一致（占比 82%）：

**写作/通用 AI**: gemini（Free/$19.99）、grammarly（Free/$12/$15）、quillbot（Free/$9.95）、wordtune（Free/$9.99/$24.99）、ink（Free/$39）、perplexity（Free/$20）、simplified（Free/$12/$24）、anyword（$39/$99）、scalenut（$39/$79/$149）、peppertype（Free/$29）、sudowrite（$10/$22/$44）、copy-ai（Free/$49/$249）、rytr（Free/$9/$29）

**视频**: descript（Free/$12/$24/$40）、runway（Free/$12/$28/$76）、pika（Free/$8/$28/$58）、heygen（Free/$29/$39）、murf（Free/$19/$49）、lovo（Free/$19/$41/$115）、veed（Free/$12/$24/$59）、capcut（Free/$9.99/$14.99）、pictory（Free/$19/$39/$99）、invideo（Free/$25/$60）、fliki（Free/$21/$66）、podcastle（Free/$11.99/$19.99）

**图像/设计**: midjourney 功能描述属实（仅缺 pricing）、dalle-3（API $0.04/图起）、stable-diffusion（开源免费）、canva-ai（Free/$15/$10/person）、ideogram（Free/$8/$20/$60）、leonardo（Free/$12/$30/$60）、recraft（Free/$12/$40）、looka（$20/$65/$96/yr）、kittl（Free/$15/$30）、figma-ai（Free/$15/$45）

**翻译**: deepl（Free/$8.74/$28.74/$57.49）、google-translate（Free/API $20/百万字符）、lokalise（$120/$190）

**SEO**: clearscope（$199/$399/$999）、frase（$14.99/$29.99/$74.99）、neuronwriter（Free/$23/$49）、rankiq（$49/$99）、rightblogger（$19.99/$49.99/$99.99）、contentatscale（$249/$499/$999）、outranking（$99/$199/$399）、marketmuse（$149/$299/$449）

**数据分析**: julius（Free/$20/$40/$100）、polymer（Free/$10/$30）、luzmo（$89/$259/$679）、akkio（$49/$199）、obviously（$150/$450）

**广告/营销自动化**: adzooma（Free/$24.99/$49.99）、optmyzr（$24 起）、persado（Custom）、albert（Custom）、metadata（Custom）、appier（Custom）

**社媒**: buffer-ai（Free/$6/$12 per channel）、hootsuite-ai（$99/$249）、lately（$19/$99）、repurpose（$25/$60/$130）、ocoya（$15/$29/$69）、predis（Free/$29/$59）、publer（Free/$12/$20）、vista-social（Free/$38/$98）

**邮件**: mailchimp-ai（Free/$13/$20/$350）、hubspot-ai（Free/$15/$90/$150）、smartlead（$36/$84）、lavender（Free/$49/$99）、apollo（Free/$49/$79/user）、clay（$149/$349/$800）、reply-io（$49/$79/$99）

**客服**: gong（Custom）、intercom-fin（$39/seat + $0.99/resolution）、forethought（Custom）、zendesk-ai（$55/$89/$50）

**自动化**: zapier-ai（Free/$19.99/$49）、make（Free/$9/$16/$29）、n8n（Community/Cloud $20/$50）

**效率/代码**: notion-ai（Free/$10/$20）、motion（$19/$12）、taskade（Free/$8/$12）、clickup-ai（Free/$7/$12）、gamma（Free/$10/$20/$15）、tome（Free/$16/$25）、cursor（$0/$20/$60/$40）、v0（Free/$20/$30）、lovable（Free/$25/$75）、bolt（Free/$20/$30）、replit-ai（Starter $0/Core $15/Teams $30）

---

## 五、内部一致性检查结果（全部通过）

- ✅ 112 个工具均有 description / tagline / rating 字段
- ✅ rating 均在 0–5 合理区间
- ✅ 所有 alternatives 引用均指向目录内真实存在的工具（无死链）
- ✅ 无空 pricing 数组（4 个工具仅缺 pricing 字段本身，见 ⚠️ 项）

---

## 六、建议行动

1. **优先修复 10 处严重失实项**（第二节），其中 `chatgpt`（$100→$200）、`codeium`（品牌更名）、`copygenius`/`adcreative`/`pattern89`/`instantly`/`writesonic`（定价档位）、`beautiful-ai`（虚构免费版）、`did`（价格）、`longform`（存在性）为最高优先级。
2. **补齐 4 个工具的 pricing 字段**（claude/jasper/surfer/midjourney），保持数据结构一致。
3. **修订 6 处偏差项**：统一标注年付/月付（synthesia、designs-ai）、档位命名对齐官方（seo-ai、opus-clip、firefly）、货币单位标注（textcortex）、无来源定价改 Custom（drift）。
4. 建议为每条定价记录补充 **"价格核验日期"** 与 **"币种/计费周期"** 字段，因 AI 工具定价变动频繁。

---

## 参考来源（主要）

- OpenAI 定价页 / ChatGPT Pro $200
- windsurf.com / codeium.com（品牌更名史）、Cognition 公告
- copygenius.io 官方定价页
- adcreative.ai 官方定价页
- beautiful.ai 官方定价与第三方核验（rightaichoice.com、aiproductivity.ai）
- d-id.com/pricing、costbench.com
- pattern89 第三方评估（cometly.com、levelingup.com、clickz.com）
- instantly.ai 定价页及 emailchaser.com 核验
- writesonic.com 定价页、aiproductivity.ai、frontdeskreview.com
- slashdot.org / sourceforge.net（Human Proof Designs 与 Longform 存疑核验）
- elevenlabs.io/pricing、opus.pro 官方页、synthesia.io/pricing、heygen 官方及第三方定价（aipriceradar.com、ezugc.ai、photonpay.com）
- intercom.com/pricing（Fin $0.99/outcome）
- jasper.ai、surfer 官方及 rightaichoice.com、top50aitools.com、toolchase.com 等
