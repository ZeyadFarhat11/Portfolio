import CodeDaysSection from "../../components/About/CodeDaysSection";
import LandingSection from "../../components/About/LandingSection";
import SkillsetSection from "../../components/About/SkillSetSection";
import "./about.scss";

export default function About() {
  return (
    <main id="about">
      <LandingSection />
      <SkillsetSection />
      <CodeDaysSection />
    </main>
  );
}
