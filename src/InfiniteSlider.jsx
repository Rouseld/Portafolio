import { easeIn, easeOut, motion, useAnimate,} from "motion/react"
import React,{useEffect, useRef, useState,} from 'react'

export function InfiniteSlider({SliderItems}){

    const [itemActive,setItemActive] = useState(null);

    const [sliderMoveX, setSliderMoveX] = useState(0);

    const centerSliderItem = (moveValueX) => {
        setSliderMoveX(prev => prev + moveValueX);
    }
 
    const allEvents = () => {
        PauseAniamtion();
        console.log('funciona')
    }

     const SliderItemsWithConnection = React.Children.map(SliderItems, (SliderItem) => {
        return React.cloneElement(SliderItem, { initialEvents:allEvents, PlayAnimation:PlayAnimation, setItemActive:setItemActive, itemActive:itemActive, itemPositionX:centerSliderItem});
    });

    const [scope,animate] = useAnimate(); 
    const remoteControl = useRef(null);

    function PauseAniamtion(){
        remoteControl.current.pause();
    }

    function PlayAnimation(){
        remoteControl.current.play();
    }

      useEffect(() =>{
            remoteControl.current = animate(
                scope.current,
                {x: ['-25%','-50%']},
                {ease:'linear',duration:16,repeat:Infinity}
            );
    
            return () =>{
                if (remoteControl.current){
                    remoteControl.current.stop();
                }
            }
        },[animate])

    return(

       <motion.div 
            animate={{ x: sliderMoveX }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ width: "100%", overflow: "visible" }}
        >       
             <motion.div 
                 className="hero__innercontainer__bottom__slider" 
                 ref={scope}
             >
                 {SliderItemsWithConnection}
                 {SliderItemsWithConnection}
                 {SliderItemsWithConnection}
                 {SliderItemsWithConnection}
             </motion.div>
             
        </motion.div>
    )
}