import React from "react";

export default function JobFormBasicDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Job Title</label>
          <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" placeholder="Enter Title" />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Employment Type</label>
          <div className="flex gap-2">
            {["Full-time", "Part-time", "Freelance"].map((t) => (
              <button key={t} className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-cyan-600/20 hover:text-cyan-300">
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Experience</label>
          <input type="range" min="0" max="25" className="w-full accent-cyan-500" />
          <div className="flex justify-between text-xs text-gray-400"><span>0 year</span><span>25 years</span></div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Salary Range</label>
          <input type="range" min="0" max="100" className="w-full accent-cyan-500" />
          <div className="flex justify-between text-xs text-gray-400"><span>0 K</span><span>100 L</span></div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Must-have qualifications</label>
          <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" rows={3} placeholder="Enter details"></textarea>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Preferred qualifications</label>
          <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" rows={3} placeholder="Enter details"></textarea>
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Job Description</label>
        <textarea className="w-full h-[400px] bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" placeholder="Enter details"></textarea>
        <span className="text-xs text-cyan-400 mt-1 cursor-pointer hover:underline">
          Let CodeNaman Generate it for you
        </span>
      </div>
    </div>
  );
}
