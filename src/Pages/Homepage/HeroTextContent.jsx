import { FadeInUp } from "../../Components/FadeInUp";

export function HeroTextContent() {
  return (
    <div className="SectionTextContenContainer">
      <div className="section__hero__innercontainer--top">
        <FadeInUp>
          <h3 className="title__h3">Hey There!</h3>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <h1 className="title__h1">I’m Rouseld<span>🙌</span></h1>
        </FadeInUp>
      </div>
      <FadeInUp delay={0.4}>
        <p className="text__medium">
          An UI/UX Designer and Web Developer, optimizing digital platforms with a strategic marketing vision to drive conversion and business growth.
        </p>
      </FadeInUp>
    </div>
  );
}
