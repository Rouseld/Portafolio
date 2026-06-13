import { easeIn, easeOut, motion, useAnimate,} from "motion/react"
import React,{useEffect, useRef, useState,} from 'react'


export function InfiniteSlider({SliderItems}){

    const [itemInactive,itemactive] = useState(false);

    const focusSliderItem = () =>{
        if (itemactive === true){
            itemInactive(false)
        } else {
            itemactive(true);
        }
    }

    const allEvents = () => {
        connection(),
        secondConnection(),
        PauseAniamtion();
        console.log('funciona')
    }


     const SliderItemsWithConnection = React.Children.map(SliderItems, (SliderItem) => {
        return React.cloneElement(SliderItem, { initialEvents:allEvents, PlayAnimation:PlayAnimation, });
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
                {x: ['0','-50%']},
                {ease:'linear',duration:16,repeat:Infinity}
            );
    
            return () =>{
                if (remoteControl.current){
                    remoteControl.current.stop();
                }
            }
        },[animate])

    return(

        <motion.div className="hero__innercontainer__bottom__slider" 
        ref={scope}
        >       
             {SliderItemsWithConnection}
             {SliderItemsWithConnection}
    
        </motion.div>
    )
}

