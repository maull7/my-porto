import SkillCard from "./SkillCard";

const skillItem = [
  { imgSrc: "/images/react.svg", label: "React", desc: "UI interaktif dengan arsitektur modular" },
  { imgSrc: "/images/tailwindcss.svg", label: "Tailwind", desc: "Desain konsisten berbasis token" },
  { imgSrc: "/images/javascript.svg", label: "JavaScript", desc: "Micro-interaction & logic dynamic" },
  { imgSrc: "/images/nodejs.svg", label: "Node.js", desc: "API ringan dan real-time" },
  { imgSrc: "/images/mysqll.png", label: "MySQL", desc: "Data reliable dengan indexing" },
  { imgSrc: "/images/mysqll.png", label: "Postgress", desc: "Data reliable dengan indexing" },
  { imgSrc: "/images/php.svg", label: "PHP", desc: "Integrasi back-office cepat" },
  { imgSrc: "/images/css3.svg", label: "CSS", desc: "Layout futuristik & animasi halus" },
  { imgSrc: "/images/expressjs.svg", label: "Express", desc: "Service layer minimalis" },
  { imgSrc: "/images/html.svg", label: "HTML", desc: "Fondasi semantic & aksesibel" },
  { imgSrc: "/images/html.svg", label: "Golang", desc: "Fondasi semantic & aksesibel" },
  { imgSrc: "/images/html.svg", label: "Next JS", desc: "Fondasi semantic & aksesibel" },
  { imgSrc: "/images/html.svg", label: "Svelte JS", desc: "Fondasi semantic & aksesibel" },
  { imgSrc: "/images/laravel.svg", label: "Laravel", desc: "Fondasi semantic & aksesibel" },
];

const Skill = () => {
  return (
    <section id="skills">
      <div className="container space-y-6">
        <div className="flex flex-col gap-2 max-w-3xl text-center mx-auto">
          <p className="tag">Skills</p>
          <h2 className="title">Tech stack yang saya kustomisasi</h2>
          <p className="subtitle">
            Kombinasi teknologi favorit untuk membuat pengalaman web yang modern, cepat, maintainable, dan siap untuk eksperimen AI.
          </p>
        </div>

        <div className="grid-cards">
          {skillItem.map((skill) => (
            <SkillCard key={skill.label} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
