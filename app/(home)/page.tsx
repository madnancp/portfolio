import JourneySection from "./sections/Journey";
import ProjectsSection from "./sections/Projects";
import AboutSection from "./sections/About";
import SkillSection from "./sections/Skills";

const HomePage = () => {
  return (
    <div className="w-full space-y-16">
      <AboutSection />
      <JourneySection />
      <ProjectsSection />
    </div>
  )
}

export default HomePage;
