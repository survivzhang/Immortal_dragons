"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Text3D from "@/components/Text3D";

// Project data
const projects = [
  {
    id: 1,
    title: "Blue Crew",
    description:
      "A website for an environmental protection organization. As the frontend developer, I created the interactive modal system, designed the enrollment page, and built the Blingo functionality that connects users with environmental activities. Implemented with Vue.js and integrated with Django backend.",
    image: "/blue-crew.png",
    tags: [
      "Vue",
      "Django",
      "Tailwind CSS",
      "Docker",
      "Git",
      "Figma",
      "CSS",
      "HTML",
    ],
    link: "https://blingo.com.au/",
    status: "completed",
  },
  {
    id: 2,
    title: "Zichen's Portfolio",
    description:
      "A responsive, modern portfolio website built to showcase my web development projects and skills. Designed with a clean aesthetic using Next.js and Tailwind CSS, featuring smooth scrolling animations, interactive project cards, and dynamic content sections.",
    image: "/zichen.jpg",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Git",
      "Figma",
      "CSS",
      "HTML",
      "Vercel",
      "Javascript",
    ],
    link: "https://coldalex1998.vercel.app/",
    status: "completed",
  },
  {
    id: 3,
    title: "Road to a professional programmer",
    description:
      "An interactive guidance platform for aspiring programmers. As the frontend developer, I designed and implemented the career path visualization system, interactive learning roadmaps, job search tools, and programmer journey tracker. Built with React and connected to a Flask backend, featuring personalized learning recommendations and developer resources",
    image: "/frontend.png",
    tags: [
      "React",
      "Flask",
      "Tailwind CSS",
      "AWS",
      "Git",
      "Figma",
      "CSS",
      "HTML",
    ],
    link: "https://road-to-professional-programmer.vercel.app/",
    status: "still in progress",
  },
];

export default function Experience() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const projectRefs = useRef([]);

  // Auto-switch effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentProject(
        (prev) => (prev - 1 + projects.length) % projects.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary relative">
      <main className="p-8 relative z-5">
        <div className="flex justify-center items-center h-auto">
          <Text3D text="My Experience" />
        </div>
        <div className="mt-0 pt-0">
          <div className="relative">
            <div className="flex flex-col items-center justify-center">
              <div className="max-w-7xl w-full">
                <div
                  className={`flex flex-row h-[70vh] rounded-lg overflow-hidden transition-transform duration-500 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="w-1/2 relative h-full overflow-hidden">
                    <div className="absolute inset-0 transition-all duration-500">
                      <Image
                        src={projects[currentProject].image}
                        alt={projects[currentProject].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 p-8 flex flex-col">
                    <div className="space-y-12">
                      <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                        {projects[currentProject].title}
                      </h3>
                      <p className="text-foreground mb-6 text-lg font-serif">
                        {projects[currentProject].description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {projects[currentProject].tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div>
                        {projects[currentProject].status === "completed" ? (
                          <button
                            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                            onClick={() =>
                              window.open(projects[currentProject].link)
                            }
                          >
                            View Project
                          </button>
                        ) : (
                          <button
                            className="px-6 py-2 bg-secondary text-white rounded-full"
                            disabled
                          >
                            In Progress
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation controls moved to bottom */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setCurrentProject(index);
                          setTimeout(() => setIsAnimating(false), 500);
                        }
                      }}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentProject === index
                          ? "bg-primary"
                          : "bg-secondary/20"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
