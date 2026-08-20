/**
 * 深空培养场交互层：指针驱动的生物磁场、扫描环、粒子轨迹和数据网格。
 * 设计提醒：高响应度只服务于空间感；所有装饰性运动在“减少动态效果”时关闭。
 */
import { useEffect, useRef } from "react";

export function BioField() {
  const fieldRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    let frame = 0;
    let x = 66;
    let y = 34;
    let lastX = x;
    let lastY = y;
    const paint = () => {
      const velocityX = Math.max(-1.2, Math.min(1.2, x - lastX));
      const velocityY = Math.max(-1.2, Math.min(1.2, y - lastY));
      field.style.setProperty("--bio-x", `${x}%`);
      field.style.setProperty("--bio-y", `${y}%`);
      field.style.setProperty("--bio-vx", `${velocityX * 12}deg`);
      field.style.setProperty("--bio-vy", `${velocityY * -12}deg`);
      lastX += (x - lastX) * 0.34;
      lastY += (y - lastY) * 0.34;
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      x = event.clientX / window.innerWidth * 100;
      y = event.clientY / window.innerHeight * 100;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <div ref={fieldRef} className="bio-field bio-field--flagship" aria-hidden="true">
    <div className="bio-field__grid" /><div className="bio-field__halo" /><div className="bio-field__cursor"><i /><i /><b /></div>
    <div className="bio-field__streams"><i /><i /><i /></div>
    <div className="bio-field__particles">{Array.from({ length: 18 }, (_, index) => <span key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>
  </div>;
}
