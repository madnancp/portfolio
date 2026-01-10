import JourneySection from "./sections/Journey";
import ProjectsSection from "./sections/Projects";
import AboutSection from "./sections/About";

const HomePage = () => {
  return (
    <div className="w-full space-y-16">
      <AboutSection />
      <ProjectsSection />
      <JourneySection />
    </div>
  )
}

export default HomePage;
