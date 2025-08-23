import { useState } from "react";
import ProfileLayout from "../components/layout/ProfileLayout";
import { Send, Globe, Paperclip, Mic, Cpu, Clock, PlusCircle } from "lucide-react";

export default function ChatPage() {
const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [model, setModel] = useState("Naman AI");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setIsTyping(false);
    // TODO: send to backend with selected model
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };
  return (
    <ProfileLayout
      rightSidebar={null}
    >
      <div className="flex h-[calc(100vh-8rem)] bg-white/10 text-white rounded-xl border border-white/10 overflow-hidden">
        {/* Sidebar with previous chats */}
        <aside className="w-64 border-r border-white/10 p-4 flex flex-col">
          <h2 className="text-lg font-bold mb-4">Chats</h2>

          <div className="flex-1 overflow-y-auto space-y-2">
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5">
              <Clock className="w-4 h-4" /> Today’s Chat
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5">
              <Clock className="w-4 h-4" /> Yesterday
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5">
              <Clock className="w-4 h-4" /> Last 7 days
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5">
              <Clock className="w-4 h-4" /> Older
            </button>
          </div>

          <button className="mt-4 flex items-center gap-2 px-3 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700">
            <PlusCircle className="w-4 h-4" /> New Chat
          </button>
        </aside>

        {/* Chat Widget (centered) */}
        <main className="flex-1 flex flex-col items-center relative">
          {/* Header only visible once chat starts */}
          {messages.length > 0 && (
            <div className="w-full max-w-3xl px-6 py-4 border-b border-white/10 flex justify-between items-center">
              <h1 className="text-lg font-semibold">AI Career Coach</h1>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="bg-gray-800 text-sm px-3 py-1 rounded-lg border border-white/10 focus:outline-none"
              >
                <option>Naman AI</option>
                <option>OpenAI GPT-4</option>
                <option>Claude</option>
                <option>Perplexity</option>
              </select>
            </div>
          )}

          {/* Messages */}
          {messages.length > 0 && (
            <div className="flex-1 w-full max-w-3xl overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-2xl px-4 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-indigo-600 ml-auto"
                      : "bg-white/10 text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          )}

          {/* Input box (centered if no chat yet, bottom otherwise) */}
          <div
            className={`w-full flex justify-center transition-all duration-500 ease-in-out ${
              messages.length > 0 || isTyping ? "absolute bottom-4" : "flex-1 items-center"
            }`}
          >
            <div className="w-full max-w-3xl px-4">
              <div
                className={`relative flex items-center bg-gray-900 border border-white/10 rounded-full px-4 py-2 transition-all duration-500 ease-in-out ${
                  isTyping ? "scale-105 shadow-lg shadow-indigo-600/30" : ""
                }`}
              >
                <input
                  value={input}
                  onChange={handleChange}
                  placeholder="Ask anything about jobs, roles, or @mention a skill"
                  className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-500"
                />
                <div className="flex items-center gap-3 text-gray-400">
                  <Cpu className="w-4 h-4 cursor-pointer hover:text-white" title="Model settings" />
                  <Globe className="w-4 h-4 cursor-pointer hover:text-white" title="Search web" />
                  <Paperclip className="w-4 h-4 cursor-pointer hover:text-white" title="Attach resume" />
                  <Mic className="w-4 h-4 cursor-pointer hover:text-white" title="Voice input" />
                  <button
                    onClick={handleSend}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-full flex items-center gap-1"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProfileLayout>
  );
}
