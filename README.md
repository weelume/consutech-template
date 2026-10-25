# ConsuTech · AI 企业咨询

基于公开参考设计实现的双语咨询网站。21 个页面、42 条路由，包含首页、五项服务详情、关于、合作方案、三个案例、博客和三篇文章、联系及政策页面。所有表单仅在浏览器校验，不发送、不保存。案例、评价及指标为演示内容。

首次阅读 `.tpl/README.md`、`.tpl/template.json`、`.tpl/project.json`。架构、修改方法、素材与动效清单位于 `.tpl/docs/`。

环境：Node 24.16.0，pnpm 9.15.4。使用项目锁定版本，不升级依赖。

```text
pnpm install --frozen-lockfile
pnpm dev
```

默认预览 `http://127.0.0.1:43510`，英文 `/en`。`PORT` 可调整端口；停止时使用 Ctrl+C。生产预览先执行 `pnpm build`，再执行 `PORT=43510 pnpm start`。无数据库或服务端密钥配置。

```text
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

构建与依赖安装在本地 Linux 文件系统进行。不得使用服务器代替本地构建。修改品牌、文案、主题时遵循 `.tpl/customization.json`。`pnpm bundle` 生成组件包；完整源码以 Git 快照交付，不能以组件包代替源码。

原站参考素材的商业再分发权利尚未核实，保持 `listed=false`、`redistributionAllowed=false`。公开访问与源码交付不构成商业授权。以 `.tpl/docs/VERIFICATION.md` 为实际验收记录，不能将构建通过理解为所有动效已逐帧对照。
