/**
 * 声波奇点主页：以宽阔留白、右侧光体和鼠标感应背景建立首个“信号进入”瞬间。
 * 设计提醒：左侧始终保持暗色文字安全区；内容像仪器面板，而非居中营销英雄区。
 */
import { ArrowDownRight, ArrowUpRight, AudioLines, Bot, Orbit } from "lucide-react";
import { Link } from "wouter";
import { ASSETS, profile } from "@/lib/siteContent";

const indicators = [
  ["FREQUENCY", "20–20k", "Hz"],
  ["NEURAL MODE", "ACTIVE", "β"],
  ["LAST UPDATE", "08.19", "PDT"],
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__art" style={{ backgroundImage: `url(${ASSETS.hero})` }} />
        <div className="hero-resonance" aria-hidden="true"><i /><i /><i /><b /></div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="home-hero__content">
          <p className="eyebrow"><span className="live-dot" /> {profile.heroEyebrow}</p>
          <h1>{profile.heroTitle.map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="home-hero__description">{profile.heroDescription}</p>
          <div className="hero-actions">
            <Link href="/music" className="primary-action">进入聆听档案 <ArrowDownRight size={19} /></Link>
            <Link href="/ai" className="text-action">探索 AI 实验 <ArrowUpRight size={17} /></Link>
          </div>
        </div>
        <div className="hero-console" aria-label="当前信号状态">
          <div className="hero-console__top"><span>INPUT / HUMAN + MACHINE</span><span>00:00:24</span></div>
          <div className="mini-wave" aria-hidden="true">{Array.from({ length: 38 }, (_, index) => <i key={index} style={{ height: `${18 + ((index * 23) % 62)}%` }} />)}</div>
          <div className="hero-console__bottom"><span>LISTENING FIELD</span><b>∞</b></div>
        </div>
        <div className="hero-sideline">DRAG YOUR CURSOR THROUGH THE FIELD</div>
      </section>

      <section className="indicator-strip" aria-label="个人信号状态">
        {indicators.map(([label, value, unit]) => (
          <div className="indicator" key={label}>
            <span>{label}</span><b>{value}<small>{unit}</small></b>
          </div>
        ))}
        <div className="indicator-strip__about"><span>PROFILE / {profile.role}</span><Orbit size={22} /></div>
      </section>

      <section className="home-portal-section">
        <div className="section-intro">
          <p className="eyebrow">PATHWAYS / SELECT A FREQUENCY</p>
          <h2>两条持续扩张的<br /><em>探索轨道。</em></h2>
        </div>
        <div className="portal-grid">
          <Link href="/music" className="portal-card portal-card--music">
            <div className="portal-card__glyph"><AudioLines size={28} /></div>
            <span className="portal-card__index">01 / MUSIC</span>
            <h3>聆听档案</h3>
            <p>声音实验、播放清单与正在生长的听觉偏好。</p>
            <span className="portal-card__arrow"><ArrowUpRight size={22} /></span>
          </Link>
          <Link href="/ai" className="portal-card portal-card--ai">
            <div className="portal-card__glyph"><Bot size={28} /></div>
            <span className="portal-card__index">02 / AI LAB</span>
            <h3>模型实验</h3>
            <p>用 AI 重新触摸创作、聆听与交互的边界。</p>
            <span className="portal-card__arrow"><ArrowUpRight size={22} /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
