import ExperienceItem from "./ExperienceItem";

export default function ExperienceList() {
  const experiences = [
    {
      company: "ABC Company",
      role: "Senior Software Engineer",
      date: "Jan 2022 – Jul 2025",
      description:
        "I was responsible for leading the end-to-end design and development of modern, user-centric digital products. My role involved collaborating closely with product managers, developers, and stakeholders to understand business objectives and translate them into intuitive, visually compelling user interfaces.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "React",
        "Design Systems",
        "Prototyping",
        "AI-driven UI",
        "Agile",
      ],
    },
    {
      company: "ABC Company",
      role: "Senior Software Engineer",
      date: "Jan 2022 – Jul 2025",
      description:
        "I was responsible for leading the end-to-end design and development of modern, user-centric digital products. My role involved collaborating closely with product managers, developers, and stakeholders to understand business objectives and translate them into intuitive, visually compelling user interfaces.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "React",
        "Design Systems",
        "Prototyping",
        "AI-driven UI",
        "Agile",
      ],
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Experience</h2>
      {experiences.map((exp, i) => (
        <ExperienceItem key={i} {...exp} />
      ))}
    </section>
  );
}
