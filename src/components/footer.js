"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-3 md:py-4">
      <div className="container mx-auto px-4">
        <div className="text-center text-xs md:text-sm text-gray-400">
          © {currentYear} Zichen Zhang - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
