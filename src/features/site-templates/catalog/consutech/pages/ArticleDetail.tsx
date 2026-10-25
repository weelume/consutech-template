import {href} from '../routing';
import Link from 'next/link';
import type {SiteTemplatePageProps} from '../../../types';
import {Shell,PageIntro} from '../components/Shell';
import {Reveal} from '../components/Motion';
import {articles,ui,text,media} from '../content/data';
export function ArticleDetail({basePath,locale='zh',index}:SiteTemplatePageProps&{index:number}){const article=articles[index];return <Shell basePath={basePath} locale={locale}><PageIntro eyebrow={text(article.category,locale)} title={text(article.title,locale)} description={text(article.description,locale)}/><article className="ct-container ct-article ct-section"><Reveal><img className="ct-article-cover" src={media(article.image)} alt={text(article.title,locale)}/></Reveal><div className="ct-prose"><p className="ct-demo-note">{locale==='zh'?'本文为演示内容，不构成专业咨询意见。':'Demonstration content; this is not professional advice.'}</p>{article.sections.map((section,index)=><Reveal key={index}><section><h2>{text(section.title,locale)}</h2><p>{text(section.body,locale)}</p></section></Reveal>)}<Link className="ct-card-link" href={href(basePath,'blog')}>{text(ui.back,locale)}</Link></div></article></Shell>}
