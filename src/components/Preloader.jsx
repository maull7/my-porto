const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__halo">
        <div className="preloader__ring" />
        <div className="preloader__orb" />
      </div>
      <div className="preloader__text">
        <p className="text-xs tracking-[0.28em] uppercase text-white/60">booting experience</p>
        <p className="text-xl font-semibold text-white">Preparing AI-crafted interface</p>
        <div className="preloader__bar" aria-hidden="true" />
      </div>
    </div>
  );
};

export default Preloader;
