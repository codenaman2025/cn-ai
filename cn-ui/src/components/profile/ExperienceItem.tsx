interface ExperienceItemProps {
  company: string;
  role: string;
  date: string;
  description: string;
  skills: string[];
}

export default function ExperienceItem({
  company,
  role,
  date,
  description,
  skills,
}: ExperienceItemProps) {
  return (
    <div className="bg-white/5 rounded-xl p-5 border border-white/10 flex gap-4 hover:bg-white/10 transition-colors duration-200">
      {/* Company Logo Placeholder */}
      <div className="w-16 h-16 bg-gradient-to-br from-logo-start to-logo-end rounded-lg flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">
        A
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-bold text-white">{company}</h3>
        <p className="text-sm text-gray-300">{role}</p>
        <p className="text-xs text-gray-400">{date}</p>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-white/10 rounded-lg border border-white/20 text-gray-200 hover:bg-white/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
