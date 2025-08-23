export default function ProfilePerformance() {
  return (
    <section className="bg-white/10 rounded-xl p-5 border border-white/10 space-y-4">
      <h2 className="text-lg font-semibold text-white">Profile Performance</h2>

      <div className="flex justify-between text-sm text-gray-300">
        <span>Search Appearances</span>
        <span className="font-semibold text-white">56</span>
      </div>

      <div className="flex justify-between text-sm text-gray-300">
        <span>Recruiter Actions</span>
        <span className="font-semibold text-white">12</span>
      </div>

      <div className="flex justify-between text-sm text-gray-300">
        <span>Invites to Apply</span>
        <span className="font-semibold text-white">8</span>
      </div>

      <button className="mt-3 w-full px-3 py-2 rounded-lg bg-gradient-to-r from-logo-start via-logo-mid to-logo-end text-white hover:opacity-90 transition-all">
        Boost Profile
      </button>
    </section>
  );
}
