import { SectionTextContent } from "../../Components/SectionTextContent"
import { HeroSliderItem } from "./HeroSliderItem"
import { InfiniteSlider } from "../../Components/InfiniteSlider"
import { HeroTextContent } from "./HeroTextContent"

export function HeroSection(){
    return(

        <section className="section__hero">
            <div className="section__hero__innercontainer">
             <div className="section__hero__innercontainer--top">
              <HeroTextContent className="title__h1" title={<>I’m Rouseld<span>🙌</span></>} 
              description="An UI/UX Designer and Web Developer, optimizing digital platforms with a strategic marketing vision to drive conversion and business growth."
              TitleHtmlTag="h1"/>
         </div>
         <div className="section__hero__innercontainer--bottom">
            <InfiniteSlider className="hero__innercontainer__bottom__slider" SliderItems={[
                <HeroSliderItem key="0" imgUrl='Asset__PortafolioImg--2.png' pageUrl='DupontGarageApp.html' index='0' />,
                <HeroSliderItem key="1" imgUrl='Asset__PortafolioImg--7.png' pageUrl='DupontGarageApp.html' index='1' />,
                <HeroSliderItem key="2" imgUrl='Asset__PortafolioImg--3.png' pageUrl='DupontGarageApp.html' index='2' />,
                <HeroSliderItem key="3" imgUrl='Asset__PortafolioImg--4.png' pageUrl='DupontGarageApp.html' index='3' />
            ]} />
         </div>
            </div>

    
        </section>
        
    )
}