import React from "react";
import { Settings, BookmarkCheck, FilePlus2, LayoutList, ChevronRight } from "lucide-react";

function RailCard({ icon, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-gray-900/40 p-4 text-left text-slate-200 backdrop-blur hover:bg-white/5"
    >
      <div className="grid place-items-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 group-hover:text-white">
        {icon}
      </div>
      <div className="flex-1 font-medium">{title}</div>
      <ChevronRight className="size-4 text-slate-500" />
    </button>
  );
}

export default function RightRail() {
  return (
    <aside className="space-y-3">
      <RailCard icon={<Settings className="size-5" />} title="Preferences" />
      <RailCard icon={<BookmarkCheck className="size-5" />} title="My Jobs" />
      <RailCard icon={<FilePlus2 className="size-5" />} title="Post a free job" />
      <RailCard icon={<LayoutList className="size-5" />} title="Manage job posts" />
    </aside>
  );
}
