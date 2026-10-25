'use client';
import {href} from '../routing';
import {useRef,useState,useEffect} from 'react';
import {motion,useScroll,useSpring,useTransform,useReducedMotion} from 'framer-motion';
import {benefits,ui,text,media,type Locale} from '../content/data';
import {Reveal} from './Motion';
import {Button} from './Shell';
export function Approach({basePath,locale}:{basePath:string;locale:Locale}){
 const target=useRef<HTMLDivElement>(null),viewport=useRef<HTMLDivElement>(null),track=useRef<HTMLDivElement>(null),[distance,setDistance]=useState(0),reduced=useReducedMotion();
 useEffect(()=>{const measure=()=>{if(track.current&&viewport.current)setDistance(Math.max(0,track.current.offsetHeight-viewport.current.offsetHeight))};measure();const observer=new ResizeObserver(measure);if(track.current)observer.observe(track.current);if(viewport.current)observer.observe(viewport.current);return()=>observer.disconnect()},[]);
 const {scrollYProgress}=useScroll({target,offset:['start start','end end']}),smooth=useSpring(scrollYProgress,{damping:25,stiffness:120,mass:.5}),y=useTransform(smooth,[0,1],[0,-distance]);
 return <div ref={target} className="ct-approach" id="approach"><div className="ct-approach-sticky" style={{backgroundImage:`url(${media('approach-bg.png')})`}}><div className="ct-container ct-approach-layout"><Reveal x={-50} y={20} blur={0} className="ct-approach-copy"><h2>{text(ui.benefits,locale)}</h2><p>{text(ui.intro,locale)}</p><Button to={href(basePath,'services')}>{text(ui.explore,locale)}</Button></Reveal><div ref={viewport} className="ct-benefit-viewport"><motion.div ref={track} style={reduced?{}:{y}} className="ct-benefit-track">{benefits.map((benefit,index)=><article className="ct-benefit ct-glass" key={index}><motion.img src={media(`approch-card-svg-${index+1}.svg`)} alt="" animate={reduced?{}:{rotate:360}} transition={{duration:15,repeat:Infinity,ease:'linear'}}/><div><h3>{text(benefit.title,locale)}</h3><p>{text(benefit.description,locale)}</p></div></article>)}</motion.div></div></div></div></div>
}
