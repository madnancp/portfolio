"use client";
import { SectionTitle } from "@/components/SectionTitle";

const AboutSection = () => {
  return (
    <section>
      <SectionTitle title="About" />
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          I am a software developer focused on the intersection of backend systems and Linux environments.
        </p>
        <p>
          My approach to engineering is driven by a how it works philosophy.  I spend my time exploring system administration, server configurations, and database scaling. When I&apos;m not building for the web with Python and TypeScript, I&apos;m usually writing shell scripts or building CLI tools to optimize my Linux environment.
          I am self-taught, I value efficiency, low-level understanding, and building tools.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
