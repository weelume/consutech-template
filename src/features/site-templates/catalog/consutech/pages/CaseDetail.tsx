import {href} from '../routing';
import type {SiteTemplatePageProps} from '../../../types';
import {Shell,PageIntro,Button} from '../components/Shell';
import {Reveal} from '../components/Motion';
import {Cta} from '../components/Cta';
import {cases,steps,ui,text,media} from '../content/data';
export function CaseDetail({basePath,locale='zh',index}:SiteTemplatePageProps&{index:number}){const item=cases[index];return <Shell basePath={basePath} locale={locale}><PageIntro eyebrow={item.client} title={text(item.title,locale)} description={text(item.summary,locale)}/><section className="ct-section ct-container"><p className="ct-demo-note">{text(ui.demo,locale)}</p><Reveal><img className="ct-article-cover" src={media(item.image)} alt={text(item.title,locale)}/></Reveal><div className="ct-case-result ct-glass"><strong>{item.metric}</strong><p>{text(item.label,locale)}</p></div><div className="ct-prose">{steps.map((step,index)=><Reveal key={index}><section><h2>{text(step.title,locale)}</h2><p>{text(step.description,locale)}</p></section></Reveal>)}<Button outline to={href(basePath,'case-studies')}>{text(ui.back,locale)}</Button></div></section><Cta basePath={basePath} locale={locale}/></Shell>}
