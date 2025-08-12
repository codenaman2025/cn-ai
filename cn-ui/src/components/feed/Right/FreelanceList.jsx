import { Briefcase, Share2 } from "lucide-react";

function GigCard({ gig }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 font-bold text-white">
          {gig.role?.[0]}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{gig.role}</p>
          <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[11px] text-gray-300">
            <span className="inline-flex items-center gap-1"><Briefcase size={12}/>{gig.type}</span>
            <span>{gig.city}, {gig.state}</span>
          </div>
        </div>
        <button className="rounded-md p-1 text-gray-300 hover:bg-white/5"><Share2 size={16}/></button>
      </div>
    </div>
  );
}

export default function FreelanceList({ gigs = [], onShowAll }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-white">Freelance</p>
        <button onClick={onShowAll} className="text-xs text-gray-300 hover:text-white">Show all</button>
      </div>
      <div className="mt-3 space-y-3">
        {gigs.map((g) => <GigCard key={g.id} gig={g} />)}
      </div>
    </div>
  );
}
