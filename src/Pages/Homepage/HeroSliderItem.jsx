import { easeOut, motion } from "motion/react"
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function HeroSliderItem({imgUrl, pageUrl, sliderTitle, sliderTag1, sliderTag2, index, id,initialEvents,PlayAnimation,itemActive, setItemActive,itemPositionX}){
    
    const isItemActive = itemActive === index;

    const CardItem = useRef(null);
    const [hasMounted, setHasMounted] = useState(false);
    
    useEffect(() => {
        setHasMounted(true);
    }, []);

    function focusItemSlider() {
        setItemActive(index)
        if(initialEvents) initialEvents();

        const cardItemPositionX = CardItem.current.getBoundingClientRect().left;
        const cardItemWidth = CardItem.current.getBoundingClientRect().width;
        const cardItemCenter = cardItemPositionX + (cardItemWidth / 2)

        const viewPort = window.innerWidth;
        const viewPortCenter = viewPort / 2;

        const DistanceMoveX = viewPortCenter - cardItemCenter;

        if(itemPositionX) itemPositionX(DistanceMoveX);
    };

    function closeFocusItemSlider(){
        setItemActive(null)
        if(PlayAnimation)PlayAnimation();
    }

    return(
    <motion.div 
    transition={{duration: isItemActive ? 1 : 0.6 , ease:easeOut,delay: !hasMounted ? index * 0.6 : 0}} 
    className="hero__sliderItem" 
    initial={{opacity:0, scale: 1.5, filter:"blur(20px)"}}  
    animate={{opacity:1,scale: isItemActive ? 1.2 : 1,filter:"blur(0px)" ,transitionDuration:200, zIndex: isItemActive ? 10:1}} 
    onClick={focusItemSlider}
    onMouseLeave={closeFocusItemSlider}
    ref={CardItem}
    >

        <Link to={`/proyectos/${pageUrl}`}>
        <img src={`/media/${imgUrl}`} alt="" />
        <div className="hero__slider--1-content slider-overlay--hidden">
            <div className="hero__slider--1-innercontent">
             <img src="/media/icon__link.svg" alt="" className="icon__large" />
             <h3 className="title__h3">{sliderTitle}</h3>
             <div className="hero__slider--1-tags">
                <p className="tags__regular">{sliderTag1}</p>
                <p className="tags__regular">{sliderTag2}</p>
             </div>
            </div>
        </div>   
        </Link>
    </motion.div>
    )
}