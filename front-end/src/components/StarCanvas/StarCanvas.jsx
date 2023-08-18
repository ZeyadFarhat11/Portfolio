import React, { useEffect, useRef } from "react";
import "./star-canvas.scss";

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const { width, height } = canvas;
    console.log(width);

    const createStars = () => {
      const numStars = 100;

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        stars.push({ x, y, opacity: 1, direction: -1 });
      }
    };

    const animateStars = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fillRect(star.x, star.y, 2, 2);
        ctx.closePath();

        star.opacity += star.direction * 0.01;

        if (star.opacity < 0) {
          star.opacity = 0;
          star.direction = 1;
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        } else if (star.opacity > 1) {
          star.opacity = 1;
          star.direction = -1;
        }
      }

      requestAnimationFrame(animateStars);
    };

    createStars();
    animateStars();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      className="star-canvas"
    />
  );
};

export default StarCanvas;
