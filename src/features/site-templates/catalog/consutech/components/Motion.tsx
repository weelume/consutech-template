'use client';
import {motion,useReducedMotion,type HTMLMotionProps} from 'framer-motion';
import type {ReactNode} from 'react';
export const ease=[.16,1,.3,1] as const;
export function debug(event:string,detail:Record<string,string|number|boolean>={}){if(process.env.NODE_ENV==='development')console.debug('[consutech]',event,detail)}
export function Reveal({children,x=0,y=30,scale=1,blur=4,delay=0,duration=.8,once=false,className='',...props}:HTMLMotionProps<'div'>&{children:ReactNode;x?:number;y?:number|string;scale?:number;blur?:number;delay?:number;duration?:number;once?:boolean}){
 const reduced=useReducedMotion();
 return <motion.div className={className} initial={reduced?false:{opacity:0,x,y,scale,filter:`blur(${blur}px)`}} whileInView={{opacity:1,x:0,y:0,scale:1,filter:'blur(0px)'}} viewport={{once,amount:.1}} transition={{duration:reduced?0:duration,delay:reduced?0:delay,ease}} {...props}>{children}</motion.div>;
}
export function RollingText({children}:{children:string}){const reduced=useReducedMotion();return <span className="ct-roll" aria-label={children}>{Array.from(children).map((char,index)=><span className="ct-letter" aria-hidden="true" key={index}><motion.span variants={{rest:{y:0},hover:{y:reduced?0:'100%'}}} transition={{duration:.4,ease,delay:reduced?0:.02*index}}>{char===' '?'\u00a0':char}</motion.span><motion.span className="ct-letter-copy" variants={{rest:{y:'-100%'},hover:{y:0}}} transition={{duration:.4,ease,delay:reduced?0:.02*index}}>{char===' '?'\u00a0':char}</motion.span></span>)}</span>}
