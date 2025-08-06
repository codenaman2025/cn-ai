interface CertificationItemProps {
  title: string;
  issuer: string;
  year: string;
}

export default function CertificationItem({
  title,
  issuer,
  year,
}: CertificationItemProps) {
  return (
    <div className="bg-white/5 rounded-xl p-5 border border-white/10 flex gap-4 hover:bg-white/10 transition-colors duration-200">
      {/* Logo Placeholder */}
      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-gray-400">
        🎓
      </div>

      {/* Details */}
      <div className="flex-1">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{issuer}</p>
        <p className="text-xs text-gray-400">{year}</p>
      </div>
    </div>
  );
}
