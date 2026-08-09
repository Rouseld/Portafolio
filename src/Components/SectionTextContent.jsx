export function SectionTextContent({ TitleHtmlTag, title, description, className}) {
  return (
    <div className="SectionTextContenContainer">
      <TitleHtmlTag className={`${className}`}>
        {title}
      </TitleHtmlTag>
      <p className="text__medium">
        {description}
      </p>
    </div>
  );
}