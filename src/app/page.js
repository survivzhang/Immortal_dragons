"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Burning = dynamic(() => import("@/components/burning"), {
  ssr: false,
});

const HomePage = () => {
  useEffect(() => {
    return () => {
      // 确保在页面切换时清理所有状态
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary relative">
      <main className="p-4 md:p-8 relative z-10">
        <div className="flex justify-center items-center h-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-primary">
            Welcome to My Portfolio
          </h1>
        </div>
        <div className="flex justify-center mt-0">
          <div className="flex-grow flex flex-col md:flex-row items-center px-2 md:px-6 py-8 md:py-16 relative">
            <div className="w-full md:w-auto md:flex-shrink-0 md:mr-8 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <Image
                  src="/profilo.png"
                  alt="Profile"
                  width={300}
                  height={400}
                  className="max-w-none h-auto transform scale-100 md:w-[600px]"
                />
              </div>
            </div>
            <Burning>
              <div className="w-full flex flex-col text-center">
                <p className="text-lg md:text-xl text-secondary mb-2 md:mb-4 font-serif">
                  Hey there! My name is
                </p>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-1 md:mb-2">
                  ZICHEN ZHANG
                </h1>
                <p className="text-lg md:text-xl text-secondary mb-2 md:mb-4 font-serif">
                  or you can call me
                </p>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-3 md:mb-6">
                  ALEX
                </h2>
                <p className="text-base md:text-xl text-foreground mb-1 md:mb-2 font-serif">
                  I am a postgraduate student in UWA,
                </p>
                <p className="text-base md:text-xl text-foreground mb-1 md:mb-2 font-serif">
                  Web Developer, basketball player
                </p>
                <p className="text-base md:text-xl text-foreground mb-4 md:mb-8 font-serif">
                  ... and just a human
                </p>
              </div>
            </Burning>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
