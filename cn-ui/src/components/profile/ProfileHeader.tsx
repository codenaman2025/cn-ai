import { CheckCircle2, MapPin, Copy, Download, Share } from "lucide-react";
import avatar from "../../assets/images/avatar.png";

export default function ProfileHeader() {
  return (
    <section className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
      {/* Avatar */}
      <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
        <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-white">Ananya Mehta</h1>
          <CheckCircle2 className="text-logo-mid w-5 h-5" />
        </div>
        <p className="text-sm text-gray-300">
          AI Engineer, ROS, SLAM, Deep Reinforcement Learning, PyTorch
        </p>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <MapPin className="w-4 h-4" /> Bengaluru, Karnataka, IN
        </div>

        <div className="flex gap-2 mt-2">
          <button className="px-3 py-1 bg-white/10 rounded-lg flex items-center gap-1 text-sm hover:bg-white/20">
            <Share  className="w-4 h-4" /> Share Profile
          </button>
          <button className="px-3 py-1 bg-white/10 rounded-lg flex items-center gap-1 text-sm hover:bg-white/20">
            <Download className="w-4 h-4" /> Download Resume
          </button>
        </div>
      </div>

      {/* Bio */}
      <div className="flex-1 lg:ml-auto">
        <p className="text-sm text-gray-300">
          Highly experienced full stack developer with a strong background in AI, building scalable web applications and leading engineering teams.
        </p>
      </div>
    </section>
  );
}
