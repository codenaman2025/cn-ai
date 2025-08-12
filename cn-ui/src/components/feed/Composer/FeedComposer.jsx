import React from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Smile, Hash, Link as LinkIcon, Globe2 } from "lucide-react";
import avatar from '../../../assets/avatar.png';
export default function FeedComposer({ me, onPost }) {
  const [text, setText] = React.useState("");
  const canPost = text.trim().length > 0;

  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4 backdrop-blur-sm shadow-sm">
      <div className="flex gap-3">
        <img src={avatar} className="h-10 w-10 bg-primary rounded-full object-cover" alt="" />
        <div className="flex-1">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share what you're feeling today"
            className="w-full h-10 rounded-xl bg-white/5 px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-logo-mid"
          />
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-300">
              <button className="rounded-lg px-2 py-1 hover:bg-white/5"><ImageIcon size={18} /></button>
              <button className="rounded-lg px-2 py-1 hover:bg-white/5"><Smile size={18} /></button>
              <button className="rounded-lg px-2 py-1 hover:bg-white/5"><Hash size={18} /></button>
              <button className="rounded-lg px-2 py-1 hover:bg-white/5"><LinkIcon size={18} /></button>
              <div className="text-xs flex items-center gap-1 text-gray-400"><Globe2 size={14}/> Public</div>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={!canPost}
              onClick={() => { onPost?.(text); setText(""); }}
              className={`rounded-xl px-4 py-2 text-sm text-white ${
                canPost ? "bg-gradient-to-r from-logo-start via-logo-mid to-logo-end" : "bg-white/10 opacity-60 cursor-not-allowed"
              }`}
            >
              Send
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
