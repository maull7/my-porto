import PropTypes from "prop-types";

const navItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Experience", link: "#experience" },
  { label: "Projects", link: "#work" },
  { label: "Contact", link: "#contact" },
];

const Navbar = ({ onSelect }) => {
  return (
    <nav className="glass px-4 py-2 flex gap-2 items-center">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.link}
          onClick={onSelect}
          className="relative px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--text)]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

Navbar.propTypes = {
  onSelect: PropTypes.func,
};

export default Navbar;
