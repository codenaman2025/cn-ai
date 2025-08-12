import React from "react";
import { Sparkles } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-slate-900/60 p-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5">
          <Sparkles className="size-5 text-fuchsia-400" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-100">Get AI Powered insights and get hired faster</div>
          <p className="text-xs text-slate-400">Try our custom search + trust engine for sharper matches.</p>
        </div>
      </div>
      <button className="rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
        Get it now
      </button>
    </div>
  );
}
