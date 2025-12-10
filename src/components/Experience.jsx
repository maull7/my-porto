const experiences = [
  {
    period: "2024 - Sekarang",
    company: "Aurora Creative Studio",
    role: "Frontend Engineer (Freelance)",
    description: "Membangun landing page premium dan dashboard marketing dengan animasi halus dan performa optimal.",
  },
  {
    period: "2023 - 2024",
    company: "Nova Digital Lab",
    role: "UI Engineer",
    description: "Merancang design system Tailwind, memastikan aksesibilitas, serta menerapkan motion yang subtle.",
  },
  {
    period: "2022 - 2023",
    company: "Atlas Learning Platform",
    role: "Frontend Developer",
    description: "Menghadirkan kelas interaktif, autentikasi aman, dan integrasi API yang stabil.",
  },
  {
    period: "2021 - 2022",
    company: "Freelance & Personal Projects",
    role: "Fullstack Web Developer",
    description: "Dashboard analitik, e-commerce UMKM, serta portal internal dengan pendekatan end-to-end.",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="tag">Experience</p>
          <h2 className="title">Timeline perjalanan profesional</h2>
          <p className="subtitle">
            Rangkaian pengalaman dengan pendekatan timeline interaktif bergaya futuristik, alternating layout, dan garis neon.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full timeline-line shadow-[0_0_20px_rgba(56,189,248,0.45)]" />
          <div className="space-y-12">
            {experiences.map((item, idx) => {
              const alignRight = idx % 2 !== 0;
              return (
                <div
                  key={`${item.company}-${item.period}`}
                  className={`grid md:grid-cols-2 gap-6 items-start ${alignRight ? "md:text-left" : "md:text-right"}`}
                >
                  <div className={`order-2 md:order-${alignRight ? "2" : "1"} ${alignRight ? "md:col-start-2" : "md:col-start-1"}`}>
                    <div className="card-blur p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="badge">{item.period}</span>
                        <span className="text-sm text-[var(--muted)]">{item.company}</span>
                      </div>
                      <p className="font-semibold text-xl mt-4">{item.role}</p>
                      <p className="text-[var(--muted)] mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="order-1 md:order-none" aria-hidden="true">
                    <div className="hidden md:flex items-center justify-center h-full">
                      <div className="w-5 h-5 rounded-full bg-white border-4 border-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
