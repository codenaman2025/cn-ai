import React, { useState } from "react";
import { BadgeCheck } from "lucide-react";
import CreateCallout from "./CreateCallout";

interface Props {
  name: string;
  followers: number;
  logo: string;
  verified?: boolean;
}

export default function ProfileSidebar({ name, followers, logo, verified }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <aside className="relative rounded-2xl border border-white/10 bg-gray-900/40 p-6 backdrop-blur-sm shadow-sm flex flex-col items-center">
      {/* Logo */}
      <img src={logo} alt={name} className="h-24 w-24 rounded-full bg-primary object-cover mb-3" />

      {/* Company Info */}
      <div className="text-center">
        <div className="flex items-center gap-1 justify-center">
          <h2 className="font-semibold text-white">{name}</h2>
          {verified && <BadgeCheck size={16} className="text-cyan-300" />}
        </div>
        <p className="text-sm text-gray-400">{followers.toLocaleString()} Followers</p>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 text-center w-full">
        {[
          { label: "Jobs", value: 12 },
          { label: "Posts", value: 34 },
          { label: "Status", value: "✔" }
        ].map((item, i) => (
          <div key={item.label} className={`py-2 ${i !== 2 ? "border-r border-white/10" : ""}`}>
            <p className="text-sm font-semibold text-white">{item.value}</p>
            <p className="text-[11px] text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      {/* +Create button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="mt-4 w-full rounded-xl bg-gradient-to-r from-logo-start via-logo-mid to-logo-end py-2 text-sm text-white shadow-md hover:scale-[1.02] transition relative z-50"
      >
        + Create
      </button>

      {/* Callout drawer */}
      <CreateCallout isOpen={open} onClose={() => setOpen(false)} />

      {/* Navigation */}
      <nav className="mt-5 w-full text-sm">
        {["Feed", "Jobs", "Posts", "Activity", "Inbox"].map((item) => (
          <p key={item} className="p-2 rounded-md hover:bg-white/10 cursor-pointer text-gray-300 hover:text-white">
            {item}
          </p>
        ))}
      </nav>
    </aside>
  );
}
