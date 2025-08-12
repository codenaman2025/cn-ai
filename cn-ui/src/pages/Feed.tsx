import React from "react";
import FeedLayout from "../components/layout/FeedLayout";
import ProfileMiniCard from "../components/feed/Left/ProfileMiniCard";
import NewsUpdates from "../components/feed/Left/NewsUpdates";
import FeedComposer from "../components/feed/Composer/FeedComposer";
import PostCard from "../components/feed/Post/PostCard";
import JobsForYou from "../components/feed/Right/JobsForYou";
import FreelanceList from "../components/feed/Right/FreelanceList";
import NamanBotCard from "../components/feed/Right/NamanBotCard";

// —— Mock data (swap with API later) ——
const me = {
  name: "Ananya Mehta",
  title: "AI Engineer, ROS, SLAM, Deep RL",
  location: "Bengaluru, IN",
  avatar: "https://i.pravatar.cc/120?img=5",
  verified: true,
};
const news = [
  { id: 1, title: "Bengaluru launches AI research park", readers: "18,200", ago: "1d" },
  { id: 2, title: "OpenAI releases GPT-5", readers: "42,400", ago: "1d" },
  { id: 3, title: "India announces national AI strategy", readers: "12,900", ago: "1d" },
  { id: 4, title: "AI jobs surge in tech sector", readers: "18,200", ago: "1d" },
];
const jobs = [
  { id: "j1", title: "Lead Developer", company: "ICE", tag: "Remote", city: "Hyderabad", state: "TN", promoted: true },
  { id: "j2", title: "Sr. Full Stack Developer", company: "B. Labs", tag: "Remote", city: "Bengaluru", state: "KA" },
  { id: "j3", title: "Software Developer", company: "Pixo", tag: "Full-Time", city: "Pune", state: "MH" },
];
const gigs = [
  { id: "g1", role: "MERN Developer", type: "Part Time", city: "Hyderabad", state: "TS" },
  { id: "g2", role: "UX Researcher / Designer", type: "Contract", city: "Bengaluru", state: "KA" },
  { id: "g3", role: "Laravel/Vue Developer", type: "Part Time", city: "Pune", state: "MH" },
];
const seedPosts = [
  {
    id: "p2",
    author: { name: "Vijay Kumar", title: "Computer Vision Specialist", avatar: "https://i.pravatar.cc/120?img=12" },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 13).toISOString(),
    text: "Just wrapped up a successful AI-driven fraud detection project at FinSecure! Model achieved 99.1% precision. Proud of the team! 🙌",
    image: "https://images.unsplash.com/photo-1551281044-8d8e865c7b53?q=80&w=1400&auto=format&fit=crop",
    likes: 412, comments: 5, reposts: 11,
  },
  {
    id: "p1",
    author: { name: "Shantanu P.", title: "Senior AI Engineer", avatar: "https://i.pravatar.cc/120?img=3" },
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    text: `"Success" and "Failure" often wear the same outfit — it's the lens that changes the world.`,
    likes: 128, comments: 23, reposts: 6,
  },
];

export default function Feed() {
  const [posts, setPosts] = React.useState(seedPosts);

  const addPost = (text) => {
    const newPost = {
      id: `p_${Date.now()}`,
      author: me,
      createdAt: new Date().toISOString(),
      text,
      likes: 0, comments: 0, reposts: 0,
    };
    setPosts((p) => [newPost, ...p]);
    // TODO: POST /posts
  };

  return (
    <FeedLayout
      leftSidebar={
        <>
          <ProfileMiniCard user={me} />
          <NewsUpdates items={news} />
        </>
      }
      rightSidebar={
        <>
          <JobsForYou jobs={jobs} />
          <FreelanceList gigs={gigs} />
        </>
      }
      showNavbar={true} // optional
    >
      <FeedComposer me={me} onPost={addPost} />
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </FeedLayout>
  );
}
