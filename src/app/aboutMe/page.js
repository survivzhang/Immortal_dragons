"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import EarthGlobe from "@/components/EarthGlobe";
import dynamic from "next/dynamic";

const Burning = dynamic(() => import("@/components/burning"), {
  ssr: false,
});
// About me sections
const aboutSections = [
  {
    id: 1,
    title: "I'M ZICHEN ZHANG",
    characteristic: "WEB DEVELOPER, POSTGRADUATE STUDENT, CREATIVE THINKER.",
    content:
      "I am a postgraduate student in UWA, majoring in Information Technology. I have a passion for web development and design, and I love to create user-friendly and responsive applications.",
  },
  {
    id: 2,
    title: "SKILLS",
    characteristic:
      "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Python, SQL, Git, Docker",
    content:
      "Have a strong interest in both frontend and backend development, and always try to learn new technologies.",
  },
  {
    id: 3,
    title: "MY CORE VALUES",
    characteristic: "PASSIONATE, COLLABORATIVE, COMMUNICATIVE",
    content:
      "I approach every project with genuine enthusiasm, focusing on creating meaningful user experiences. As a team member, I believe the best results come from diverse ideas. My volunteer experience as a metro station assistant and youth competition referee has strengthened my communication skills and ability to work with people from all backgrounds.",
  },
  {
    id: 4,
    title: "COMMUNITY INVOLVEMENT",
    characteristic: "GIVING BACK THROUGH VOLUNTEERING",
    content:
      "I believe in contributing to the community that has supported me. Through volunteering at metro stations and refereeing children's competitions, I've developed patience, quick decision-making abilities, and learned how to remain fair and objective under pressure - skills that translate directly to my work as a developer.",
  },
];

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const sections = contentRef.current.children;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop - windowHeight * 0.5 &&
            scrollPosition < sectionTop + sectionHeight - windowHeight * 0.5
          ) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const perthCoordinates = {
    lat: -31.9505,
    lon: 115.8605,
  };

  return (
    <div className="min-h-screen bg-primary relative">
      <main className="p-4 md:p-8 relative z-10">
        <div className="sticky top-0 z-20 bg-primary pb-4 md:pb-8">
          <div className="flex justify-center items-center h-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary">
              About Me
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row mt-4 md:mt-8">
          {/* Image Section - Fixed on desktop, scrolls on mobile */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] md:sticky md:top-0 mb-8 md:mb-0">
            <div className="relative w-full h-full">
              <Image
                src="/myPhoto.png"
                alt="Zichen"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Scrollable Content Section */}
          <div ref={contentRef} className="w-full md:w-1/2">
            {aboutSections.map((section, index) => (
              <section
                key={section.id}
                className="min-h-[50vh] md:min-h-screen flex justify-center px-4 md:px-12 items-center py-8 md:py-0"
                style={{
                  opacity: activeSection === index ? 1 : 0.5,
                  transition: "opacity 0.5s ease",
                }}
              >
                <div className="max-w-full md:max-w-2xl">
                  <Burning>
                    <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2 md:mb-4">
                      {section.title}
                    </h2>
                    <p className="text-xl md:text-2xl font-serif text-primary mb-3 md:mb-6">
                      {section.characteristic}
                    </p>
                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </Burning>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Location and Globe Section */}
        <section className="min-h-[70vh] md:min-h-screen py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 md:mb-8">
                My Location
              </h2>
              <p className="text-lg md:text-xl text-center text-foreground mb-8 md:mb-12">
                Based in the beautiful city of Perth, Western Australia, I draw
                inspiration from both the natural beauty of the region and the
                vibrant tech community here.
              </p>
              <div className="h-[350px] md:h-[600px] w-full bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-white/20">
                <EarthGlobe coordinates={perthCoordinates} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
