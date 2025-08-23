import { Plus } from "lucide-react";
import EducationItem, { EducationItemProps } from "./EducationItem";

export default function EducationList() {
  const educationData: EducationItemProps[] = [
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

  const handleAddEducation = () => {
    // TODO: open create-education modal / route
    console.log("Add education");
  };

  const handleEditEducation = (index: number) => {
    // TODO: open edit modal with educationData[index]
    console.log("Edit education at index:", index);
  };

  return (
    <section className="space-y-4">
      {/* Title row with + */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Education</h2>
        <button
          onClick={handleAddEducation}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-100 hover:bg-white/10"
          aria-label="Add education"
          title="Add education"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>

      {educationData.map((edu, i) => (
        <EducationItem key={i} {...edu} onEdit={() => handleEditEducation(i)} />
      ))}
    </section>
  );
}
