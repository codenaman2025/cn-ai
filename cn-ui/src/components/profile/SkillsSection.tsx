interface SkillsSectionProps {
  skills: string[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="bg-white/5 rounded-xl p-5 border border-white/10">
      <h2 className="text-lg font-semibold text-white mb-4">Skills</h2>

      {/* Container with dashed border */}
      <div className="p-3 rounded-xl border-2 border-dashed border-purple-500/50 flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-lg text-sm bg-white/10 border border-white/20 text-gray-200 hover:bg-white/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
