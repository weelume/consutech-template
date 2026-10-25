# 架构

应用使用 Next.js App Router，`src/app/[[...slug]]/page.tsx` 从模板注册表选择页面；未知路径返回 404。`meta.ts` 是页面和语言的唯一注册入口。

`src/features/site-templates/catalog/consutech/` 采用职责划分：

- `config/brand.ts`：自身品牌、邮箱及年份。
- `content/data.ts`：中英文案、服务、案例、文章、FAQ 和方案。
- `tokens.css`：颜色、字体、字号、间距、玻璃卡片令牌；`theme.css`：组件及响应式样式。
- `components/`：公共导航、页脚、视频、表单和八个首页区块。
- `pages/`：各页面组合，详情页使用显式索引的小型路由入口。
- `host.tsx`：可选的品牌、Logo、页脚槽位与市场链接注入接口；无注入时使用自身品牌。

页面保持服务端组合，交互封装在客户端组件。模板根样式限定于 `data-template=consutech` 与 ct 前缀，不修改全局主题。静态内容支持空搜索结果；集合范围从数据长度计算。

所有运行素材本地托管。联系表单没有网络请求、存储或外部发送；视频错误被显式记录并展示可重试提示。开发环境 debug 日志记录菜单、区块状态、轮播选择、视频播放与校验结果，不输出表单内容。
