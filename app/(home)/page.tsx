import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";
import HeroSection from "./sections/Hero";

const HomePage = () => {
  return (
    <div className="w-full space-y-16">
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  )
}

export default HomePage;
