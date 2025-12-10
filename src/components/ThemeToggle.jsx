import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative h-11 w-20 rounded-full border border-white/15 bg-white/10 px-1 transition-all duration-500 flex items-center"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute inset-1 flex items-center justify-center w-9 rounded-full bg-white text-slate-900 shadow-lg transition-transform duration-500 ${
          theme === "dark" ? "translate-x-0" : "translate-x-9"
        }`}
      >
        {theme === "dark" ? "☾" : "☀"}
      </span>
      <span className="ml-11 text-xs font-semibold text-[var(--muted)]">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ThemeToggle;
