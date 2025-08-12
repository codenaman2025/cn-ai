import React from "react";

export default function StoryCard({ name = "User Name", onCreate }) {
  return (
    <div className="group relative w-[180px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gray-900/40 p-2 backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow">
      <div className="aspect-[4/5] w-full rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 grid place-items-center overflow-hidden">
        <div className="size-14 rounded-xl bg-white/5 border border-white/10" />
        <button
          onClick={onCreate}
          className="absolute bottom-2 left-2 rounded-full bg-gradient-to-tr from-fuchsia-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow-md"
        >
          {name}
        </button>
      </div>
      <div className="px-1.5 pt-2 text-xs text-slate-300 truncate"></div>
    </div>
  );
}
