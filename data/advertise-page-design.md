# /advertise 落地页 + Sponsored 功能技术方案

> 状态：**设计就绪，待 AdSense 审核通过后实施**
> 原则：本方案全部代码在审核通过后再编写与部署；审核期间不动主站功能
> 关联：listing-outreach-plan.md（商务方案）

---

## 一、目标

为 listing 商务提供合规的落地机制：
1. `/advertise` 页面：收录标准 + 定价 + 赞助披露 + 联系入口（商务信任基础）
2. `sponsored` 字段：付费收录标记 + 徽章展示（Google 合规要求）
3. 外链 nofollow：付费 listing 的官网链接不加权（避免买卖链接判定）

## 二、数据层设计（data/tool-content.json）

```jsonc
{
  "slug": {
    // ...现有 12 字段...
    "sponsored": true,          // 新增：是否付费收录（默认 false）
    "sponsored_since": "2026-08" // 可选：起始年月
  }
}
```

- `sponsored` 缺失视为 `false`，向后兼容，不需要动现有 111 个条目

## 三、页面改动清单

### 1. 工具详情页（src/app/tool/[slug]/page.tsx）
- 顶部信息卡标题旁：`sponsored === true` 时显示 **"Sponsored" 徽章**
  - 样式：琥珀色/金色 `bg-amber-100 text-amber-700`，与免费/付费徽章区分
- 官网链接（Visit website）：`sponsored === true` 时加 `rel="nofollow noopener noreferrer"`
- 页面底部：`sponsored === true` 时显示披露句：
  > "Sponsored listing: this placement is paid for by the vendor. It does not affect our review."

### 2. 首页 & 分类页（ToolDirectory / HomeDirectory 组件）
- 卡片：`sponsored` 工具显示小号 "Sponsored" 角标（右上角，替代或并列价格徽章）
- 分类页排序：`sponsored` 工具可置顶（标 Selected），但首页瀑布流保持原样（避免过度干预）

### 3. /advertise 页面（新增 src/app/advertise/page.tsx）
- 路由：`/advertise`（放入 header？或不放，用联系邮箱触达）
- 内容结构：
  1. **Why advertise with us**（受众：Tier-1 营销人，流量定位）
  2. **Placement options**（Featured / Standard 定价表，同 listing-outreach-plan）
  3. **What you get**（权益清单）
  4. **Editorial independence**（赞助披露声明：赞助不影响评测——信任关键）
  5. **Submission / Contact**（邮箱 dewison1987@gmail.com）
- SEO：`metadata` 标题如 "Advertise on AI Tools Directory — Featured Listings"

## 四、合规要点

| 项 | 要求 |
|---|---|
| 徽章 | 所有付费收录必须可见 "Sponsored" |
| nofollow | 付费外链加 `rel="nofollow"`（工具页 Visit 链接） |
| 披露声明 | /advertise 页声明编辑独立性 |
| 审核期 | 未通过前不实施上述任何代码 |

## 五、实施步骤（审核通过后）

- [ ] 1. content 类型加 `sponsored` / `sponsored_since` 可选字段（src/lib/content.ts）
- [ ] 2. 工具页：徽章 + nofollow + 底部披露句
- [ ] 3. ToolDirectory / HomeDirectory：卡片角标
- [ ] 4. 新增 `/advertise` 页面
- [ ] 5. build 验证 + 提交 + push（触发部署）
- [ ] 6. 首个付费客户录入后：content 加 `sponsored: true` → 部署生效

## 六、验收标准

- 付费工具页可见 Sponsored 徽章 + 披露句，Visit 链接为 nofollow
- /advertise 页可访问、含定价与编辑独立性声明
- 首页/分类页付费工具可见角标
- 现有 111 个工具不受影响（sponsored 默认 false）
