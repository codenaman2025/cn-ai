import React, { useState } from "react";
import ProfileLayout from "../components/layout/FeedLayout";
import ProfileSidebar from "../components/company/ProfileSidebar";
import PostsSection from "../components/company/PostsSection";
import JobPostStepper from "../components/company/JobPostStepper";
import JobFormBasicDetails from "../components/company/JobFormBasicDetails";
import JobFormQualifications from "../components/company/JobFormQualifications";
import JobFormPreferences from "../components/company/JobFormPreferences";

export default function JobPostingPage() {
  const [step, setStep] = useState(0);

  return (
    <ProfileLayout
      leftSidebar={<ProfileSidebar name="ABC Company Inc" followers={1011} logo="/logo.png" />}
      rightSidebar={<PostsSection posts={[]} />}
    >
      <div className="bg-gray-900/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-sm flex-1">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Post New Job 
        </h2>

        <JobPostStepper step={step} />

        <div className="mt-6">
          {step === 0 && <JobFormBasicDetails />}
          {step === 1 && <JobFormQualifications />}
          {step === 2 && <JobFormPreferences />}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className={`px-4 py-2 rounded-xl text-sm ${
              step === 0 ? "bg-gray-700/40 text-gray-500 cursor-not-allowed" : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
            disabled={step === 0}
          >
            Previous
          </button>
          <button
            onClick={() => setStep((s) => Math.min(2, s + 1))}
            className="px-4 py-2 rounded-xl bg-cyan-600 text-white text-sm hover:bg-cyan-500"
          >
            {step === 2 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </ProfileLayout>
  );
}
