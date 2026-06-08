import { easeIn, easeOut, motion } from "motion/react"


export function InfiniteSlider({SliderItems}){
    return(
        <motion.div className="hero__innercontainer__bottom__slider" transition={{ease:"linear", duration:15, repeat:Infinity}} initial={{x:"0"}} animate={{ x: "-50%" }}  
        >       
             {SliderItems}
             {SliderItems}
    
        </motion.div>
    )
}

