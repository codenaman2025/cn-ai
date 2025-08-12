import React, { useState } from "react";
import { Verified } from "lucide-react";
import JobCard from "./JobCard";

export default function JobsSection({ title, jobs }) {
  const [items, setItems] = useState(jobs || []);
  const dismiss = (id) => setItems((xs) => xs.filter((j) => j.id !== id));

  return (
    <section className="rounded-2xl border border-white/10 bg-gray-900/40 p-4 backdrop-blur">
      <header className="mb-3 flex items-center gap-2">
        <Verified className="size-4 text-fuchsia-400" />
        <h2 className="text-sm font-semibold text-slate-200">{title}</h2>
      </header>
      <div className="flex flex-col gap-3">
        {items.map((j) => <JobCard key={j.id} job={j} onDismiss={dismiss} />)}
      </div>
    </section>
  );
}
