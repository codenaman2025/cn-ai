import React from "react";
import { Edit3, UserCog, BarChart } from "lucide-react";

export default function ActionButtons() {
  const actions = [
    { label: "Post a free job", icon: <Edit3 size={20} /> },
    { label: "Manage recent posts", icon: <UserCog size={20} /> },
    { label: "Track Performance", icon: <BarChart size={20} /> }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {actions.map((a) => (
        <div
          key={a.label}
          className="group relative p-4 rounded-2xl border border-white/10 
                     bg-gradient-to-r from-logo-start via-logo-mid to-logo-end 
                     text-white flex items-center gap-3 cursor-pointer 
                     shadow-md transition-all duration-300 
                     hover:scale-[1.03] hover:shadow-lg"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-logo-start via-logo-mid to-logo-end opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40"></div>

          {/* Icon */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
            {a.icon}
          </div>

          {/* Label */}
          <span className="relative font-semibold">{a.label}</span>
        </div>
      ))}
    </div>
  );
}
