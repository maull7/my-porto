import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/work/1.png",
    title: "Sebasa E-Learning",
    tags: ["Education", "Dashboard", "Database"],
    projectLink: "https://cat-sebasa.id/",
  },
  {
    imgSrc: "/images/work/2.png",
    title: "Elegant Landing",
    tags: ["Brand", "Motion", "Responsive"],
    projectLink: "https://landing-page-beige-theta.vercel.app/",
  },
  {
    imgSrc: "/images/work/7.png",
    title: "Silapa App",
    tags: ["Admin", "Analytics", "Data"],
    projectLink: "https://github.com/maull7/silapa",
  },
  {
    imgSrc: "/images/work/4.jpg",
    title: "Absen Guru",
    tags: ["Absensi", "Realtime"],
    projectLink: "https://github.com/TekomaDev/apk-absenguru",
  },
  {
    imgSrc: "/images/work/5.jpg",
    title: "QR Siswa",
    tags: ["Barcode", "Mobile Friendly"],
    projectLink: "https://github.com/maull7/absensi-siswa-barcode",
  },
  {
    imgSrc: "/images/work/6.jpg",
    title: "Kass App",
    tags: ["Finance", "Dashboard"],
    projectLink: "https://github.com/maull7/kass",
  },
];

const Work = () => {
  return (
    <section id="work">
      <div className="container space-y-6">
        <div className="flex flex-col gap-2 max-w-3xl">
          <p className="tag">Projects</p>
          <h2 className="title">Koleksi karya terbaru</h2>
          <p className="subtitle">Kartu proyek dengan efek hover 3D tilt, bayangan premium, serta tag teknologi yang clean.</p>
        </div>

        <div className="grid-cards">
          {works.map((work) => (
            <ProjectCard key={work.title} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
