import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="container grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12">
        <div className="space-y-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-3 glass px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-sm font-semibold tracking-[0.22em] uppercase text-[var(--muted)]">Available for new missions</p>
          </div>

          <div className="space-y-4">
            <p className="badge inline-flex items-center gap-2">Programmer</p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.05]" style={{ fontFamily: "var(--font-display)" }}>
              Futuristic front-end experiences that feel{" "}
              <span className="text-sky-300">alive</span>, intentional, and data-driven.
            </h1>
            <p className="subtitle max-w-xl mx-auto lg:mx-0">
              Saya merancang antarmuka modern dengan micro-interaction, strategi aksesibilitas, dan performa prima agar brand tampil premium dengan nuansa AI.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <ButtonPrimary label="Download CV" href="/cv-rehan-maulana.pdf" icon="download" download />
            <ButtonOutline label="Lihat Portfolio" href="#work" icon="arrow_outward" />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-2 w-full">
            {["Web Experiences", "Design Systems", "Creative Coding"].map((item) => (
              <div key={item} className="card-blur p-4 text-left">
                <p className="text-sm text-[var(--muted)]">Specialized in</p>
                <p className="font-semibold mt-2">{item}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-zinc-700 dark:text-sky-200/80">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  <span>Precision & motion polish</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 blur-3xl opacity-60 bg-gradient-to-br from-sky-400 via-cyan-300 to-fuchsia-500" />
          <div className="relative glass p-8 rounded-[28px] overflow-hidden">
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.3),transparent_26%)]" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src="/images/images-logo.png"
                alt="Profile"
                className="w-full h-full object-cover scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="card-blur p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Role</p>
                <p className="font-semibold text-lg">Frontend Engineer</p>
              </div>
              <div className="card-blur p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Location</p>
                <p className="font-semibold text-lg">Indonesia</p>
              </div>
              <div className="col-span-2 card-blur p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Focus</p>
                  <p className="font-semibold text-lg">AI experience & design systems</p>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
