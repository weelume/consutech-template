import type {SiteTemplatePageProps} from '../../../types';
import {Shell} from '../components/Shell';
import {Hero} from '../components/Hero';
import {Impact} from '../components/Impact';
import {Services} from '../components/Services';
import {Approach} from '../components/Approach';
import {Process} from '../components/Process';
import {Faq} from '../components/Faq';
import {Cta} from '../components/Cta';
export default function HomePage({basePath,locale='zh'}:SiteTemplatePageProps){return <Shell basePath={basePath} locale={locale} home><Hero basePath={basePath} locale={locale}/><Impact locale={locale}/><Services basePath={basePath} locale={locale}/><Approach basePath={basePath} locale={locale}/><Process locale={locale}/><Faq basePath={basePath} locale={locale}/><Cta basePath={basePath} locale={locale}/></Shell>}
