import { easeIn, easeOut, motion, propEffect } from "motion/react"
import { filter } from "motion/react-client"
import { useRef } from "react";
export function HeroSliderItem({imgUrl, pageUrl, sliderTitle, sliderTag1, sliderTag2, index, id,initialEvents,PlayAnimation,itemActive, setItemActive}){
    
    const isItemActive = itemActive === index;

    const CardItemTest = useRef(null);
    console.log(CardItemTest.current)

    function focusItemSlider() {
        setItemActive(index)
        console.log(itemActive)
        console.log(index)
        if(initialEvents) initialEvents();
    };

    function closeFocusItemSlider(){
        setItemActive(null)
        if(PlayAnimation)PlayAnimation();
    }

    return(
    <motion.div 
    transition={{duration:0.6 , ease:easeOut,delay:index*0.4}} 
    className="hero__sliderItem" 
    initial={{opacity:0, scale: 1.5, filter:"blur(20px)"}}  
    animate={{opacity:1,scale: isItemActive ? 1.2 : 1,filter:"blur(0px)", transitionDuration:200,zIndex: isItemActive ? 10:1,}} 
    onClick={focusItemSlider}
    onMouseLeave={closeFocusItemSlider}
    ref={CardItemTest}
    style={{ backgroundImage: `url(/media/${imgUrl}) `}}>

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