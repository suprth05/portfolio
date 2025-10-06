import { useEffect, useRef } from 'react';

interface Background3DProps {
  darkMode: boolean;
}

const Background3D = ({ darkMode }: Background3DProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasEl = canvas as HTMLCanvasElement;
    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;

    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    // Particle network configuration
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = [];
    const numParticles = Math.min(160, Math.floor((window.innerWidth * window.innerHeight) / 12000));
    const maxDist = 140; // connection distance

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvasEl.width,
        y: Math.random() * canvasEl.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.6,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

      const dotColor = darkMode ? 'rgba(124, 148, 176, 0.7)' : 'rgba(92, 143, 191, 0.7)';
      const lineColor = darkMode ? 'rgba(124, 148, 176, 0.18)' : 'rgba(92, 143, 191, 0.18)';

      // Move and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // gentle pull towards mouse to create parallax
        p.vx += (mouse.x - p.x) * 0.00002;
        p.vy += (mouse.y - p.y) * 0.00002;

        p.x += p.vx;
        p.y += p.vy;

        // bounds with soft wrap
        if (p.x < -50) p.x = canvasEl.width + 50;
        if (p.x > canvasEl.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvasEl.height + 50;
        if (p.y > canvasEl.height + 50) p.y = -50;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (darkMode ? 0.9 : 0.8);
            ctx.strokeStyle = lineColor.replace(/0\.18\)/, `${(0.18 * alpha).toFixed(3)})`);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
    };
    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [darkMode]);

    return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: darkMode ? 0.6 : 0.5 }}
    />
  );
};

export default Background3D;
