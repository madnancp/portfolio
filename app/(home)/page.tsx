import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";
import FeaturedProjects from "./sections/FeaturedProjects";
import HeroSection from "./sections/Hero";
import SkillSection from "./sections/Skills";

const HomePage = () => {
  return (
    <div className="w-full space-y-16">
      <HeroSection />
      <ExperienceSection />
      <FeaturedProjects />
      <SkillSection />
      <EducationSection />
    </div>
  )
}

export default HomePage;
