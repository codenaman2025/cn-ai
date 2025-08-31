import React from "react";

export default function JobFormQualifications() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm text-gray-300 mb-1">Required Skills</label>
        <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" rows={3} placeholder="List must-have skills"></textarea>
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-1">Certifications (optional)</label>
        <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" rows={2} placeholder="Enter certifications"></textarea>
      </div>
    </div>
  );
}
