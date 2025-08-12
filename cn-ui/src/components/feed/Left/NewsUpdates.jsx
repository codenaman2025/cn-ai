export default function NewsUpdates({ items = [] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-4 backdrop-blur-sm shadow-sm">
      <p className="font-semibold text-white">News & Updates</p>
      <ul className="mt-3 space-y-3">
        {items.map((n) => (
          <li key={n.id} className="group">
            <p className="text-sm text-gray-200 group-hover:text-white">{n.title}</p>
            <p className="text-[11px] text-gray-400">{n.ago} ago • {n.readers} readers</p>
          </li>
        ))}
      </ul>
      <button className="mt-3 w-full rounded-xl border border-white/10 py-2 text-sm text-gray-200 hover:bg-white/5">
        Read more
      </button>
    </div>
  );
}
