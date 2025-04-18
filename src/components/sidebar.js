"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile === false && !isOpen) {
        setIsOpen(true);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 400) {
          setIsOpen(false);
        } else if (currentScrollY < lastScrollY) {
          if (currentScrollY < 300) {
            setIsOpen(true);
          }
        }
        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY, isMobile]);

  // Mobile navigation
  if (isMobile) {
    return (
      <>
        <button
          onClick={toggleSidebar}
          className="fixed bottom-5 right-5 z-50 bg-secondary rounded-full p-3 shadow-lg"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        <div
          className={`fixed inset-0 bg-secondary z-40 transition-all duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Navigation Links */}
          <div className="mt-20 flex flex-col items-center space-y-6">
            <Link href="/" className="text-white text-xl">
              Home
            </Link>
            <Link href="/about" className="text-white text-xl">
              About
            </Link>
            <Link href="/experience" className="text-white text-xl">
              Experience
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-16 flex flex-col items-center space-y-8 text-white">
            {/* Your existing social links */}
          </div>
        </div>
      </>
    );
  }

  // Desktop navigation
  return (
    <div className="fixed right-0 top-0 bottom-0 z-50 flex items-center">
      <div
        className={`h-full bg-secondary transition-all duration-500 ease-in-out flex flex-col ${
          isOpen ? "w-[220px]" : "w-[60px]"
        }`}
      >
        {/* Your existing desktop sidebar content */}
      </div>
    </div>
  );
}
