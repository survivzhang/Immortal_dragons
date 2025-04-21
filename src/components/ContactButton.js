"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contactRef = useRef(null);

  const toggleContact = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={contactRef}>
      <button
        onClick={toggleContact}
        className="flex items-center space-x-1 md:space-x-2 bg-secondary/90 hover:bg-secondary px-2 md:px-3 py-1 md:py-1.5 rounded-lg shadow-lg transition-all duration-300"
      >
        <Image
          src="/naruto.png"
          alt="Contact"
          width={16}
          height={16}
          className="w-4 h-4 md:w-5 md:h-5"
        />
        <span className="text-white text-sm md:text-base">Contact</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-60 md:w-64 bg-secondary/95 rounded-lg shadow-xl p-3 md:p-4 space-y-3 md:space-y-4 z-50">
          {/* Email */}
          <a
            href="mailto:zzcnhy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/mail.svg"
              alt="mail"
              width={20}
              height={20}
              className="mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-white text-sm md:text-base">
              zzcnhy@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/cold1998zichen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Linkedln.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-white text-sm md:text-base">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/survivzhang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-white text-sm md:text-base">Github</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/zhang_zichen98/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/ins.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-white text-sm md:text-base">Instagram</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
