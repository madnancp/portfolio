import { SectionTitle } from "@/components/SectionTitle";
import { EDUCATIONS } from "@/constats/education";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="mt-10">
      {/* Section title */}
      <SectionTitle title="Education" />

      <div className="max-w-3xl">
        {EDUCATIONS.map((education, eduIdx) => (
          <div key={eduIdx} className="mb-8">
            {/* Institution Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h4 className="text-base font-bold text-gray-800 dark:text-gray-300 group gap-2">
                  <a
                    href={education.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline group"
                  >
                    {education.institution}
                  </a>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
                </h4>
                <p className="text-xs text-gray-600 dark:text-muted-foreground mt-0.5">
                  {education.location}
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-4 ml-4">
              <div className="relative pl-8 pb-3">
                {/* Icon - only show for current education */}
                {education.isCurrent && (
                  <div className="absolute left-0 top-1 w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-3 h-3 text-black dark:text-white" />
                  </div>
                )}

                {/* Education Header */}
                <div className="mb-2">
                  <div className="flex items-baseline flex-wrap gap-2">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-300 text-sm">
                      {education.degree}
                    </h5>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-muted-foreground">
                    <span className="font-medium">{education.specialization}</span>
                    <span>•</span>
                    <span>{education.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  {education.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-black dark:text-white font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
