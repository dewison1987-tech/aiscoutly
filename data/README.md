# 工具收录数据（data/）

## tools-seed.csv
首期 AI 工具收录种子清单（112 个工具，12 分类），字段：
`slug, name, category, url, price_model, keyword`

- slug：路由用唯一标识
- category：分类（content/video/image/seo/marketing/social/email/productivity/analytics/sales/translation/dev）
- keyword：目标长尾关键词，用于生成页面 title/描述

## 使用注意
1. **上线前人工核验**：每个工具核验 URL 有效性、功能是否存续、价格模型，核验后标记 verified=true 再导入 Supabase
2. **差异化要求**：每个收录页添加独特点（实测体验/替代品对比/价格变化），防止 scaled content 判定
3. **listing 商务**：优先联系付费意愿高的工具（营销自动化、写作助手、视频生成类），定价建议 $249-499/年

## 导入 Supabase
建表后可通过 Supabase 的 CSV import 功能直接导入 `tools` 表（字段名保持一致）。
