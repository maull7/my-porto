import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink }) => {
  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noreferrer"
      className="group card-blur p-4 block overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:rotate-1"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-video">
        <img src={imgSrc} alt={title} className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
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
        <span className="icon-btn">↗</span>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectCard;
