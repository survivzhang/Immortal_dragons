"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const Burning = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [flames, setFlames] = useState([]);

  useEffect(() => {
    // 生成随机位置的火焰
    const generateFlames = () => {
      const newFlames = [];
      for (let i = 0; i < 66; i++) {
        newFlames.push({
          id: i,
          top: Math.random() * 120 - 20, // -30 到 30 之间，让火焰覆盖在文字上
          left: Math.random() * 110 - 10, // 0 到 100 之间
          size: Math.random() * 80 + 20, // 30 到 60 之间，让火焰更密集
        });
      }
      setFlames(newFlames);
    };

    generateFlames();
  }, []);

  return (
    <div
      className="relative inline-block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 文字内容 */}
      <div className="relative z-0 transition-all duration-300 group-hover:text-primary">
        {children}
      </div>

      {/* 多个火焰动画 */}
      {isHovered &&
        flames.map((flame) => (
          <div
            key={flame.id}
            className="absolute pointer-events-none"
            style={{
              top: `${flame.top}%`,
              left: `${flame.left}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <Lottie
              autoplay
              loop
              src="/black_flame.json"
              style={{
                width: `${flame.size}px`,
                height: `${flame.size}px`,
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default Burning;
