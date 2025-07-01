import { useEffect, useRef } from "react";
import gsap from "gsap";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content: "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
  },
  {
    content: "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Ethan Caldwell",
    imgSrc: "/images/people-2.jpg",
    company: "NexaWave",
  },
  {
    content: "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Liam Bennett",
    imgSrc: "/images/people-3.jpg",
    company: "CodeCraft",
  },
  {
    content: "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Noah Williams",
    imgSrc: "/images/people-4.jpg",
    company: "BrightWeb",
  },
  {
    content: "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    imgSrc: "/images/people-5.jpg",
    company: "TechMosaic",
  },
  {
    content: "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: "/images/people-6.jpg",
    company: "Skyline Digital",
  },
];

const Review = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Duplikat card agar looping terlihat seamless
    const cards = Array.from(marquee.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      marquee.appendChild(clone);
    });

    // GSAP Marquee Effect
    gsap.to(marquee, {
      x: "-50%", // Geser ke kiri 50%
      duration: 80,
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <section className="section overflow-hidden" id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-4 text-center">What our customers say</h2>

        <div className="relative w-full overflow-hidden">
          <div ref={marqueeRef} className="flex gap-6 whitespace-nowrap w-max">
            {reviews.map(({ content, name, imgSrc, company }, key) => (
              <ReviewCard key={key} content={content} name={name} imgSrc={imgSrc} company={company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
