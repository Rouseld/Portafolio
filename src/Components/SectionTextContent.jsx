import { ScrambleText } from "./ScrambleText";
import { FadeInUp } from "./FadeInUp";

export function SectionTextContent({ TitleHtmlTag, title, description, className, highlightedWords }) {
  return (
    <div className="SectionTextContenContainer">
      <FadeInUp>
        <TitleHtmlTag className={`${className}`}>
          <ScrambleText InsertText={title} highlightedWords={highlightedWords}></ScrambleText>
        </TitleHtmlTag>
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <p className="text__medium">
          {description}
        </p>
      </FadeInUp>
    </div>
  );
}