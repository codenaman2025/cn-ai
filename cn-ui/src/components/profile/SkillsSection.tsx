import { useEffect, useMemo, useRef, useState } from "react";
import { Plus, Pencil, Check, X as XIcon } from "lucide-react";

interface SkillsSectionProps {
  skills: string[];
  onChange?: (skills: string[]) => void; // optional callback if parent wants to persist changes
}

export default function SkillsSection({ skills, onChange }: SkillsSectionProps) {
  const [items, setItems] = useState<string[]>(skills);
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  // keep local state in sync if parent props change
  useEffect(() => setItems(skills), [skills]);

  const normalizedSet = useMemo(
    () => new Set(items.map((s) => s.trim().toLowerCase())),
    [items]
  );

  const commit = (next: string[]) => {
    setItems(next);
    onChange?.(next);
  };

  const toggleEditing = () => {
    setEditing((v) => {
      const nv = !v;
      if (nv) {
        // focus input next tick
        setTimeout(() => inputRef.current?.focus(), 0);
      } else {
        setInput("");
      }
      return nv;
    });
  };

  const addSkill = (raw: string) => {
    const value = raw.trim();
    if (!value) return;
    if (normalizedSet.has(value.toLowerCase())) {
      setInput(""); // avoid duplicates
      return;
    }
    const next = [...items, value];
    commit(next);
    setInput("");
  };

  const removeSkill = (idx: number) => {
    const next = items.filter((_, i) => i !== idx);
    commit(next);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSkill(input);
    } else if (e.key === "Backspace" && !input) {
      // quick delete last chip
      removeSkill(items.length - 1);
    }
  };

  const onPlus = () => {
    if (!editing) toggleEditing();
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <section className="bg-white/5 rounded-xl p-5 border border-white/10">
      {/* Header with actions */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Skills</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={onPlus}
            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-100 hover:bg-white/10"
            title="Add skill"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>

          {!editing ? (
            <button
              onClick={toggleEditing}
              className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-100 hover:bg-white/10"
              title="Edit skills"
            >
              <Pencil className="h-4 w-4" />
              Edit
            </button>
          ) : (
            <button
              onClick={toggleEditing}
              className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200 hover:bg-emerald-500/20"
              title="Done"
            >
              <Check className="h-4 w-4" />
              Done
            </button>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-3 rounded-xl border-2 border-dashed border-purple-500/50 flex flex-wrap gap-2">
        {items.map((skill, i) =>
          !editing ? (
            <span
              key={i}
              className="px-3 py-1 rounded-lg text-sm bg-white/10 border border-white/20 text-gray-200"
            >
              {skill}
            </span>
          ) : (
            <span
              key={i}
              className="group inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-sm text-gray-200"
            >
              {skill}
              <button
                onClick={() => removeSkill(i)}
                className="rounded-md p-0.5 hover:bg-white/10"
                aria-label={`Remove ${skill}`}
                title="Remove"
              >
                <XIcon className="h-3.5 w-3.5" />
              </button>
            </span>
          )
        )}

        {/* Inline input appears only while editing */}
        {editing && (
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a skill and press Enter…"
            className="min-w-[12ch] flex-1 bg-transparent text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none"
            aria-label="Add a skill"
          />
        )}
      </div>
    </section>
  );
}
