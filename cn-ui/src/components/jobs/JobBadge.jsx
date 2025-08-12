import React from "react";

export default function JobBadge({ label, icon }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">
      {icon}
      {label}
    </span>
  );
}
