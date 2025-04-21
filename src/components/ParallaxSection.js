"use client";

import { useEffect, useRef, useState } from "react";

const ParallaxSection = ({ children, imageUrl }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && imageRef.current && !isMobile) {
        // Skip parallax effect on mobile for better performance
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (
          sectionTop < windowHeight * 0.8 &&
          sectionTop > -sectionRef.current.offsetHeight
        ) {
          const parallaxOffset = scrollPosition * 0.02;
          imageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] md:h-screen overflow-hidden"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transition: isMobile ? "none" : "transform 0.1s ease-out",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-0">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
