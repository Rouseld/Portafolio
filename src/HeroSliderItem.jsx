import { easeIn, easeOut, motion, propEffect } from "motion/react"
import { filter } from "motion/react-client"
export function HeroSliderItem({imgUrl, pageUrl, sliderTitle, sliderTag1, sliderTag2, index}){
    return(
    <motion.div 
    transition={{duration:0.6 , ease:easeOut,delay:index*0.4}} 
    className="hero__sliderItem" 
    initial={{opacity:0, scale:1.5, filter:"blur(20px)"}}  
    animate={{opacity:1,scale:1,filter:"blur(0px)"}} 
    style={{ backgroundImage: `url(/media/${imgUrl}) `  }}>
        
        <a href={`./portafoliopages/${pageUrl}`}>
        <div className="hero__slider--1-content slider-overlay--hidden">
            <div className="hero__slider--1-innercontent">
             <img src="../media/icon__link.svg" alt="" className="icon__large" />
             <h3 className="title__h3">{sliderTitle}</h3>
             <div className="hero__slider--1-tags">
                <p className="tags__regular">{sliderTag1}</p>
                <p className="tags__regular">{sliderTag2}</p>
             </div>
            </div>
        </div>   
        </a>
    </motion.div>
    )
}