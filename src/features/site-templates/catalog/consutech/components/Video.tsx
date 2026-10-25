'use client';
import {useEffect,useRef,useState} from 'react';
import {useReducedMotion} from 'framer-motion';
import {ui,text,type Locale} from '../content/data';
import {debug} from './Motion';
export function Video({src,locale,background=false,rate=1}:{src:string;locale:Locale;background?:boolean;rate?:number}){
 const ref=useRef<HTMLVideoElement>(null),reduced=useReducedMotion(),[playing,setPlaying]=useState(false),[error,setError]=useState(false);
 useEffect(()=>{const video=ref.current;if(!video)return;video.playbackRate=rate;if(reduced){video.pause();return}void video.play().catch((reason:unknown)=>{console.error('[consutech] video.autoplay.failed',{src,reason:String(reason)});setError(true)});},[reduced,rate,src]);
 async function toggle(){const video=ref.current;if(!video)return;setError(false);if(!video.paused){video.pause();return}try{await video.play()}catch(reason){console.error('[consutech] video.play.failed',{src,reason:String(reason)});setError(true)}}
 return <div className={`ct-video${background?' ct-video-bg':''}`}><video ref={ref} src={src} loop muted playsInline preload={background?'auto':'metadata'} onPlay={()=>{setPlaying(true);setError(false);debug('video.play',{src,rate})}} onPause={()=>{setPlaying(false);debug('video.pause',{src})}} onError={()=>{setError(true);console.error('[consutech] video.load.failed',{src})}} aria-label={locale==='zh'?'业务咨询演示视频':'Business consulting demonstration video'}/><button className={background?'ct-background-control':'ct-play-control'} onClick={()=>void toggle()} aria-label={text(playing?ui.pauseVideo:ui.playVideo,locale)}>{playing?<span className="ct-pause-symbol" aria-hidden="true">Ⅱ</span>:<span aria-hidden="true">▶</span>}</button>{error&&<p role="alert" className="ct-media-error">{text(ui.videoError,locale)}</p>}</div>;
}
