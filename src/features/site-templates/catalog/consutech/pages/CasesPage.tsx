import {href} from '../routing';
import Link from 'next/link';
import type {SiteTemplatePageProps} from '../../../types';
import {Shell,PageIntro} from '../components/Shell';
import {Reveal} from '../components/Motion';
import {Cta} from '../components/Cta';
import {cases,ui,text,media} from '../content/data';
export default function CasesPage({basePath,locale='zh'}:SiteTemplatePageProps){return <Shell basePath={basePath} locale={locale}><PageIntro eyebrow={locale==='zh'?'案例研究':'CASE STUDIES'} title={text(ui.cases,locale)} description={text(ui.demo,locale)}/><section className="ct-section ct-container ct-card-grid">{cases.map((item,index)=><Reveal key={item.slug} delay={index*.1}><Link href={href(basePath,'case-studies/'+item.slug)} className="ct-content-card ct-glass"><div className="ct-card-image"><img src={media(item.image)} alt={text(item.title,locale)}/></div><div className="ct-card-copy"><span className="ct-eyebrow">{item.client}</span><h2>{text(item.title,locale)}</h2><p>{text(item.summary,locale)}</p><span className="ct-card-link">{text(ui.details,locale)}</span></div></Link></Reveal>)}</section><Cta basePath={basePath} locale={locale}/></Shell>}
