import React, { useEffect, useRef, useState } from "react";
import "./star-canvas.scss";

const StarCanvas = () => {
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const { width, height } = canvas;

    const createStars = () => {
      const numStars = 150;

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        stars.push({ x, y, opacity: 1, direction: -1 });
      }
    };

    const drawStars = () => {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const starSize = Math.random() * (2 - 0.5) + 0.5;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.fillRect(star.x, star.y, starSize, starSize);
        ctx.closePath();
      }
    };

    createStars();
    drawStars();
  }, [canvasWidth]);

  useEffect(() => {
    const resizeCanvas = () => {
      setCanvasWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={window.innerHeight}
      className="star-canvas"
    />
  );
};

export default StarCanvas;
