import React, { useState } from "react";
import Card from "../components/common/Card";
import StoryStrip from "../components/jobs/StoryStrip";
import SearchTabs from "../components/jobs/SearchTabs";
import JobsSection from "../components/jobs/JobSection";
import PromoBanner from "../components/common/PromoBanner";
import RightRail from "../components/jobs/RightRail";
import { jobsSeed } from "../data/jobs";
import ProfileNavbar from "../components/layout/ProfileNavbar";

export default function JobFeedPage({ showNavbar = true }) {
  const [mode, setMode] = useState("insider");

  const handleSearch = (q) => {
    // TODO: replace with Insider/Web job search calls
    console.log({ mode, q });
  };

  return (
    <div className="min-h-screen bg-logo-dark text-gray-100">
      {showNavbar && <ProfileNavbar />}
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 pt-6 grid grid-cols-12 gap-6">
        {/* Left / Main */}
        <div className="col-span-12 lg:col-span-9 space-y-4">
          <Card><StoryStrip /></Card>
          <Card><SearchTabs active={mode} onChange={setMode} onSearch={handleSearch} /></Card>
          <JobsSection title="Top Jobs Finds" jobs={jobsSeed} />
          <PromoBanner />
        </div>

        {/* Right Rail */}
        <div className="col-span-12 lg:col-span-3">
          <Card className="p-3"><RightRail /></Card>
        </div>
      </div>
    </div>
  );
}
