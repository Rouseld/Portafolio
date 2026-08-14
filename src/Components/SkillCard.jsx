export function SkillCard({ iconUrl, alt = "" }) {
  return (
    <img src={iconUrl} alt={alt} className="skills" />
  );
}