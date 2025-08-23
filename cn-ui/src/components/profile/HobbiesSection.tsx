interface HobbiesSectionProps {
  hobbies: string[];
}

export default function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  return (
    <section className="bg-white/10 rounded-xl p-5 border border-white/10">
      <h2 className="text-lg font-semibold text-white mb-4">Hobbies</h2>
      <div className="flex flex-wrap gap-2">
        {hobbies.map((hobby, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-lg text-sm bg-white/10 border border-white/20 text-gray-200 hover:bg-white/20 transition-colors"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
}
