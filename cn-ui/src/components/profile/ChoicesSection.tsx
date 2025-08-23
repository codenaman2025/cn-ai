interface ChoicesSectionProps {
  choices: string[];
}

export default function ChoicesSection({ choices }: ChoicesSectionProps) {
  return (
    <section className="bg-white/10 rounded-xl p-5 border border-white/10">
      <h2 className="text-lg font-semibold text-white mb-4">Choices</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
        {choices.map((choice, i) => (
          <li key={i}>{choice}</li>
        ))}
      </ul>
    </section>
  );
}
