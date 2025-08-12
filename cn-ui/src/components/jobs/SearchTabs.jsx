import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchTabs({ active, onChange, onSearch }) {
  const [q, setQ] = useState("");
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Enter job title, company, or keyword"
            className="w-full h-20 rounded-xl border border-white/10 bg-gray-900/60 px-10 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-fuchsia-500/40"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
        </div>
      <div className="flex-1" />
      <div className="flex items-center gap-2 w-full justify-between">
        <div className="inline-flex rounded-xl border border-white/10 bg-gray-900/40 p-1 backdrop-blur">
        <button
          className={`px-3 py-1.5 text-sm rounded-lg ${active === "insider" ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"}`}
          onClick={() => onChange("insider")}
        >
          Insider Search
        </button>
        <button
          className={`px-3 py-1.5 text-sm rounded-lg ${active === "web" ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"}`}
          onClick={() => onChange("web")}
        >
          Web Search
        </button>
      </div>
        <button
          onClick={() => onSearch(q)}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg"
        >
          <Search className="size-4" /> Find
        </button>
      </div>
    </div>
  );
}
