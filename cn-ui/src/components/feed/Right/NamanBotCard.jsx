import React from "react";
import { Bot, Send, X, Minus, MessageCircle } from "lucide-react";

/** Tiny event helper so any component can open the chat */
export const openNamanBot = () =>
  window.dispatchEvent(new CustomEvent("namanbot:open"));

export default function NamanChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { id: "m1", role: "bot", text: "Hi! I’m NamanBot 👋 — ask me for job matches, profile tips, or referrals." }
  ]);
  const [text, setText] = React.useState("");

  // Allow other components to open the bot (e.g., a button in right rail)
  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("namanbot:open", handler);
    return () => window.removeEventListener("namanbot:open", handler);
  }, []);

  const listRef = React.useRef(null);
  React.useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  const send = () => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: "user", text: t }]);
    setText("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "bot",
          text:
            "Got it! I’ll soon suggest roles and improvements. (Hook this to your real chatbot API).",
        },
      ]);
    }, 500);
  };

  return (
    <>
      {/* Launcher bubble (when closed) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open NamanBot"
          className="fixed bottom-4 right-4 z-[70] rounded-full p-3 shadow-lg
                     bg-gradient-to-r from-logo-start via-logo-mid to-logo-end
                     text-white hover:opacity-95"
        >
          <MessageCircle size={22} />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-4 right-4 z-[70] w-[94vw] max-w-[380px]
                     rounded-2xl border border-white/10 bg-gray-900/95 text-gray-100
                     backdrop-blur shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                <Bot size={18} className="text-cyan-300" />
              </div>
              <div>
                <p className="text-sm font-semibold">NamanBot</p>
                <p className="text-[11px] text-gray-400">Your hiring & profile assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                className="p-1 rounded hover:bg-white/10"
                aria-label="Minimize"
                onClick={() => setOpen(false)}
              >
                <Minus size={16} />
              </button>
              <button
                className="p-1 rounded hover:bg-white/10"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={listRef} className="max-h-[65vh] h-[420px] overflow-y-auto px-3 py-3 space-y-2">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm
                              ${m.role === "user"
                                ? "bg-gradient-to-r from-logo-start via-logo-mid to-logo-end text-white"
                                : "bg-white/10 text-gray-100 border border-white/10"}`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Composer */}
          <div className="flex items-center gap-2 p-3 border-t border-white/10">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-logo-mid"
            />
            <button
              onClick={send}
              className="rounded-xl px-3 py-2 text-sm text-white
                         bg-gradient-to-r from-logo-start via-logo-mid to-logo-end hover:opacity-95"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
