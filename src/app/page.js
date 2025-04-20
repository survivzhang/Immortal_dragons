"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const Burning = dynamic(() => import("@/components/burning"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary">
      <main className="p-8">
        <div className="flex justify-center mt-8">
          <h1 className="text-4xl text-center font-bold">
            Welcome to My Portfolio
          </h1>
        </div>
        <div className="flex justify-center mt-0">
          <div className="flex-grow flex flex-row items-center px-6 py-16 relative">
            <div className="flex-shrink-0 mr-8">
              <div className="relative">
                <Image
                  src="/profilo.png"
                  alt="Profile"
                  width={600}
                  height={800}
                  className="max-w-none h-auto transform scale-100"
                />
              </div>
            </div>
            <Burning>
              <div className="w-full flex flex-col text-center">
                <p className="text-xl text-secondary mb-4 font-serif">
                  Hey there! My name is
                </p>
                <h1 className="text-5xl font-serif font-bold text-primary mb-2">
                  ZICHEN ZHANG
                </h1>
                <p className="text-xl text-secondary mb-4 font-serif">
                  or you can call me
                </p>
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                  ALEX
                </h2>
                <p className="text-xl text-foreground mb-2 font-serif">
                  I am a postgraduate student in UWA,
                </p>
                <p className="text-xl text-foreground mb-2 font-serif">
                  Web Developer, basketball player
                </p>
                <p className="text-xl text-foreground mb-8 font-serif">
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
