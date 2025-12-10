import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/work/1.png",
    title: "Sebasa E-Learning",
    tags: ["Education", "Dashboard", "Database"],
    projectLink: "https://cat-sebasa.id/",
    description: "Platform latihan bahasa dengan bank soal dinamis, dashboard guru, autentikasi, dan pelaporan hasil realtime.",
  },
  {
    imgSrc: "/images/work/2.png",
    title: "Elegant Landing",
    tags: ["Brand", "Motion", "Responsive"],
    projectLink: "https://landing-page-beige-theta.vercel.app/",
    description: "Landing page brand premium dengan motion scroll halus, CTA terukur, dan performa ringan.",
  },
  {
    imgSrc: "/images/work/7.png",
    title: "Silapa App",
    tags: ["Admin", "Analytics", "Data"],
    projectLink: "https://github.com/maull7/silapa",
    description: "Aplikasi admin pengelolaan aset dengan log aktivitas, manajemen data tabel besar, dan ekspor laporan.",
  },
  {
    imgSrc: "/images/work/4.jpg",
    title: "Absen Guru",
    tags: ["Absensi", "Realtime"],
    projectLink: "https://github.com/TekomaDev/apk-absenguru",
    description: "Sistem absensi guru realtime berbasis mobile + dashboard admin untuk rekapan dan kontrol sesi.",
  },
  {
    imgSrc: "/images/work/5.jpg",
    title: "QR Siswa",
    tags: ["Barcode", "Mobile Friendly"],
    projectLink: "https://github.com/maull7/absensi-siswa-barcode",
    description: "Absensi siswa via barcode/QR dengan validasi cepat, laporan harian, dan dukungan multi-perangkat.",
  },
  {
    imgSrc: "/images/work/6.jpg",
    title: "Kass App",
    tags: ["Finance", "Dashboard"],
    projectLink: "https://github.com/maull7/kass",
    description: "Dashboard keuangan kas dengan ringkasan transaksi, grafik tren, dan kontrol akses sederhana.",
  },
];

const Work = () => {
  return (
    <section id="work">
      <div className="container space-y-6">
        <div className="flex flex-col gap-2 max-w-3xl text-center mx-auto">
          <p className="tag">Projects</p>
          <h2 className="title">Koleksi karya terbaru</h2>
          <p className="subtitle">
          Hasil karya saya di beberapa tahun terakhir dengan beberapa bahasa pemrograman
          </p>
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
