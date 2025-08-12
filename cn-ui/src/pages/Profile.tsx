import ProfileLayout from "../components/layout/ProfileLayout";
import CertificationsList from "../components/profile/CertificationsList";
import ChoicesSection from "../components/profile/ChoicesSection";
import EducationList from "../components/profile/EducationList";
import ExperienceList from "../components/profile/ExperienceList";
import HobbiesSection from "../components/profile/HobbiesSection";
import IndustryConnections from "../components/profile/IndustryConnections";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfilePerformance from "../components/profile/ProfilePerformance";
import SkillsSection from "../components/profile/SkillsSection";

export default function Profile() {
  const skills = ["JavaScript", "React", "Node.js", "TypeScript", "SQL", "REST API"];
  const hobbies = ["Photography", "Chess", "Cycling", "Traveling"];
  const choices = ["Remote work", "Full-time roles", "Product-based companies"];
  return (
    <ProfileLayout rightSidebar={<>
          <ProfilePerformance />
          <IndustryConnections />
          <ChoicesSection choices={choices} />
        </>}>
      <ProfileHeader />
      <ExperienceList />
      <SkillsSection skills={skills} />
      <EducationList />
      <CertificationsList />
      <HobbiesSection hobbies={hobbies} />
    </ProfileLayout>
  );
}
