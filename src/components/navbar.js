"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/aboutMe"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Experience
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
