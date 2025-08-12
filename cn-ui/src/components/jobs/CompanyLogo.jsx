import React from "react";

export default function CompanyLogo({ letter = "H" }) {
  return (
    <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500/30 to-cyan-400/20 border border-white/10 text-white font-bold">
      {letter}
    </div>
  );
}
