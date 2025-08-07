import ProfileLayout from "../layout/ProfileLayout";
import CertificationsList from "../profile/CertificationsList";
import ChoicesSection from "../profile/ChoicesSection";
import EducationList from "../profile/EducationList";
import ExperienceList from "../profile/ExperienceList";
import HobbiesSection from "../profile/HobbiesSection";
import IndustryConnections from "../profile/IndustryConnections";
import ProfileHeader from "../profile/ProfileHeader";
import ProfilePerformance from "../profile/ProfilePerformance";
import SkillsSection from "../profile/SkillsSection";

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
