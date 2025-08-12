import { Sparkles,BadgeCheck  } from "lucide-react";
import avatar from '../../../assets/avatar.png';

export default function ProfileMiniCard({ user }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4 backdrop-blur-sm shadow-sm">
      <div className="flex flex-col items-center gap-3">
        <img src={avatar} alt={user.name} className="h-20 w-20 bg-primary rounded-full object-cover" />
        <div className="text-center">
          <div className="flex items-center gap-1 justify-center">
            <p className="font-semibold text-white">{user.name}</p>
            {user.verified && <BadgeCheck  size={16} className="text-cyan-300" />}
          </div>
          <p className="text-xs text-gray-300">{user.title}</p>
          {user.location && <p className="text-[11px] text-gray-400 mt-0.5">{user.location}</p>}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 text-center">
        {["Posts", "Followers", "Following"].map((k, i) => (
          <div key={k} className={`py-2 ${i !== 2 ? "border-r border-white/10" : ""}`}>
            <p className="text-sm font-semibold text-white">{[56, 1.2, 312][i]}</p>
            <p className="text-[11px] text-gray-400">{k}</p>
          </div>
        ))}
      </div>

      <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-logo-start via-logo-mid to-logo-end py-2 text-sm text-white">
        View Profile
      </button>
    </div>
  );
}
