import { SectionTextContent } from "../../Components/SectionTextContent";

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
                </div>
            </div>
        </section>
        </>
    )
}