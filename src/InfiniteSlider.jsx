import { easeIn, easeOut, motion, useAnimate,} from "motion/react"
import React,{useEffect, useRef,} from 'react'


export function InfiniteSlider({SliderItems}){
    
    const [scope,animate] = useAnimate();

    const connection = () =>{
        console.log('hola')
    }

    const SliderItemsWithConnection = React.Children.map(SliderItems, (SliderItem) => {
        return React.cloneElement(SliderItem, { saludar: connection });
    });

    const remoteControl = useRef(null);

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
        onMouseEnter={()=>remoteControl.current.pause()}
        onMouseLeave={()=>remoteControl.current.play()}
        >       
             {SliderItemsWithConnection}
             {SliderItemsWithConnection}
    
        </motion.div>
    )
}

