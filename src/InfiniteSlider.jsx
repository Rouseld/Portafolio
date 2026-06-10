import { easeIn, easeOut, motion, useAnimate,} from "motion/react"
import React,{useEffect, useRef,} from 'react'


export function InfiniteSlider({SliderItems}){
    
    const connection = () =>{
        console.log('hola')
    }

     const SliderItemsWithConnection = React.Children.map(SliderItems, (SliderItem) => {
        return React.cloneElement(SliderItem, { PauseAnimation: PauseAniamtion, PlayAnimation:PlayAnimation });
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

