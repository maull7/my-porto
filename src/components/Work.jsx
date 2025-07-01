import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/work/1.png',
      title: 'Sebasa',
      tags: ['E-Learnig','Education','Database'],
      projectLink: 'https://cat-sebasa.id/'
    },
    {
      imgSrc: '/images/work/2.png',
      title: 'Landing Page',
      tags: ['Style', 'Landing Page'],
      projectLink: 'https://landing-page-beige-theta.vercel.app/'
    },
    {
      imgSrc: '/images/work/7.png',
      title: 'Silapa APP',
      tags: ['Development', 'Database'],
      projectLink: 'https://github.com/maull7/silapa'
    },
    {
      imgSrc: '/images/work/4.jpg',
      title: 'Absen Guru',
      tags: ['Database', 'Absensi'],
      projectLink: 'https://github.com/TekomaDev/apk-absenguru'
    },
    {
      imgSrc: '/images/work/5.jpg',
      title: 'Absen Siswa QR CODE',
      tags: ['Database', 'Development'],
      projectLink: 'https://github.com/maull7/absensi-siswa-barcode'
    },
    {
      imgSrc: '/images/work/6.jpg',
      title: 'Kass App',
      tags: ['Database', 'Development'],
      projectLink: 'https://github.com/maull7/kass'
    },
  ];

const Work = () => {
    return (
        <section 
        className="mt-8" 
        id="work">
            <div className="container">
                <h2 className="headline-2 mb-8">My portfolio highlights</h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        works.map(({imgSrc,title,tags,projectLink}, key) => (
                            <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Work ;