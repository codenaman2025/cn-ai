import React, { useEffect, useState } from "react";
import Skeleton from "../components/company/Skeleton";
import ProfileSidebar from "../components/company/ProfileSidebar";
import ActionButtons from "../components/company/ActionButtons";
import JobsSection from "../components/company/JobsSection";
import PostsSection from "../components/company/PostsSection";
import ProfileLayout from "../components/layout/FeedLayout";
export default function CompanyDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
  fetch("../data/company.json")
    .then((res) => res.json())
    .then(setData)
    .catch((err) => console.error("Error loading JSON:", err));
}, []);

  if (!data) {
    return (
      <ProfileLayout
        leftSidebar={<Skeleton className="w-60 h-96" />}
        rightSidebar={<Skeleton className="w-80 h-96" />}
      >
        <Skeleton className="w-60 h-96" />
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout
      leftSidebar={<ProfileSidebar {...data.company} />}
      rightSidebar={<PostsSection posts={data.posts} />}
    >
      <div className="flex flex-col gap-6 flex-1">
        <JobsSection jobs={data.jobs} />
      </div>
    </ProfileLayout>
  );
}
