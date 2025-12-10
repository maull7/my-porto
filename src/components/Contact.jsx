const socialLinks = [
  { label: "GitHub", href: "https://github.com/maull7" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/codewithsadee" },
  { label: "Twitter", href: "https://x.com/codewithsadee_" },
  { label: "Instagram", href: "https://www.instagram.com/hxans_1" },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div className="space-y-4 text-center lg:text-left">
          <p className="tag">Contact</p>
          <h2 className="title">Mari diskusi proyek berikutnya</h2>
          <p className="subtitle max-w-xl mx-auto lg:mx-0">
            Lebih suka obrolan cepat? Kirim pesan lewat form atau hubungi via sosial di bawah.
          </p>
          <div className="flex gap-3 pt-2 flex-wrap justify-center lg:justify-start">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="icon-btn">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form action="https://getform.io/f/bllyqyyb" method="POST" className="glass p-6 rounded-3xl space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[var(--muted)]">
                Nama
              </label>
              <input id="name" name="name" className="field" placeholder="Rehan Maulana" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--muted)]">
                Email
              </label>
              <input id="email" name="email" type="email" className="field" placeholder="you@mail.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-[var(--muted)]">
              Pesan
            </label>
            <textarea id="message" name="message" className="field min-h-32 resize-y" placeholder="Ceritakan kebutuhanmu" required />
          </div>
          <button type="submit" className="btn-primary w-full justify-center text-center">Kirim pesan</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
