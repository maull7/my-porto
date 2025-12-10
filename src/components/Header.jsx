import { useState } from "react";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 backdrop-blur-xl border-b border-white/10 bg-gradient-to-b from-black/30 via-black/20 to-transparent">
      <div className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center shadow-lg">
            <img src="/images/logo.svg" alt="Logo" width={34} height={34} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Portfolio</p>
            <p className="font-semibold text-lg">Rehan Maulana</p>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Navbar navOpen={navOpen} />
          </div>
          <ThemeToggle />
          <a href="#contact" className="btn-primary max-sm:hidden">Let&apos;s Talk</a>
          <button
            className="lg:hidden h-11 w-11 rounded-2xl border border-white/15 bg-white/10 grid place-items-center"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined text-xl">{navOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="lg:hidden px-5 pb-4">
          <Navbar navOpen={navOpen} onSelect={() => setNavOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
