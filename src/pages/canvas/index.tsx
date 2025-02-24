import { useEffect, useRef } from "react";
import './canvas.css';
const FlowFieldEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let x = 0;
  let y = 0;
  let lightness = 20;
  let color = getRandomColor();

  function getRandomColor() {
    const h = Math.floor(Math.random() * 360);
    return { h, s: 100, l: 0 };
  }

  function draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    const length = 300;
    ctx.strokeStyle = `hsl(${color.h}, ${color.s}%, ${lightness}%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y + length);
    ctx.stroke();
  }

  function animate(ctx: CanvasRenderingContext2D, width: number, height: number) {
    draw(ctx, x, y);
    x += 2;
    y += 0.5;
    lightness += 0.3;

    if (lightness >= 200) {
      ctx.clearRect(0, 0, width, height);
      x = 0;
      y = 0;
      color = getRandomColor();
      lightness = 20;
    }

    requestAnimationFrame(() => animate(ctx, width, height));
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    animate(ctx, canvas.width, canvas.height);
  }, []);

  return <canvas id='canvas' ref={canvasRef}></canvas>;
};

export default FlowFieldEffect;
