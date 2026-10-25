import type {SiteTemplatePageProps} from '../../../types';
import {Shell,PageIntro} from '../components/Shell';
import {Approach} from '../components/Approach';
import {Process} from '../components/Process';
import {Cta} from '../components/Cta';
import {Reveal} from '../components/Motion';
import {ui,text,media} from '../content/data';
export default function AboutPage({basePath,locale='zh'}:SiteTemplatePageProps){return <Shell basePath={basePath} locale={locale}><PageIntro eyebrow={locale==='zh'?'关于我们':'ABOUT US'} title={text(ui.about,locale)} description={text(ui.footer,locale)}/><section className="ct-container ct-section ct-about-intro"><Reveal x={-50}><img src={media('impact-img-1.png')} alt={locale==='zh'?'团队协作':'Team collaboration'}/></Reveal><Reveal x={50}><h2>{locale==='zh'?'把技术的可能\n变成业务的价值':'Turning technological possibility into business value'}</h2><p>{locale==='zh'?'我们相信，好的咨询从倾听开始。理解团队的工作、客户的期待与业务的边界，再一起设计务实的改变。':'Good consulting starts with listening. Understand the team’s work, customer expectations, and business boundaries, then design practical change together.'}</p><p>{text(ui.demo,locale)}</p></Reveal></section><Approach basePath={basePath} locale={locale}/><Process locale={locale}/><Cta basePath={basePath} locale={locale}/></Shell>}
