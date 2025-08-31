import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { X, PencilLine, Calendar, Briefcase, FileText, Sparkles, LayoutGrid } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateCallout({ isOpen, onClose }: Props) {
//   const actions = [
//       { label: "Post a free job", desc: "Reach more qualified applicants", icon: <Briefcase size={18} /> },
//     //   { label: "Create an event", desc: "Host an event to grow your Page’s community", icon: <Calendar size={18} /> },
//       { label: "Start a post", desc: "Share content to connect with your followers", icon: <PencilLine size={18} /> },
//     { label: "Publish an article", desc: "Connect with followers through long-form content", icon: <FileText size={18} /> },
//     // { label: "Create an Ad", desc: "Generate leads and build brand awareness", icon: <Sparkles size={18} /> },
//     { label: "Create a showcase page", desc: "Add more details about your organization", icon: <LayoutGrid size={18} /> }
//   ];
    const navigate = useNavigate();

  const actions = [
      { label: "Post a free job", desc: "Reach more qualified applicants", icon: <Briefcase size={18} />, route: "/post-job" },
    { label: "Start a post", desc: "Share content to connect with your followers", icon: <PencilLine size={18} /> },
    { label: "Publish an article", desc: "Connect with followers through long-form content", icon: <FileText size={18} /> },
    { label: "Create a showcase page", desc: "Add more details about your organization", icon: <LayoutGrid size={18} /> }
  ];

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);
  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-[9998]" onClick={onClose} />

          {/* Floating Callout */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-32 left-80 w-80 z-[9999]" // adjust position
          >
            <div className="bg-gray-900/95 border border-white/10 rounded-xl shadow-xl p-4 text-white relative">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">Create</h3>
                <button
                  onClick={onClose}
                  className="p-1 rounded-md hover:bg-white/10 transition text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-3">
                {actions.map((a) => (
                  <div key={a.label} className="flex gap-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition"
                  onClick={() => {
                      if (a.route) {
                        navigate(a.route); // ✅ Navigate if route exists
                        onClose();          // close callout
                      }
                    }}
>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-logo-start to-logo-end text-white">
                      {a.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{a.label}</p>
                      <p className="text-[11px] text-gray-400">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
