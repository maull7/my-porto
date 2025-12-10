const stats = [
  { label: "Projects Delivered", value: "25+", detail: "Produk digital lintas industri dengan fokus performa." },
  { label: "Design Systems", value: "6", detail: "Komponen reusable dengan dokumentasi rapi." },
  { label: "Client Satisfaction", value: "98%", detail: "Kolaborasi transparan & komunikasi proaktif." },
];

const About = () => {
  return (
    <section id="about">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="tag">About</p>
          <h2 className="title">Profil Singkat</h2>
          <p className="subtitle">
            Saya membantu brand dan startup membangun pengalaman web premium yang cepat, accessible, dan memorable. Saya suka
            menggabungkan typografi elegan, glassmorphism, dan micro-interaction untuk menghadirkan identitas yang berkelas.
          </p>
          <div className="glass p-5 rounded-3xl">
            <p className="font-semibold">Mindset</p>
            <p className="text-[var(--muted)] mt-2">
              Berpikir sistematis, menulis kode yang scalable, dan selalu memprioritaskan detail visual agar setiap produk terasa crafted.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-blur p-5">
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">{stat.label}</p>
              <p className="text-sm text-[var(--muted)] mt-2">{stat.detail}</p>
            </div>
          ))}
          <div className="col-span-full glass p-6 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 grid place-items-center border border-white/15">
              <img src="/images/logo.svg" alt="Personal mark" width={40} height={40} />
            </div>
            <div>
              <p className="font-semibold text-lg">Always exploring</p>
              <p className="text-[var(--muted)]">Eksperimen motion, WebGL, dan desain adaptif untuk proyek berikutnya.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
