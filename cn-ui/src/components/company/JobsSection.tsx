import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MoreVertical, Briefcase, Link as LinkIcon } from "lucide-react";

interface Job {
  title: string;
  type: string;
  location: string;
  mode: string;
  postedBy: string;
  date: string;
  status: "Open" | "Draft" | "Paused" | "Closed";
  applicants: number;
  reason?: string;
}

interface Jobs {
  open: Job[];
  draft: Job[];
  paused: Job[];
  closed: Job[];
}

export default function JobsSection({ jobs }: { jobs: Jobs }) {
  const tabs: (keyof Jobs)[] = ["open", "draft", "paused", "closed"];
  const [activeTab, setActiveTab] = useState<keyof Jobs>("open");
  const [menuOpenIdx, setMenuOpenIdx] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpenIdx(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-900/40 rounded-2xl border border-white/10 p-5 flex-1 backdrop-blur-sm shadow-sm">
      <h3 className="text-lg font-semibold text-white mb-3">Jobs</h3>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/10 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 capitalize transition ${
              activeTab === tab
                ? "text-cyan-400 font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-logo-start via-logo-mid to-logo-end rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      {jobs[activeTab].length === 0 ? (
        <p className="text-gray-400 text-sm">No {activeTab} jobs available</p>
      ) : (
        <div className="space-y-3">
          {jobs[activeTab].map((job, idx) => {
            const jobSlug = job.title.replace(/\s+/g, "-").toLowerCase();

            return (
              <div
                key={idx}
                className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-sm cursor-pointer"
                onClick={() => navigate(`/jobs/${jobSlug}`)} // ✅ click on card
              >
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{job.title}</p>
                    <p className="text-xs text-gray-400">{job.type}</p>
                    <p className="text-xs text-gray-400">
                      {job.location} ({job.mode})
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Posted by {job.postedBy} on{" "}
                      {new Date(job.date).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Applicants + Kebab Menu */}
                  <div
                    className="flex items-center gap-2 relative"
                    onClick={(e) => e.stopPropagation()} // prevent card click
                  >
                    <span className="text-xs text-cyan-400 cursor-pointer">
                      {job.applicants} applicants
                    </span>
                    <button
                      onClick={() =>
                        setMenuOpenIdx(menuOpenIdx === idx ? null : idx)
                      }
                      className="p-1 rounded-md hover:bg-white/10 transition"
                    >
                      <MoreVertical
                        size={16}
                        className="text-gray-400 hover:text-white"
                      />
                    </button>

                    {/* Flyout Menu */}
                    {menuOpenIdx === idx && (
                      <div
                        ref={menuRef}
                        className="absolute right-0 top-6 w-40 bg-gray-900/95 border border-white/10 rounded-lg shadow-lg z-50"
                      >
                        <div
                          className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 cursor-pointer"
                          onClick={() => navigate(`/jobs/${jobSlug}`)} // ✅ Manage job → details page
                        >
                          <Briefcase size={16} className="text-gray-300" />
                          <span className="text-sm text-white">Manage job</span>
                        </div>
                        <div
                          className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 cursor-pointer"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              window.location.origin + `/jobs/${jobSlug}`
                            );
                            setMenuOpenIdx(null);
                          }}
                        >
                          <LinkIcon size={16} className="text-gray-300" />
                          <span className="text-sm text-white">Copy link</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status */}
                <p
                  className={`mt-2 text-xs ${
                    job.status === "Paused"
                      ? "text-red-400"
                      : job.status === "Open"
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  {job.status} · Free job post
                </p>

                {/* Paused reason / info */}
                {job.reason && (
                  <div className="mt-2 text-[11px] text-gray-300 bg-black/20 p-2 rounded-md flex gap-2">
                    <Briefcase
                      size={14}
                      className="text-gray-400 shrink-0 mt-0.5"
                    />
                    <span>
                      {job.reason}{" "}
                      <a href="#" className="text-cyan-400 hover:underline">
                        Adjust your budget
                      </a>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
