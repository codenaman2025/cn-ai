import React from "react";

export default function JobFormPreferences() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm text-gray-300 mb-1">Work Preferences</label>
        <div className="flex gap-2">
          {["Remote", "On-site", "Hybrid"].map((pref) => (
            <button key={pref} className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-cyan-600/20 hover:text-cyan-300">
              {pref}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-1">Other Notes</label>
        <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" rows={3} placeholder="Additional details"></textarea>
      </div>
    </div>
  );
}
