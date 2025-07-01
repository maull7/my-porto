const aboutItems = [
    {
        label: "Project done",
        number: 15
    },
    {
        label: "Years of experience",
        number: 2
    }
];

const About = () => {
    return (
        <section id="about" className="section reveal-up">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome! I'm Rehan Maulana, a passionate SMK student with a strong interest in web development. With a keen eye for modern technology, I specialize in building websites using the latest and most popular tech stacks. Combining creativity and technical expertise, I strive to create digital experiences that are not only visually appealing but also highly functional and future-proof.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number }, key) => (
                            <div className="stat-item" key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}

                        <img 
                        src="/images/logo.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
