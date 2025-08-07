import { Plus } from "lucide-react";

interface Connection {
  name: string;
  title: string;
}

export default function IndustryConnections() {
  const connections: Connection[] = [
    { name: "Rajesh Kumar", title: "Senior AI Engineer" },
    { name: "Priya Sharma", title: "Full Stack Developer" },
    { name: "Amit Verma", title: "Data Scientist" },
  ];

  return (
    <section className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-4">
      <h2 className="text-lg font-semibold text-white">Industry Connections</h2>
      {connections.map((conn, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <div>
            <p className="text-sm font-semibold text-white">{conn.name}</p>
            <p className="text-xs text-gray-300">{conn.title}</p>
          </div>
          <button className="flex flex-row px-3 py-1 rounded-lg text-xs bg-white/10 border border-white/20 text-gray-200 hover:bg-white/20 transition-colors">
            <Plus  className="w-4 h-4" />
            Connect
          </button>
        </div>
      ))}
    </section>
  );
}
