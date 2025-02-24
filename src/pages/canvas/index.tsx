import { useEffect, useRef } from "react";
import './canvas.css';
const CanvasCircle = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        let radius = 0;
        const maxRadius = Math.min(canvas.width, canvas.height) / 3;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
    
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.fillStyle = "yellow";
          ctx.fill();
    
          if (radius < maxRadius) {
            radius += 1;
          } else {
            radius = 0;
          }
          requestAnimationFrame(animate);
        };
    
        animate();
      }, []);

      return (
        <canvas id="canvas" ref={canvasRef}></canvas>
      );
    
}

export default CanvasCircle;