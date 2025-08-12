import { useState } from "react";
import {
  ThumbsUp, Heart, PartyPopper, Lightbulb, HelpCircle, Handshake, MessageCircle, Repeat2, Send, MoreHorizontal
} from "lucide-react";
const timeAgo = (iso) => {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
};

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(!!post.youLiked);
  const [likes, setLikes] = useState(post.likes);
  const toggleLike = () => {
    setLiked((v) => !v);
    setLikes((n) => (liked ? n - 1 : n + 1));
    if (post.reactions) {
      post.reactions.like = (post.reactions.like || 0) + (liked ? -1 : 1);
    }
  };
  const REACTION_META = {
    like:       { Icon: ThumbsUp,   cls: "bg-blue-500 text-white" },
    love:       { Icon: Heart,      cls: "bg-pink-500 text-white" },
    celebrate:  { Icon: PartyPopper,cls: "bg-yellow-300 text-gray-900" },
    insightful: { Icon: Lightbulb,  cls: "bg-amber-400 text-gray-900" },
    support:    { Icon: Handshake,  cls: "bg-teal-500 text-white" },
    curious:    { Icon: HelpCircle, cls: "bg-indigo-500 text-white" },
  };
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4 backdrop-blur-sm shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img src={post.author.avatar} className="h-10 w-10 rounded-full object-cover" alt="" />
          <div>
            <p className="text-sm font-semibold text-white">{post.author.name}</p>
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <span>{post.author.title}</span><span>•</span><span>{timeAgo(post.createdAt)}</span>
            </div>
          </div>
        </div>
        <button className="rounded-lg p-1 text-gray-400 hover:bg-white/5"><MoreHorizontal size={18} /></button>
      </div>

      <p className="mt-3 text-sm text-gray-200">{post.text}</p>

      {post.image && (
        <div className="mt-4 overflow-hidden rounded-xl bg-black/20">
          <img src={post.image} alt="" className="w-full object-cover" />
        </div>
      )}

      <div className="mt-4 p-2 flex items-center border-b border-white/10 justify-between text-xs text-gray-400">
      <div className="flex items-center gap-2">
        {/* stacked reaction icons */}
        <div className="flex -space-x-1">
          {(() => {
            const counts = post.reactions; // { like: n, love: n, ... } OR undefined
            // choose top 3 reactions present; else show a default trio
            const order = counts
              ? Object.entries(counts).filter(([,v]) => v > 0)
                  .sort((a,b) => b[1]-a[1]).slice(0,3).map(([k]) => k)
              : ["like","love","celebrate"];

            return order.map((key) => {
              const meta = REACTION_META[key] || REACTION_META.like;
              const Icon = meta.Icon;
              return (
                <span
                  key={key}
                  className={`inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-gray-900/60 ${meta.cls}`}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                >
                  <Icon size={10} strokeWidth={2.5} />
                </span>
              );
            });
          })()}
        </div>

        {/* total count */}
        <span>
          {post.reactions
            ? Object.values(post.reactions).reduce((a, b) => a + b, 0)
            : likes}{" "}
          {post.reactions ? "reactions" : "likes"}
        </span>
      </div>

  <span>{post.comments} comments</span>
</div>

      <div className="mt-2 grid grid-cols-4">
        <button onClick={toggleLike} className={`group flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/5 ${liked ? "text-cyan-300" : ""}`}>
          <Heart size={16} className={`group-hover:scale-110 transition ${liked ? "fill-current" : ""}`} /> Like
        </button>
        <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/5">
          <MessageCircle size={16}/> Comment
        </button>
        <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/5">
          <Repeat2 size={16}/> Repost
        </button>
        <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/5">
          <Send size={16}/> Send
        </button>
      </div>
    </div>
  );
}
