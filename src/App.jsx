import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from "./components/Hero";
import Skill from './components/Skill';
import Work from "./components/Work";
import Experience from "./components/Experience";

const App = () => {
  const lenisRef = useRef(null);

  useLenis((lenis) => {
    lenisRef.current = lenis;
    ScrollTrigger.update();
  });

  useEffect(() => {
    if (!lenisRef.current) return;

    // Sinkronisasi Lenis dengan ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenisRef.current.scrollTo(value, { immediate: true })
          : lenisRef.current.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    ScrollTrigger.refresh();
  }, []);

  useGSAP(() => {
    // Animasi Hero Section
    gsap.from(".hero-content", {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
    });

    // Animasi Reveal dengan Stagger
    gsap.utils.toArray(".reveal-up").forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.2, // Efek delay bertahap
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax Effect
    gsap.to(".parallax-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-bg",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Magnetic Hover Button Effect
    document.querySelectorAll(".magnetic-btn").forEach((btn) => {
      let bounding = btn.getBoundingClientRect();
      btn.addEventListener("mousemove", (e) => {
        let x = e.clientX - bounding.left - bounding.width / 2;
        let y = e.clientY - bounding.top - bounding.height / 2;
        gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <ReactLenis root options={{ smooth: true, duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) }}>
      <Header />
      <main>
       
          <Hero />
       
        <section className="parallax-bg">
          <About />
        </section>
        <section className="reveal-up">
          <Skill />
        </section>
        <section className="reveal-up">
          <Experience />
        </section>
        <section className="reveal-up">
          <Work />
        </section>
       
        <section className="reveal-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
