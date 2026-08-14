import { SectionTextContent } from "../../Components/SectionTextContent";
import { SkillCard } from "../../Components/SkillCard";

export function SectionSkills() {
  return (
    <section className="section__skills">
      <div className="section__skills--innercontainer">
        <div className="section__skills__innercontainer--top">
          <SectionTextContent
            TitleHtmlTag="h3"
            title="Where Design Meets Code"
            className="title__h3"
            description="This is where my creative vision and technical skills converge. I leverage a robust suite of tools and platforms to forge the link between aesthetic design and functional development, crafting digital experiences that are both visually compelling and seamlessly executed."
          />
        </div>
        <div className="section__skills__innercontainer--bottom">
          <SkillCard iconUrl="/media/Asset__Skill--1.svg" alt="Skill 1" />
          <SkillCard iconUrl="/media/Asset__Skill--2.svg" alt="Skill 2" />
          <SkillCard iconUrl="/media/Asset__Skill--3.svg" alt="Skill 3" />
          <SkillCard iconUrl="/media/Asset__Skill--4.svg" alt="Skill 4" />
          <SkillCard iconUrl="/media/Asset__Skill--5.svg" alt="Skill 5" />
          <SkillCard iconUrl="/media/Asset__Skill--6.svg" alt="Skill 6" />
          <SkillCard iconUrl="/media/Asset__Skill--7.svg" alt="Skill 7" />
          <SkillCard iconUrl="/media/Asset__Skill--8.svg" alt="Skill 8" />
          <SkillCard iconUrl="/media/Asset__Skill--9.svg" alt="Skill 9" />
          <SkillCard iconUrl="/media/Asset__Skill--10.svg" alt="Skill 10" />
          <SkillCard iconUrl="/media/Asset__Skill--11.svg" alt="Skill 11" />
          <SkillCard iconUrl="/media/Asset__Skill--12.svg" alt="Skill 12" />
          <SkillCard iconUrl="/media/Asset__Skill--13.svg" alt="Skill 13" />
          <SkillCard iconUrl="/media/Asset__Skill--14.svg" alt="Skill 14" />
          <SkillCard iconUrl="/media/Asset__Skill--15.svg" alt="Skill 15" />
          <SkillCard iconUrl="/media/Asset__Skill--16.svg" alt="Skill 16" />
          <SkillCard iconUrl="/media/Asset__Skill--17.svg" alt="Skill 17" />
          <SkillCard iconUrl="/media/Icon__Gohighlevel.webp" alt="GoHighLevel" />
          <SkillCard iconUrl="/media/Icon__Shopify.webp" alt="Shopify" />
          <SkillCard iconUrl="/media/Icon__GoogleLocker.svg" alt="Google Locker" />
        </div>
      </div>
    </section>
  );
}