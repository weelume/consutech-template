'use client';
import {createContext,useContext,type ReactNode} from 'react';
import {brand} from './config/brand';
export interface ConsutechHost {brandName:{zh:string;en:string};logo:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:{zh:string;en:string};marketplaceAriaLabel?:{zh:string;en:string};filing?:ReactNode}
const Context=createContext<ConsutechHost>({brandName:brand.name,logo:brand.logo});
export function ConsutechHostProvider({children,...host}:ConsutechHost&{children:ReactNode}){return <Context.Provider value={host}>{children}</Context.Provider>}
export const useConsutechHost=()=>useContext(Context);
