import { SectionTextContent } from "../../Components/SectionTextContent";
import { Slider } from "../../Components/Slider";

export function SectionProcess(){
    return(
        <>

        <section className="section__process">
            <div className="section__process--innercontainer">
                <div className="section__process__innercontainer__top">
                    <SectionTextContent TitleHtmlTag={"h2"} 
                    title={<>The professional who combines <span style={{ color: '#D1B5FF' }}>design</span>, <span style={{ color: '#726AFF' }}>code</span>, and <span style={{ color: '#FBFFC1' }}>strategy</span> to drive your business forward</>}
                    className={"title__h3"} 
                    description={"My process integrates the conceptualization of intuitive user experiences (UX/UI) with technical implementation in WordPress, ensuring websites that are not only visually appealing but also highly functional. Thanks to my experience in digital marketing and paid campaigns, each project is optimized from the start to drive conversions and business growth."}
                    ></SectionTextContent>  
                </div>
                <div className="section__process__innercontainer__bottom">
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
                </div>
            </div>
        </section>
        </>
    )
}