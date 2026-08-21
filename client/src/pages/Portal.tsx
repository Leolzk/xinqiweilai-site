/** 活体星图设计系统：总首页以跳动类器官作为唯一视觉核心，点击后光场收束并进入官网。 */
import { useState, type CSSProperties } from "react";
import { ArrowDownRight } from "lucide-react";
import { useLocation } from "wouter";
import { CellField } from "@/components/CellField";
import "./portal.css";
import "./portal-enhancements.css";
import "./portal-motion-boost.css";
import "./portal-asset-unity.css";

const cells = Array.from({ length: 29 }, (_, index) => ({
  index,
  angle: `${index * 12.414 + ((index % 4) - 1.5) * 2.8}deg`,
  distance: `${78 + ((index * 17) % 34)}px`,
  scale: `${0.72 + ((index * 11) % 41) / 100}`,
}));
const particles = Array.from({ length: 45 }, (_, index) => index);

export default function Portal() {
  const [, setLocation] = useLocation();
  const [entering, setEntering] = useState(false);
  const enterSite = () => {
    if (entering) return;
    setEntering(true);
    window.setTimeout(() => setLocation("/site"), 760);
  };

  return <main className={`portal-page ${entering ? "is-entering" : ""}`}>
    <CellField />
    <div className="portal-grid" aria-hidden="true" />
    <div className="portal-particles" aria-hidden="true">{particles.map((particle) => <i key={particle} style={{ "--i": particle } as CSSProperties} />)}</div>
    <header className="portal-brand"><img src="/manus-storage/future-mind-logo-crop_138a4cac.png" alt="芯启蔚来生物科技品牌标志" /><div><strong>芯启蔚来</strong><small>FUTURE MIND BIOTECH</small></div></header>
    <div className="portal-readout portal-readout-left"><span>ORGANOID / PULSE</span><b>LIVE</b></div>
    <div className="portal-readout portal-readout-right"><span>AI / EVIDENCE FIELD</span><b>01.00</b></div>
    <aside className="portal-system-rail" aria-label="智能类器官系统信号"><p>AI × ORGANOID / SYSTEM MAP</p><div><span><i />MODEL / INPUT</span><span><i />FLOW / CONTROL</span><span><i />DATA / EVIDENCE</span></div><small>BATCH FM-OR-2608 · COORD 31.2304N / 121.4737E</small></aside>
    <section className="portal-stage" aria-label="芯启蔚来沉浸式入口">
      <div className="organoid-system" aria-hidden="true">
        <div className="portal-real-organoid"><img src="/manus-storage/organoid-hero-stellar_745fcb51.png" alt="" /></div>
        <div className="microflow-lines"><i /><i /><i /><i /></div>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
        <div className="organoid-aura" /><div className="organoid-shell" />
        <div className="organoid-core"><div className="core-light" /><div className="core-granules" />{cells.map((cell) => <i key={cell.index} style={{ "--angle": cell.angle, "--distance": cell.distance, "--cell-scale": cell.scale, "--cell": cell.index } as CSSProperties} />)}</div>
        <div className="pulse-ring ring-a" /><div className="pulse-ring ring-b" /><div className="pulse-ring ring-c" />
      </div>
      <div className="portal-copy"><p><i /> INTELLIGENT ORGANOID SYSTEM</p><h1>让生命信号<br /><em>开始连接。</em></h1><span>模型 · 芯片 · 数据 · 设备 · 技术</span><small>将人源生物学模型与AI工作流组织为一套可读取的实验基础设施。</small></div>
      <button className="portal-enter" type="button" onClick={enterSite} aria-label="点击进入芯启蔚来官网"><span className="enter-orbit" /><b>点击进入</b><small>ENTER THE SYSTEM</small><ArrowDownRight size={19} /></button>
    </section>
    <p className="portal-footnote">© 2026 FUTURE MIND BIOTECH · SHANGHAI</p>
  </main>;
}
