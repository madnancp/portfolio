import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button";
import { SKILLS } from "@/constats/skills";
import { GemIcon, StarIcon } from "lucide-react";

const SkillSection = () => {
  return (
    <section id="skills">
      <SectionTitle title="I'm proficient in" />

      <div className="space-y-6 max-w-3xl space-x-4">
        {SKILLS.map((comp, idx) => (
          <Button className="rounded-full" key={idx} variant={"secondary"}>{comp}</Button>
        ))}
      </div>
    </section>
  )
}

export default SkillSection;
