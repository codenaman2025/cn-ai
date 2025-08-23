import { Pencil } from "lucide-react";

export interface EducationItemProps {
  school: string;
  degree: string;
  date: string;
  percentage: string;
  onEdit?: () => void;
}

export default function EducationItem({
  school,
  degree,
  date,
  percentage,
  onEdit,
}: EducationItemProps) {
  return (
    <div className="relative flex gap-4 rounded-xl border border-white/10 bg-white/10 p-5 transition-colors duration-200 hover:bg-white/10">
      {/* Edit button */}
      <button
        onClick={onEdit}
        className="absolute right-3 top-3 rounded-lg border border-white/10 bg-white/5 p-1.5 text-gray-200 hover:bg-white/10"
        aria-label={`Edit ${school}`}
        title="Edit"
      >
        <Pencil className="h-4 w-4" />
      </button>

      {/* School Logo Placeholder */}
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
          />
        </svg>
      </div>

      {/* Details */}
      <div className="flex-1">
        <h3 className="font-semibold text-white">{school}</h3>
        <p className="text-sm text-gray-300">{degree}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>

      {/* Percentage */}
      <div className="flex items-center">
        <span className="font-semibold text-white">{percentage}</span>
      </div>
    </div>
  );
}
