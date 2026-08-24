export function ProjectCard({ imageUrl, redirectUrl, title, tags = [] }) {
  return (
    <div className="projectCard__innercontainer" data-redirect-url={redirectUrl}>
      <img
        src={imageUrl}
        alt={title}
        className="section__projects__innercontainer--projectimage"
      />
      <div className="projectItem__overlayContainer">
        <h4 className="title__h4 title__project">{title}</h4>
        <div className="tagscontainer">
          {tags.map((tag, index) => (
            <p key={index} className="tags__small">{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
}