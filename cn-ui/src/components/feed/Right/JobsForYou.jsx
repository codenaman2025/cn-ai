import { Building2, Clock, Bookmark } from "lucide-react";

function JobCard({ job }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 font-bold text-white">
          {job.title?.[0]}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{job.title}</p>
          <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[11px] text-gray-300">
            <span className="inline-flex items-center gap-1"><Building2 size={12}/>{job.company}</span>
            <span className="inline-flex items-center gap-1"><Clock size={12}/>{job.tag}</span>
            <span>{job.city}, {job.state}</span>
            {job.promoted && <span className="rounded bg-yellow-500/20 px-1.5 py-0.5 text-[10px] text-yellow-300">Promoted</span>}
          </div>
        </div>
        <button className="rounded-md p-1 text-gray-300 hover:bg-white/5"><Bookmark size={16}/></button>
      </div>
    </div>
  );
}

export default function JobsForYou({ jobs = [], onShowAll }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-white">Top Jobs For You</p>
        <button onClick={onShowAll} className="text-xs text-gray-300 hover:text-white">Show all</button>
      </div>
      <div className="mt-3 space-y-3">
        {jobs.map((j) => <JobCard key={j.id} job={j} />)}
      </div>
    </div>
  );
}
