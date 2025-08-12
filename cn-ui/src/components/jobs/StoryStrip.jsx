import React from "react";
import StoryCard from "./StoryCard";

export default function StoryStrip() {
  return (
    <div className="flex items-stretch gap-3 overflow-x-auto no-scrollbar pr-2">
      <StoryCard onCreate={() => console.log("create story")} />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </div>
  );
}
