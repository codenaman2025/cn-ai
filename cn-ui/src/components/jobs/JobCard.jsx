import React, { useMemo } from "react";
import { Building2, MapPin, Clock, X, Sparkles } from "lucide-react";
import JobBadge from "./JobBadge";
import CompanyLogo from "./CompanyLogo";

export default function JobCard({ job, onDismiss }) {
  const letter = useMemo(() => (job.company?.[0] || "H").toUpperCase(), [job.company]);

  return (
    <div className="group relative flex items-start gap-3 rounded-2xl border border-white/10 bg-gray-900/40 p-4 backdrop-blur hover:bg-white/5">
      <CompanyLogo letter={letter} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-sm font-semibold text-slate-100">{job.title}</h3>
          {job.promoted && <JobBadge label="Promoted" icon={<Sparkles className="size-3" />} />}
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px] text-slate-400">
          <span className="inline-flex items-center gap-1"><Building2 className="size-3.5" /> {job.company}</span>
          <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" /> {job.location}</span>
          <span className="inline-flex items-center gap-1"><Clock className="size-3.5" /> Recent</span>
        </div>

        {job.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {job.tags.map((t) => <JobBadge key={t} label={t} />)}
          </div>
        ) : null}
      </div>

      <div className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          aria-label="Dismiss job"
          onClick={() => onDismiss?.(job.id)}
          className="rounded-lg border border-white/10 bg-white/5 p-1 text-slate-400 hover:text-white"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
