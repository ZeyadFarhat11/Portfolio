import React, { useEffect, useRef } from "react";
import "./star-canvas.scss";

const StarCanvas = () => {
  const canvasRef = useRef(null);
  const screenH = useRef(window.innerHeight);
  const screenW = useRef(window.innerWidth);
  const stars = useRef([]);
  const numStars = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const createStar = () => {
      const x = Math.round(Math.random() * screenW.current);
      const y = Math.round(Math.random() * screenH.current);
      const length = 1 + Math.random() * 2;
      const opacity = Math.random();

      return {
        x,
        y,
        length,
        opacity,
        factor: 1,
        increment: Math.random() * 0.03,
      };
    };

    const animate = () => {
      context.clearRect(0, 0, screenW.current, screenH.current);

      stars.current.forEach((star) => {
        drawStar(star);
      });

      requestAnimationFrame(animate);
    };

    const drawStar = (star) => {
      context.rotate((Math.PI * 1) / 10);

      context.save();
      context.translate(star.x, star.y);

      if (star.opacity > 1) {
        star.factor = -1;
      } else if (star.opacity <= 0) {
        star.factor = 1;
        star.x = Math.round(Math.random() * screenW.current);
        star.y = Math.round(Math.random() * screenH.current);
      }

      star.opacity += star.increment * star.factor;

      context.beginPath();
      for (let i = 5; i--; ) {
        context.lineTo(0, star.length);
        context.translate(0, star.length);
        context.rotate((Math.PI * 2) / 10);
        context.lineTo(0, -star.length);
        context.translate(0, -star.length);
        context.rotate(-((Math.PI * 6) / 10));
      }
      context.lineTo(0, star.length);
      context.closePath();
      context.fillStyle = `rgba(160, 160, 160, ${star.opacity})`;
      context.shadowBlur = 5;
      context.shadowColor = "#ffff33";
      context.fill();

      context.restore();
    };

    screenH.current = window.innerHeight;
    screenW.current = window.innerWidth;

    window.onresize = () => {
      screenH.current = window.innerHeight;
      screenW.current = window.innerWidth;

      canvas.height = screenH.current;
      canvas.width = screenW.current;
    };

    canvas.height = screenH.current;
    canvas.width = screenW.current;

    for (let i = 0; i < numStars; i++) {
      const star = createStar();
      stars.current.push(star);
    }

    animate();

    return () => {
      window.onresize = null;
    };
  }, []);

  return <canvas ref={canvasRef} id="space" />;
};

export default StarCanvas;
