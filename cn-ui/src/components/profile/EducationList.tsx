import EducationItem from "./EducationItem";

export default function EducationList() {
  const educationData = [
    {
      school: "ABC University, Pune, India",
      degree: "B.Tech, Computer Science & Engineering",
      date: "2000 – 2004",
      percentage: "70%",
    },
    {
      school: "ABC University, Pune, India",
      degree: "M.Tech, Computer Science & Engineering",
      date: "2004 – 2006",
      percentage: "75%",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Education</h2>
      {educationData.map((edu, i) => (
        <EducationItem key={i} {...edu} />
      ))}
    </section>
  );
}
