export function SectionTextContent({ TitleHtmlTag, title, description, className = '' }) {
  return (
    <div className="SectionTextContenContainer">
      <TitleHtmlTag className={`title__${TitleHtmlTag.toLowerCase()} ${className}`}>
        {title}
      </TitleHtmlTag>
      {description && <p className="text__medium">{description}</p>}
    </div>
  );
}