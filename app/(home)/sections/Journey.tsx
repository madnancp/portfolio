import { SectionTitle } from "@/components/SectionTitle";
import { EXPERIENCES } from "@/constats/experience";
import { Briefcase } from "lucide-react";


const JourneySection = () => {
  return (
    <section id="experience">
      <SectionTitle title="Journey" />

      <div className="max-w-3xl">
        {EXPERIENCES.map((experience, expIdx) => (
          <div key={expIdx} className="mb-8">
            {/* Company Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h4 className="text-base font-bold text-gray-800 dark:text-gray-300 group gap-2">
                  <a
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline group"
                  >
                    {experience.company}
                  </a>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
                </h4>
                <p className="text-xs text-gray-600 dark:text-muted-foreground mt-0.5">
                  {experience.location} {experience.isRemote && "• Remote"}
                </p>
              </div>
            </div>

            {/* Roles Timeline */}
            <div className="space-y-2 ml-4">
              {experience.roles.map((role, idx) => (
                <div key={idx} className="relative pl-8 pb-3 last:pb-0">
                  {/* Icon - only show for current role */}
                  {role.isCurrent && (
                    <div className="absolute left-0 top-1 w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <Briefcase className="w-3 h-3 text-black dark:text-white" />
                    </div>
                  )}

                  {/* Connecting Line - starts from previous role title center */}
                  {role.isCurrent && idx < experience.roles.length - 1 && (
                    <div className="absolute left-2 top-7 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  )}

                  {/* Role Header */}
                  <div className="mb-2">
                    <div className="flex items-baseline flex-wrap gap-2">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-300 text-sm">
                        {role.title}
                      </h5>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-muted-foreground">
                      <span className="font-medium">{role.type}</span>
                      <span>•</span>
                      <span>{role.period}</span>
                      {/* Only show duration for previous roles */}
                      {!role.isCurrent && role.duration && (
                        <>
                          <span>•</span>
                          <span>{role.duration}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    {role.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-black dark:text-white font-bold mt-0.5 flex-shrink-0">
                          ‣
                        </span>
                        <span className="leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
