import { useMemo } from "react";

const experiences = [
  {
    period: "2024 - Sekarang",
    company: "Aurora Creative Studio",
    role: "Frontend Engineer (Freelance)",
    description:
      "Membangun landing page dan dashboard marketing yang responsif dengan React, optimasi performa, dan kolaborasi dengan tim design.",
  },
  {
    period: "2023 - 2024",
    company: "Nova Digital Lab",
    role: "UI Engineer",
    description:
      "Merancang komponen design system berbasis Tailwind, memperkuat aksesibilitas, dan mengintegrasikan animasi micro-interactions dengan GSAP.",
  },
  {
    period: "2022 - 2023",
    company: "Atlas Learning Platform",
    role: "Frontend Developer",
    description:
      "Mengimplementasikan fitur kelas interaktif, autentikasi, serta integrasi API sehingga pengalaman belajar lebih engaging dan stabil.",
  },
  {
    period: "2021 - 2022",
    company: "Freelance & Personal Projects",
    role: "Fullstack Web Developer",
    description:
      "Mengerjakan proyek custom untuk UMKM: toko online, portal internal, dan dashboard analitik dengan stack MERN & Next.js.",
  },
];

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5"
  >
    <path
      d="M9 6.5V6a3 3 0 0 1 3-3 3 3 0 0 1 3 3v.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect
      x="3.75"
      y="6.5"
      width="16.5"
      height="12.75"
      rx="2.25"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M3.75 11.5h16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10.5 13h3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ExperienceCard = ({ period, company, role, description, align = "left" }) => {
  const alignmentClasses = useMemo(
    () => (align === "left" ? "md:items-end md:text-right" : "md:items-start md:text-left"),
    [align]
  );

  return (
    <div className={`flex ${alignmentClasses}`}>
      <div className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900/80 via-zinc-900/70 to-zinc-900/60 p-6 shadow-[0_20px_60px_-30px_rgba(59,130,246,0.45)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_-30px_rgba(168,85,247,0.5)]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-fuchsia-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-sky-300 ring-1 ring-inset ring-white/10">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-sky-400 opacity-80 blur-[2px]" />
              <span className="relative block h-2 w-2 rounded-full bg-gradient-to-br from-sky-400 via-indigo-400 to-fuchsia-500" />
            </span>
            {period}
          </span>
          <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-200 ring-1 ring-inset ring-white/10">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 text-sky-200 ring-1 ring-inset ring-sky-500/30">
              <BriefcaseIcon />
            </span>
            <span className="font-semibold">{company}</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-200">{role}</p>
          <p className="text-base leading-relaxed text-zinc-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section reveal-up">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-sky-300">Experience</p>
          <h2 className="headline-2 mt-3">Modern Experience Timeline</h2>
          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Jejak pengalaman yang dikurasi dalam timeline interaktif, dirancang dengan sentuhan futuristik dan detail yang
            clean untuk menonjolkan perjalanan profesional.
          </p>
        </div>

        <div className="relative mt-12 md:mt-16">
          <span className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-400/40 to-transparent" aria-hidden="true" />
          <div className="space-y-10 md:space-y-14">
            {experiences.map((experience, index) => {
              const align = index % 2 === 0 ? "left" : "right";

              return (
                <div
                  key={`${experience.company}-${experience.period}`}
                  className="relative grid items-start gap-8 md:grid-cols-2 md:gap-12"
                >
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-sky-400/40 blur-md" />
                      <span className="relative h-4 w-4 rounded-full bg-gradient-to-br from-sky-400 via-indigo-400 to-fuchsia-500 shadow-[0_0_0_10px_rgba(59,130,246,0.12)]" />
                    </span>
                  </span>

                  <div
                    className={`${align === "left" ? "md:col-start-1" : "md:col-start-2 md:order-2"} order-2 md:order-1`}
                  >
                    <ExperienceCard {...experience} align={align} />
                  </div>

                  <div className="hidden md:block" />
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
