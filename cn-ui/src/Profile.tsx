import ProfileLayout from "../component/layout/ProfileLayout";
import CertificationsList from "../component/profile/CertificationsList";
import ChoicesSection from "../component/profile/ChoicesSection";
import EducationList from "../component/profile/EducationList";
import ExperienceList from "../component/profile/ExperienceList";
import HobbiesSection from "../component/profile/HobbiesSection";
import IndustryConnections from "../component/profile/IndustryConnections";
import ProfileHeader from "../component/profile/ProfileHeader";
import ProfilePerformance from "../component/profile/ProfilePerformance";
import SkillsSection from "../component/profile/SkillsSection";

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
