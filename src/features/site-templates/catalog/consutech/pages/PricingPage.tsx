import {href} from '../routing';
import type {SiteTemplatePageProps} from '../../../types';
import {Shell,PageIntro,Button} from '../components/Shell';
import {Reveal} from '../components/Motion';
import {Faq} from '../components/Faq';
import {plans,ui,text} from '../content/data';
export default function PricingPage({basePath,locale='zh'}:SiteTemplatePageProps){return <Shell basePath={basePath} locale={locale}><PageIntro eyebrow={locale==='zh'?'合作方案':'PARTNERSHIP'} title={text(ui.pricing,locale)} description={text(ui.pricingNote,locale)}/><section className="ct-container ct-section"><div className="ct-plan-grid">{plans.map((plan,index)=><Reveal key={index} delay={index*.1} className={`ct-plan ct-glass${index===1?' ct-plan-featured':''}`}><span className="ct-eyebrow">0{index+1}</span><h2>{text(plan.name,locale)}</h2><strong>{text(plan.price,locale)}</strong><p>{text(plan.description,locale)}</p><ul>{plan.items[locale].map(item=><li key={item}>{item}</li>)}</ul><Button white={index===1} to={href(basePath,'contact')}>{text(ui.book,locale)}</Button></Reveal>)}</div></section><Faq basePath={basePath} locale={locale}/></Shell>}
