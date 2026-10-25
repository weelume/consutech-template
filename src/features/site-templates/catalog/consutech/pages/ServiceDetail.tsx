import {href} from '../routing';
import type {SiteTemplatePageProps} from '../../../types';
import {Shell,PageIntro,Button} from '../components/Shell';
import {Reveal} from '../components/Motion';
import {Process} from '../components/Process';
import {Cta} from '../components/Cta';
import {serviceData,ui,text,media} from '../content/data';
export function ServiceDetail({basePath,locale='zh',index}:SiteTemplatePageProps&{index:number}){const service=serviceData[index];return <Shell basePath={basePath} locale={locale}><PageIntro eyebrow={locale==='zh'?'我们的服务':'OUR SERVICES'} title={text(service.title,locale)} description={text(service.description,locale)}/><section className="ct-container ct-section ct-detail-layout"><Reveal x={-50}><img src={media(`services-img-${index+1}.png`)} alt={text(service.title,locale)}/></Reveal><Reveal x={50}><h2>{text(ui.scope,locale)}</h2><ul>{service.items[locale].map(item=><li key={item}>{item}</li>)}</ul><p>{text(ui.pricingNote,locale)}</p><Button to={href(basePath,'contact')}>{text(ui.book,locale)}</Button></Reveal></section><Process locale={locale}/><Cta basePath={basePath} locale={locale}/></Shell>}
