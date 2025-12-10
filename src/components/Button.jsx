import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target = "_self", label, icon, classes, download }) => {
  const content = (
    <span className="inline-flex items-center gap-2">
      {label}
      {icon ? <span className="material-symbols-outlined text-base">{icon}</span> : null}
    </span>
  );

  if (href) {
    return (
      <a
        target={target}
        href={href}
        className={`btn-primary ${classes || ""}`}
        download={download ? true : undefined}
      >
        {content}
      </a>
    );
  }

  return <button className={`btn-primary ${classes || ""}`}>{content}</button>;
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.bool,
};

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  const content = (
    <span className="inline-flex items-center gap-2">
      {label}
      {icon ? <span className="material-symbols-outlined text-base">{icon}</span> : null}
    </span>
  );

  if (href) {
    return (
      <a target={target} href={href} className={`btn-ghost ${classes || ""}`}>
        {content}
      </a>
    );
  }

  return <button className={`btn-ghost ${classes || ""}`}>{content}</button>;
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
