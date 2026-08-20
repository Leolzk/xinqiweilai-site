/**
 * 声波奇点交互层：微弱的指针光场与空间线框，保持低频、克制且支持减少动态偏好。
 * 设计提醒：指针不是特效触发器，而是进入信号场的轻量“调制旋钮”。
 */
import { useEffect, useRef } from "react";

export function SignalField() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    let animationFrame = 0;
    let latestX = 50;
    let latestY = 26;

    const render = () => {
      field.style.setProperty("--pointer-x", `${latestX}%`);
      field.style.setProperty("--pointer-y", `${latestY}%`);
      animationFrame = 0;
    };

    const onMove = (event: PointerEvent) => {
      latestX = (event.clientX / window.innerWidth) * 100;
      latestY = (event.clientY / window.innerHeight) * 100;
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={fieldRef} className="signal-field" aria-hidden="true">
      <div className="signal-field__halo" />
      <div className="signal-field__mesh" />
      <div className="signal-field__noise" />
    </div>
  );
}
