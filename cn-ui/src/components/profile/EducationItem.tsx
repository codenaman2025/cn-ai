interface EducationItemProps {
  school: string;
  degree: string;
  date: string;
  percentage: string;
}

export default function EducationItem({
  school,
  degree,
  date,
  percentage,
}: EducationItemProps) {
  return (
    <div className="bg-white/5 rounded-xl p-5 border border-white/10 flex gap-4 hover:bg-white/10 transition-colors duration-200">
      {/* School Logo Placeholder */}
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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

      {/* Education Details */}
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
