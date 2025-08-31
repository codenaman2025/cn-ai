import React from "react";
import { Heart, MessageCircle } from "lucide-react";

interface Post {
  id: number;
  company: string;
  companyLogo: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

export default function PostsSection({ posts }: { posts: Post[] }) {
  return (
    <div className="bg-gray-900/40 rounded-2xl border border-white/10 p-5 w-80 backdrop-blur-sm shadow-sm">
      <h3 className="text-lg font-semibold text-white mb-3">Posts</h3>

      {posts.length === 0 ? (
        <p className="text-gray-400 text-sm">No posts yet</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition shadow-sm"
            >
              {/* Post Header */}
              <div className="flex items-center gap-3">
                <img
                  src={post.companyLogo}
                  alt={post.company}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">{post.company}</p>
                  <p className="text-[11px] text-gray-400">{post.time}</p>
                </div>
              </div>

              {/* Post Content */}
              <p className="mt-3 text-sm text-gray-200">{post.content}</p>

              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="rounded-lg mt-3 border border-white/10"
                />
              )}

              {/* Actions */}
              <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <div className="flex items-center gap-1 hover:text-pink-400 cursor-pointer transition">
                  <Heart size={14} /> <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer transition">
                  <MessageCircle size={14} /> <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
