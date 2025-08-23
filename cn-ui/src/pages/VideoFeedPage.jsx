import { useState, useRef, useEffect } from "react";
import ProfileLayout from "../components/layout/ProfileLayout";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Play,
  Pause,
} from "lucide-react";

const sampleVideos = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    owner: "Tech Channel",
    avatar: "https://via.placeholder.com/40",
    title: "Master React in 60s 🚀",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    owner: "Design Daily",
    avatar: "https://via.placeholder.com/40",
    title: "UI/UX tips for beginners 🎨",
  },
  {
    id: 3,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    owner: "Career Hacks",
    avatar: "https://via.placeholder.com/40",
    title: "Ace your interview 💼",
  },
];

export default function VideoFeedPage() {
  const [likes, setLikes] = useState({});
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [muted, setMuted] = useState({});
  const [paused, setPaused] = useState({});
  const videoRefs = useRef({});

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMute = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setMuted((prev) => ({ ...prev, [id]: video.muted }));
    }
  };

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      setPaused((prev) => ({ ...prev, [id]: video.paused }));
    }
  };

  const toggleFullscreen = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen?.();
      setFullscreenVideo(id);
    } else {
      document.exitFullscreen?.();
      setFullscreenVideo(null);
    }
  };

  // 🔹 Auto-pause off-screen videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.id;
          const video = videoRefs.current[id];
          if (!video) return;

          if (entry.isIntersecting) {
            video.play();
            setPaused((prev) => ({ ...prev, [id]: false }));
          } else {
            video.pause();
            setPaused((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.75 } // at least 75% visible
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ProfileLayout rightSidebar={null}>
      <div className="flex justify-center w-full text-white">
        <div className="h-[calc(100vh-4rem)] w-full max-w-[420px] snap-y snap-mandatory overflow-y-scroll scrollbar-hide scroll-smooth">
          {sampleVideos.map((video) => (
            <div
              key={video.id}
              className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center snap-start"
            >
              {/* Video */}
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                src={video.src}
                data-id={video.id}
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 rounded-xl"></div>

              {/* Owner Info */}
              <div className="absolute bottom-24 left-4">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={video.avatar}
                    alt={video.owner}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{video.owner}</p>
                    <button className="text-xs bg-indigo-600 px-3 py-1 rounded-full hover:bg-indigo-700">
                      Follow
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-200 max-w-[250px]">{video.title}</p>
              </div>

              {/* Interaction controls */}
              <div className="absolute bottom-32 right-4 flex flex-col items-center gap-6">
                <button onClick={() => toggleLike(video.id)} className="flex flex-col items-center">
                  <Heart
                    className={`w-7 h-7 ${
                      likes[video.id] ? "fill-red-500 text-red-500" : "text-white"
                    }`}
                  />
                  <span className="text-xs">{likes[video.id] ? "1.2k" : "1.1k"}</span>
                </button>
                <button className="flex flex-col items-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                  <span className="text-xs">345</span>
                </button>
                <button className="flex flex-col items-center">
                  <Share2 className="w-7 h-7 text-white" />
                  <span className="text-xs">Share</span>
                </button>
                <button className="flex flex-col items-center">
                  <Bookmark className="w-7 h-7 text-white" />
                  <span className="text-xs">Save</span>
                </button>
              </div>

              {/* Playback Controls */}
              <div className="absolute top-6 right-6 flex gap-3">
                {/* Play/Pause */}
                <button
                  onClick={() => togglePlay(video.id)}
                  className="bg-black/50 p-2 rounded-full"
                >
                  {paused[video.id] ? (
                    <Play className="w-6 h-6" />
                  ) : (
                    <Pause className="w-6 h-6" />
                  )}
                </button>

                {/* Mute/Unmute */}
                <button
                  onClick={() => toggleMute(video.id)}
                  className="bg-black/50 p-2 rounded-full"
                >
                  {muted[video.id] ? (
                    <VolumeX className="w-6 h-6" />
                  ) : (
                    <Volume2 className="w-6 h-6" />
                  )}
                </button>

                {/* Fullscreen */}
                <button
                  onClick={() => toggleFullscreen(video.id)}
                  className="bg-black/50 p-2 rounded-full"
                >
                  {fullscreenVideo === video.id ? (
                    <Minimize2 className="w-6 h-6" />
                  ) : (
                    <Maximize2 className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfileLayout>
  );
}
