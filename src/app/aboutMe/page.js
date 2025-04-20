"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import EarthGlobe from "@/components/EarthGlobe";
import Text3D from "@/components/Text3D";

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
    title: "CREATING MEANINGFUL EXPERIENCES",
    characteristic: "DEDICATED TO CLEAN CODE AND USER-CENTERED SOLUTIONS",
    content:
      "Throughout my studies and projects, I've focused on building responsive, accessible web applications that solve real problems. I believe in writing maintainable code that balances technical excellence with practical user needs.",
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
      <main className="p-8 relative z-10">
        <div className="flex justify-center items-center h-auto">
          <Text3D text="About Me" />
        </div>

        {/* Main Content */}
        <div className="flex mt-8">
          {/* Fixed Image Section */}
          <div className="w-1/2 h-[80vh] sticky top-0">
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
          <div ref={contentRef} className="w-1/2">
            {aboutSections.map((section, index) => (
              <section
                key={section.id}
                className="min-h-screen flex items-center justify-center px-12"
                style={{
                  opacity: activeSection === index ? 1 : 0.5,
                  transition: "opacity 0.5s ease",
                }}
              >
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-bold text-secondary mb-4">
                    {section.title}
                  </h2>
                  <p className="text-2xl font-serif text-primary mb-6">
                    {section.characteristic}
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Location and Globe Section */}
        <section className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-primary mb-8">
                My Location
              </h2>
              <p className="text-xl text-center text-foreground mb-12">
                Based in the beautiful city of Perth, Western Australia, I draw
                inspiration from both the natural beauty of the region and the
                vibrant tech community here.
              </p>
              <div className="h-[600px] w-full bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-white/20">
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
