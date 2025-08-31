import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Users, Eye, Briefcase } from "lucide-react";
import Skeleton from "../components/company/Skeleton";
import ProfileLayout from "../components/layout/FeedLayout";
import ProfileSidebar from "../components/company/ProfileSidebar";
import PostsSection from "../components/company/PostsSection";

export default function JobDetailsPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState<any>(null);
  const [company, setCompany] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("../data/company.json")
      .then((res) => res.json())
      .then((data) => {
        setCompany(data.company);
        setPosts(data.posts);

        const allJobs = [
          ...data.jobs.open,
          ...data.jobs.draft,
          ...data.jobs.paused,
          ...data.jobs.closed,
        ];
        const found = allJobs.find(
          (j: any) =>
            j.title.replace(/\s+/g, "-").toLowerCase() === jobId?.toLowerCase()
        );
        setJob(found);
      });
  }, [jobId]);

  if (!job) {
    return (
      <ProfileLayout
        leftSidebar={<Skeleton className="w-60 h-96" />}
        rightSidebar={<Skeleton className="w-80 h-96" />}
      >
        <Skeleton className="flex-1 h-96" />
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout
      leftSidebar={<ProfileSidebar {...company} />}
      rightSidebar={<PostsSection posts={posts} />}
    >
      <div className="flex flex-col gap-6 flex-1">
        {/* Header */}
        <div className="rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-sm p-5 shadow-sm">
          <h2 className="text-2xl font-semibold text-white">{job.title}</h2>
          <p className="text-sm text-gray-400">
            {job.location} ({job.mode}) · {job.type}
          </p>
          <p
            className={`mt-1 text-sm ${
              job.status === "Paused"
                ? "text-red-400"
                : job.status === "Open"
                ? "text-green-400"
                : "text-gray-400"
            }`}
          >
            {job.status} · Posted on {new Date(job.date).toLocaleDateString()}
          </p>

          <div className="flex gap-4 mt-3 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Users size={16} className="text-cyan-400" />
              {job.applicants} applicants
            </div>
            <div className="flex items-center gap-1">
              <Eye size={16} className="text-cyan-400" />
              {Math.floor(Math.random() * 300) + 50} views
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 rounded-xl bg-cyan-600 text-white text-sm hover:bg-cyan-500 transition">
              View applicants
            </button>
            <button className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm hover:bg-red-500 transition">
              Close job
            </button>
            <button className="px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400/10 transition">
              Promote job
            </button>
          </div>
        </div>

        {/* Job Info */}
        <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-5 shadow-sm">
          <div className="flex gap-6 border-b border-white/10 pb-2 mb-4">
            <button className="text-cyan-400 font-semibold">Job Info</button>
            <button className="text-gray-400 hover:text-white">Settings</button>
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">Job Description</h3>
          <div className="text-sm text-gray-200 leading-relaxed space-y-2">
            <p>🌟 <strong>Role:</strong> {job.title}</p>
            <p>📍 <strong>Location:</strong> {job.location}</p>
            <p>🧰 <strong>Requirements:</strong> 1+ year of relevant experience, proficiency in tools</p>
            <p>🚀 <strong>Why Join Us?</strong> Be part of an innovative team driving growth!</p>
            <p>📞 <strong>Contact:</strong> +91 91111 70707</p>
            <p>
              🔗 <a href="https://www.shreeatalgroup.com" className="text-cyan-400 hover:underline">
                Visit Company Website
              </a>
            </p>
          </div>
        </div>

        {/* Performance + Quick Actions (inside center too if needed) */}
        <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4 shadow-sm flex justify-between">
          <div>
            <h4 className="font-semibold text-white mb-2">Job performance</h4>
            <p className="text-sm text-gray-300">{job.applicants} Applicants</p>
            <p className="text-sm text-gray-300">
              {Math.floor(Math.random() * 300) + 50} Views
            </p>
          </div>
          <button className="h-fit px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400/10 transition">
            Promote job
          </button>
        </div>
      </div>
    </ProfileLayout>
  );
}
