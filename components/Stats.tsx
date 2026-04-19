const stats = [
  { label: "Android Apps" },
  { label: "Electrical Execution Work" },
  { label: "Reliable Services" },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center py-8 px-4 group">
              <div className="text-xs tracking-[0.2em] uppercase text-gray-600 font-bold"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
