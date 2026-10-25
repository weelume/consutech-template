import type {SiteTemplatePageProps} from '../../../types';
import {Shell,PageIntro} from '../components/Shell';
import {ArticleList} from '../components/ArticleList';
import {ui,text} from '../content/data';
export default function BlogPage({basePath,locale='zh'}:SiteTemplatePageProps){return <Shell basePath={basePath} locale={locale}><PageIntro eyebrow={locale==='zh'?'洞察':'INSIGHTS'} title={text(ui.blog,locale)} description={locale==='zh'?'关于技术、团队与长期价值的思考。演示文章，仅供模板展示。':'Ideas on technology, teams, and lasting value. Demonstration articles for this template.'}/><ArticleList basePath={basePath} locale={locale}/></Shell>}
