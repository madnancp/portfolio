import JourneySection from "./sections/Journey";
import ProjectsSection from "./sections/Projects";
import HeroSection from "./sections/Hero";
import SkillSection from "./sections/Skills";

const HomePage = () => {
  return (
    <div className="w-full space-y-16">
      <HeroSection />
      <JourneySection />
      <ProjectsSection />
      <SkillSection />
    </div>
  )
}

export default HomePage;
