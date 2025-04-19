"use client";

import Image from "next/image";
import { useState } from "react";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContact = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={toggleContact}
        className="flex items-center space-x-2 bg-secondary/90 hover:bg-secondary px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
      >
        <Image src="/mail.svg" alt="Contact" width={24} height={24} />
        <span className="text-white">Contact</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 w-64 bg-secondary/95 rounded-lg shadow-xl p-4 space-y-4">
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
              width={30}
              height={30}
              className="mr-4"
            />
            <span className="text-white">zzcnhy@gmail.com</span>
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
              width={30}
              height={30}
              className="mr-4"
            />
            <span className="text-white">LinkedIn</span>
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
              width={30}
              height={30}
              className="mr-4"
            />
            <span className="text-white">Github</span>
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
              width={35}
              height={35}
              className="mr-4"
            />
            <span className="text-white">Instagram</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
