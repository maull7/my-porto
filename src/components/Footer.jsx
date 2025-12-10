const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container glass p-6 rounded-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center">
            <img src="/images/logo.svg" alt="Logo" width={34} height={34} />
          </div>
          <div>
            <p className="font-semibold">Rehan Maulana</p>
            <p className="text-sm text-[var(--muted)]">Crafting premium digital identity</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)]">
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-[var(--muted)]">© 2025 Crafted with passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
