import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/html.svg',
      label: 'HTML',
      desc: 'Work Html'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mysqll.png',
      label: 'MySql',
      desc: 'Database SQL'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/image.png',
      label: 'Laravel',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/boostrap.svg',
      label: 'Boostrap CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/php.svg',
      label: 'PHP',
      desc: 'Server side'
    },
  ];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 ">
                    Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc,label,desc},key) => (
                            <SkillCard
                            key={key} 
                             imgSrc={imgSrc}
                             label={label}
                             desc={desc}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill