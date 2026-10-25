import type {SiteTemplatePageProps} from '../../../types';
import {Shell,PageIntro} from '../components/Shell';
import {ContactForm} from '../components/ContactForm';
import {Reveal} from '../components/Motion';
import {brand} from '../config/brand';
import {ui,text,media} from '../content/data';
export default function ContactPage({basePath,locale='zh'}:SiteTemplatePageProps){return <Shell basePath={basePath} locale={locale}><PageIntro eyebrow={locale==='zh'?'联系我们':'LET’S TALK'} title={text(ui.contact,locale)} description={text(ui.intro,locale)}/><section className="ct-container ct-section ct-contact-layout"><Reveal x={-50}><img className="ct-contact-photo" src={media('cta-img-2.png')} alt={locale==='zh'?'咨询讨论':'Consulting discussion'}/><h2>{text(ui.email,locale)}</h2><a href={'mailto:'+brand.email}>{brand.email}</a><p>{text(ui.formNotice,locale)}</p></Reveal><Reveal x={50}><ContactForm locale={locale}/></Reveal></section></Shell>}
