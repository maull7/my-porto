import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc }) => {
  return (
    <div className="card-blur p-5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 shadow-inner grid place-items-center">
          <img src={imgSrc} alt={label} className="w-9 h-9 object-contain" loading="lazy" />
        </div>
        <div>
          <p className="font-semibold text-lg">{label}</p>
          <p className="text-sm text-[var(--muted)]">{desc}</p>
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default SkillCard;
