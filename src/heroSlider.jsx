export function HeroSlider({imgUrl, pageUrl, sliderTitle, sliderTag1, sliderTag2}){
    return(
    <div className="hero__sliderItem">
        <a href={`./portafoliopages/${pageUrl}`}><img src={`../public/media/${imgUrl}`} alt="" /></a>
        <div className="hero__slider--1-content slider-overlay--hidden">
            <div className="hero__slider--1-innercontent">
             <img src="../public/media/icon__link.svg" alt="" className="icon__large" />
             <h3 className="title__h3">{sliderTitle}</h3>
             <div className="hero__slider--1-tags">
                <p className="tags__regular">{sliderTag1}</p>
                <p className="tags__regular">{sliderTag2}</p>
             </div>
            </div>
        </div>   
    </div>
    )
}