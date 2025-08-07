import CertificationItem from "./CertificationItem";

export default function CertificationsList() {
  const certs = [
    { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
    { title: "Google Professional Cloud Architect", issuer: "Google Cloud", year: "2023" },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Certifications</h2>
      {certs.map((cert, i) => (
        <CertificationItem key={i} {...cert} />
      ))}
    </section>
  );
}
