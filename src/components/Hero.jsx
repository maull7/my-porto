import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
  const nameRef = useRef(null);
  const jobRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!nameRef.current || !jobRef.current || !titleRef.current) return;

    // Pisahkan teks menjadi huruf satu per satu
    const nameText = new SplitType(nameRef.current, { types: "chars" });
    const jobText = new SplitType(jobRef.current, { types: "chars" });
    const titleText = new SplitType(titleRef.current, { types: "chars" });

    // Set semua karakter tidak terlihat dulu
    gsap.set([nameText.chars, jobText.chars, titleText.chars], { opacity: 0 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

    // Animasi mengetik Nama "Rehan Maulana"
    tl.to(nameText.chars, {
      opacity: 1,
      duration: 0.1,
      stagger: 0.08,
      ease: "power2.out",
    });

    // Animasi mengetik "Junior Web"
    tl.to(
      jobText.chars,
      {
        opacity: 1,
        duration: 0.1,
        stagger: 0.08,
        ease: "power2.out",
      },
      "+=0.3"
    );

    // Animasi mengetik "Developer"
    tl.to(
      titleText.chars,
      {
        opacity: 1,
        duration: 0.1,
        stagger: 0.08,
        ease: "power2.out",
      },
      "+=0.3"
    );

    // Efek menghilang sebelum ulang
    tl.to(
      [nameText.chars, jobText.chars, titleText.chars],
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      },
      "+=2"
    );
  }, []);

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/images.png"
                alt="Logo Rm"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-500">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping"></span>
              </span>
              Available Work
            </div>
          </div>

          {/* Nama dan Job Title dengan efek mengetik */}
          <h2 className="headline-1 max-w-[20ch] mt-5 mb-8 lg:mb-10">
            <span ref={nameRef} className="block">Rehan Maulana</span>
            <span ref={jobRef} className="block text-sky-400">Junior Web</span>
            <span ref={titleRef} className="block text-sky-400">Developer</span>
          </h2>

          <div className="flex items-center gap-3">
           <ButtonPrimary
              label="Download CV"
              icon="download"
              href={"/cv-rehan-maulana.pdf"}
              download={true}

            />

            <ButtonOutline href="#about" label="Scroll Down" icon="arrow_downward" />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/images-logo.png"
              width={656}
              height={800}
              alt="Banner"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
