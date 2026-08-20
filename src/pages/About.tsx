/**
 * 关于页：用价值原则与精炼联络区呈现个人身份，避免编造履历、奖项或评价。
 * 设计提醒：使用宽幅排版与仪器编号传递安静自信，给用户留下真实资料替换空间。
 */
import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { operatingPrinciples, profile } from "@/lib/siteContent";

export default function About() {
  return (
    <div className="about-page page-wrap">
      <section className="about-intro">
        <div className="about-intro__coordinate">[ 35.6° N<br />139.6° E ]</div>
        <p className="eyebrow">ABOUT / PERSONAL OPERATING SYSTEM</p>
        <h1>我在声音与<br /><em>智能之间工作。</em></h1>
        <div className="about-intro__side"><Sparkles size={23} /><p>这是你的个人页面。将下列示例替换成自己的经历、城市、联系方式与真实链接。</p></div>
        <div className="about-intro__rule" />
      </section>
      <section className="principles-section">
        <div className="principles-section__intro"><p className="eyebrow">OPERATING PRINCIPLES</p><h2>保持开放，<br />但不失真。</h2></div>
        <div className="principles-list">
          {operatingPrinciples.map(([index, title, detail]) => <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}
        </div>
      </section>
      <section className="contact-panel">
        <div className="contact-panel__status"><span className="live-dot" /> {profile.availability}</div>
        <div><p className="eyebrow">LET'S EXCHANGE SIGNALS</p><h2>如果你的问题<br />值得被听见。</h2></div>
        <div className="contact-panel__links"><a href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}<ArrowUpRight size={18} /></a><span><MapPin size={17} />{profile.location}</span></div>
      </section>
    </div>
  );
}
