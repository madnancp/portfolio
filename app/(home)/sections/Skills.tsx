import { SectionTitle } from "@/components/SectionTitle"
import { COMPETENCIES } from "@/constats/competencies";
import { GemIcon, StarIcon } from "lucide-react";

const SkillSection = () => {
  return (
    <section>
      <SectionTitle title="Competencies" />

      <div className="space-y-6 max-w-3xl">
        {COMPETENCIES.map((comp, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1">
              {comp.area}
            </h3>
            <p className="text-xs text-gray-600 dark:text-muted-foreground mb-2">
              {comp.description}
            </p>
            <p className="text-xs text-gray-600 dark:text-muted-foreground flex items-center gap-2 font-mono">
              <GemIcon size={10} className="" />
              {comp.key}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillSection;
