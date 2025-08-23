import { Pencil } from "lucide-react";

export interface ExperienceItemProps {
  company: string;
  role: string;
  date: string;
  description: string;
  skills: string[];
  onEdit?: () => void;
}

export default function ExperienceItem({
  company,
  role,
  date,
  description,
  skills,
  onEdit,
}: ExperienceItemProps) {
  return (
    <div className="relative flex gap-4 rounded-xl border border-white/10 bg-white/10 p-5 transition-colors duration-200 hover:bg-white/10">
      {/* Edit button (top-right) */}
      <button
        onClick={onEdit}
        className="absolute right-3 top-3 rounded-lg border border-white/10 bg-white/5 p-1.5 text-gray-200 opacity-90 hover:bg-white/10"
        aria-label={`Edit ${company} experience`}
        title="Edit"
      >
        <Pencil className="h-4 w-4" />
      </button>

      {/* Company Logo Placeholder */}
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-logo-start to-logo-end text-2xl font-bold text-white">
        {company?.[0] || "•"}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-bold text-white">{company}</h3>
        <p className="text-sm text-gray-300">{role}</p>
        <p className="text-xs text-gray-400">{date}</p>
        <p className="text-sm leading-relaxed text-gray-300">{description}</p>

        {/* Skills */}
        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-xs text-gray-200 transition-colors hover:bg-white/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
