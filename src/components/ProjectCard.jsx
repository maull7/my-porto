import { useState } from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="group card-blur p-5 block overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden rounded-2xl aspect-video">
        <img
          src={imgSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="icon-btn absolute top-3 right-3 bg-black/30 backdrop-blur border-white/20 hover:bg-black/50"
          aria-label={`Buka ${title}`}
        >
          <span className="material-symbols-outlined text-lg">north_east</span>
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="mt-4 w-full flex items-start justify-between gap-3 text-left"
        aria-expanded={open}
      >
        <div>
          <p className="font-semibold text-lg">{title}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[var(--muted)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="icon-btn shrink-0">
          <span className={`material-symbols-outlined text-lg transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
            expand_more
          </span>
        </span>
      </button>

      <div
        className={`transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${
          open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-[var(--muted)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
