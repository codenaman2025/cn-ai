import React from "react";

export default function JobPostStepper({ step }: { step: number }) {
  const steps = ["Basic Details", "Qualification", "Preferences"];
  return (
    <div className="flex gap-6 text-sm font-medium border-b border-white/10 pb-2">
      {steps.map((s, idx) => (
        <span
          key={s}
          className={`pb-1 ${
            idx === step
              ? "text-cyan-400 border-b-2 border-cyan-400"
              : "text-gray-400"
          }`}
        >
          {s}
        </span>
      ))}
    </div>
  );
}
