import { Plus } from "lucide-react";
import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";

export default function ExperienceList() {
  const experiences: ExperienceItemProps[] = [
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

  const handleAddExperience = () => {
    // TODO: open create-experience modal / route
    console.log("Add new experience");
  };

  const handleEditExperience = (index: number) => {
    // TODO: open edit modal with experiences[index]
    console.log("Edit experience at index:", index);
  };

  return (
    <section className="space-y-4">
      {/* Title row with + button */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Experience</h2>
        <button
          onClick={handleAddExperience}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-100 hover:bg-white/10"
          aria-label="Add experience"
          title="Add experience"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>

      {experiences.map((exp, i) => (
        <ExperienceItem
          key={i}
          {...exp}
          onEdit={() => handleEditExperience(i)}
        />
      ))}
    </section>
  );
}
