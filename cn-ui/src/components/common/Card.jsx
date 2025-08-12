import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-gray-900/40 p-4 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}
