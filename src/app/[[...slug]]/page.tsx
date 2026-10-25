import {notFound} from 'next/navigation';
import {consutechTemplate} from '../../features/site-templates/catalog/consutech/meta';
export function generateStaticParams(){return consutechTemplate.surfaces[0].pages.flatMap(page=>[{slug:page.slug? page.slug.split('/'):[]},{slug:['en',...(page.slug?page.slug.split('/'):[])]}])}
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const{slug=[]}=await params,locale=slug[0]==='en'?'en':'zh',path=(locale==='en'?slug.slice(1):slug).join('/'),page=consutechTemplate.surfaces[0].pages.find(page=>page.slug===path);if(!page)notFound();const{default:View}=await page.load();return <View locale={locale} basePath={locale==='en'?'/en':''}/> }
