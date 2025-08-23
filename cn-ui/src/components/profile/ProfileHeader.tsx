import { CheckCircle2, MapPin, Copy, Download, Share, UserPen } from "lucide-react";
import avatar from "../../assets/avatar.png";

export default function ProfileHeader() {
  const copyProfile = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {}
  };

  return (
    <section className="relative rounded-2xl border border-white/10 bg-white/10 p-5 md:p-6 backdrop-blur">
      {/* top row */}
      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
        {/* avatar */}
        <div className="flex-shrink-0">
          <div className="p-[2px] rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-black/40">
              <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* main info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-[22px] md:text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Ananya Mehta
            </h1>
            <span className="inline-flex items-center justify-center rounded-full bg-fuchsia-500/20 p-1">
              <CheckCircle2 className="h-4 w-4 text-fuchsia-400" />
            </span>
          </div>

          <p className="mt-1 text-sm leading-snug text-gray-300">
            AI Engineer, ROS, SLAM, Deep Reinforcement Learning, PyTorch
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Bengaluru, Karnataka, IN
            </span>

            {/* tiny org / tag pill */}
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide text-gray-300">
              XCopAi
            </span>
          </div>
        </div>

        {/* action icons (top-right) */}
        <div className="ml-auto flex items-center gap-2 self-start lg:self-auto">
          <button
            onClick={() => {}}
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            title="Connect"
          >
            <UserPen className="h-4 w-4 text-gray-200" />
          </button>
          <button
            onClick={() => {}}
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            title="Share profile"
          >
            <Share className="h-4 w-4 text-gray-200" />
          </button>
          <button
            onClick={() => {}}
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            title="Download resume"
          >
            <Download className="h-4 w-4 text-gray-200" />
          </button>
        </div>
      </div>

      {/* divider */}
      <div className="my-4 border-t border-white/10" />

      {/* bio */}
      <p className="text-sm leading-relaxed text-gray-300">
        Highly experienced full-stack developer with a strong background in AI, building scalable
        web applications and leading engineering teams.
      </p>
    </section>
  );
}
