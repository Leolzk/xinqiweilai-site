/** 活体星图设计系统：多层生物智能场以指针为微环境扰动源，提供流体、粒子与轨迹响应。 */
import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; ax: number; ay: number; drift: number; radius: number; alpha: number; phase: number };
type Point = { x: number; y: number; life: number };

export function CellField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !cursor || !context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const target = { x: window.innerWidth * 0.73, y: window.innerHeight * 0.42 };
    const orbit = { x: target.x, y: target.y };
    const trail: Point[] = [];
    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = false;

    const measure = () => {
      const parent = canvas.parentElement;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || Math.max(window.innerHeight, 720);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles.length = 0;
      const amount = Math.min(Math.max(Math.round(width / 4.5), 180), 310);
      for (let index = 0; index < amount; index += 1) {
        const rightBias = Math.pow(Math.random(), 0.65);
        particles.push({
          ax: width * (0.28 + rightBias * 0.76),
          ay: height * (0.07 + Math.random() * 0.82),
          x: width * (0.28 + rightBias * 0.76),
          y: height * (0.07 + Math.random() * 0.82),
          drift: 0.08 + Math.random() * 0.24,
          radius: 0.55 + Math.random() * 1.6,
          alpha: 0.09 + Math.random() * 0.34,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const pointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visible) { cursor.style.opacity = "1"; visible = true; }
      if (!reduced) trail.unshift({ x: target.x, y: target.y, life: 1 });
      if (trail.length > 32) trail.length = 32;
    };

    const pointerLeave = () => { cursor.style.opacity = "0"; visible = false; };

    const drawStream = () => {
      if (trail.length < 3) return;
      context.save();
      context.lineCap = "round";
      for (let index = 1; index < trail.length - 1; index += 2) {
        const point = trail[index];
        const next = trail[index + 1];
        const alpha = Math.max(0, 0.15 - index * 0.004);
        context.beginPath();
        context.strokeStyle = `rgba(78,242,205,${alpha})`;
        context.lineWidth = Math.max(0.5, 3.4 - index * 0.09);
        context.moveTo(trail[0].x, trail[0].y);
        context.quadraticCurveTo(point.x, point.y, next.x, next.y);
        context.stroke();
      }
      context.restore();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      orbit.x += (target.x - orbit.x) * 0.085;
      orbit.y += (target.y - orbit.y) * 0.085;
      cursor.style.transform = `translate3d(${orbit.x - 18}px, ${orbit.y - 18}px, 0)`;

      const flow = context.createRadialGradient(orbit.x, orbit.y, 0, orbit.x, orbit.y, Math.min(width, height) * 0.56);
      flow.addColorStop(0, "rgba(154,255,238,.19)");
      flow.addColorStop(0.13, "rgba(78,242,205,.105)");
      flow.addColorStop(0.39, "rgba(29,142,170,.045)");
      flow.addColorStop(0.73, "rgba(9,57,93,.012)");
      flow.addColorStop(1, "rgba(6,17,31,0)");
      context.fillStyle = flow;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalCompositeOperation = "screen";
      particles.forEach((particle, index) => {
        const dx = orbit.x - particle.x;
        const dy = orbit.y - particle.y;
        const distance = Math.hypot(dx, dy) || 1;
        const attraction = Math.max(0, 1 - distance / 285);
        const oscillation = Math.sin(time * 0.00055 + particle.phase) * particle.drift;
        particle.x += (particle.ax - particle.x) * 0.007 + dx * attraction * 0.016 + oscillation;
        particle.y += (particle.ay - particle.y) * 0.007 + dy * attraction * 0.016 + Math.cos(time * 0.00045 + particle.phase) * particle.drift;
        const size = particle.radius * (1 + attraction * 2.5);
        context.beginPath();
        context.fillStyle = `rgba(131,255,235,${particle.alpha + attraction * 0.36})`;
        context.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        context.fill();
        if (attraction > 0.46 && index % 3 === 0) {
          context.beginPath();
          context.strokeStyle = `rgba(78,242,205,${(attraction - 0.42) * 0.22})`;
          context.lineWidth = 0.6;
          context.moveTo(particle.x, particle.y);
          context.lineTo(orbit.x, orbit.y);
          context.stroke();
        }
      });
      context.restore();

      drawStream();
      trail.forEach((point, index) => { point.life -= 0.028; if (point.life < 0 || index > 31) trail.splice(index, 1); });
      if (!reduced) raf = window.requestAnimationFrame(draw);
    };

    measure();
    cursor.style.opacity = finePointer ? "0" : "0";
    draw(0);
    window.addEventListener("resize", measure);
    window.addEventListener("pointermove", pointerMove, { passive: true });
    window.addEventListener("pointerleave", pointerLeave);
    return () => { window.cancelAnimationFrame(raf); window.removeEventListener("resize", measure); window.removeEventListener("pointermove", pointerMove); window.removeEventListener("pointerleave", pointerLeave); };
  }, []);

  return <><canvas ref={canvasRef} className="cell-field" aria-hidden="true" /><span ref={cursorRef} className="bio-cursor" aria-hidden="true"><i /><b /></span></>;
}
