import { SectionTextContent } from "../../Components/SectionTextContent";
import { Slider } from "../../Components/Slider";
import { FadeInUp } from "../../Components/FadeInUp";

export function SectionProcess(){
    return(
        <>

        <section className="section__process">
            <div className="section__process--innercontainer">
                <FadeInUp className="section__process__innercontainer__top">
                    <SectionTextContent TitleHtmlTag={"h2"} 
                    title={"The professional who combines design, code, and strategy to drive your business forward"}
                    highlightedWords={[
                      { word: "design", color: "#D1B5FF" },
                      { word: "code", color: "#726AFF" },
                      { word: "strategy", color: "#FBFFC1" }
                    ]}
                    className={"title__h3"} 
                    description={"My process integrates the conceptualization of intuitive user experiences (UX/UI) with technical implementation in WordPress, ensuring websites that are not only visually appealing but also highly functional. Thanks to my experience in digital marketing and paid campaigns, each project is optimized from the start to drive conversions and business growth."}
                    ></SectionTextContent>  
                </FadeInUp>
                <FadeInUp delay={0.2} className="section__process__innercontainer__bottom">
                    <Slider>
                        <div className="section__process__innercontainer--slideritem process__slider--1">
                            <h4 className="title__h4">Conversion-Driven Design</h4>
                            <p className="text__small">I design products and websites based on marketing strategy, translating campaign objectives and audience insights into intuitive interfaces. This ensures the design logically extends marketing efforts, optimizing user experience and maximizing conversion rates.</p>
                            <img src="/media/Asset__SliderItem1.png" alt="" />
                        </div>
                        <div className="section__process__innercontainer--slideritem process__slider--2">
                            <h4 className="title__h4">Visual Assets Unleashed</h4>
                            <p className="text__small">I craft and refine all necessary project visuals, from precise image cutouts and engaging animations to custom illustrations. This ensures every asset aligns perfectly with the design and enhances the overall user experience</p>
                            <img src="/media/Asset__SliderItem2.png" alt="" />
                        </div>
                        <div className="section__process__innercontainer--slideritem process__slider--3">
                            <h4 className="title__h4">Holistic Digital UI Craftsmanship</h4>
                            <p className="text__small">My approach blends strategic insight with meticulous execution, Design Systems,Front-End & Backend Knowledge, A/B testing methodologies, fully responsive design, and comprehensive development practices. This integrated process ensures the creation of high-quality websites and apps optimized for performance and user satisfaction across all platforms</p>
                            <img src="/media/Asset__SliderItem3.png" alt="" />
                        </div>
                        <div className="section__process__innercontainer--slideritem process__slider--4">
                            <h4 className="title__h4">Pixel-Perfect Implementation</h4>
                            <p className="text__small"> My process integrates the conceptualization of intuitive user experiences (UX/UI) with technical implementation in WordPress, ensuring websites that are not only visually appealing</p>
                            <img src="/media/Asset__SliderItem4.png" alt="" />
                        </div>
                    </Slider>
                </FadeInUp>
            </div>
        </section>
        </>
    )
}