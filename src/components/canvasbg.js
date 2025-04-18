"use client";
import { useRef, useEffect } from "react";

export default function Snowfall() {
  const canvasRef = useRef(null);
  const snowflakes = [];
  const mouse = { x: null, y: null, radius: 100 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createSnowflakes() {
      for (let i = 0; i < 150; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 1,
          speedY: Math.random() * 1 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.5,
        });
      }
    }

    function drawSnowflakes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.beginPath();

      for (let flake of snowflakes) {
        ctx.globalAlpha = flake.opacity;
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      }

      ctx.fill();
      ctx.globalAlpha = 1.0;
      updateSnowflakes();
    }

    function updateSnowflakes() {
      for (let flake of snowflakes) {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = flake.x - mouse.x;
          const dy = flake.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            flake.x += Math.cos(angle) * force * 5;
            flake.y += Math.sin(angle) * force * 5;
          }
        }

        flake.y += flake.speedY;
        flake.x += flake.speedX;

        if (flake.y > canvas.height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width || flake.x < 0) {
          flake.x = Math.random() * canvas.width;
          flake.y = -flake.radius;
        }
      }
    }

    let animationId;

    function animate() {
      drawSnowflakes();
      animationId = requestAnimationFrame(animate);
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    createSnowflakes();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "#001f3f",
      }}
    />
  );
}
