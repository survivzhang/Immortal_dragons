"use client";

import { useEffect, useRef } from "react";

const ParallaxSection = ({ children, imageUrl }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && imageRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (
          sectionTop < windowHeight * 0.8 &&
          sectionTop > -sectionRef.current.offsetHeight
        ) {
          const parallaxOffset = scrollPosition * 0.2;
          imageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
