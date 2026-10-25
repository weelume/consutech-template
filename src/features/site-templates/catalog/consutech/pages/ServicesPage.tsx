import type {SiteTemplatePageProps} from '../../../types';
import {Shell,PageIntro} from '../components/Shell';
import {Services} from '../components/Services';
import {Cta} from '../components/Cta';
import {ui,text} from '../content/data';
export default function ServicesPage({basePath,locale='zh'}:SiteTemplatePageProps){return <Shell basePath={basePath} locale={locale}><PageIntro eyebrow={locale==='zh'?'AI 企业咨询':'AI CONSULTANCY'} title={text(ui.services,locale)} description={text(ui.intro,locale)}/><Services basePath={basePath} locale={locale}/><Cta basePath={basePath} locale={locale}/></Shell>}
