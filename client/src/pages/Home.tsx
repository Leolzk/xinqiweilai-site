/** 活体星图设计系统：首页以错位实验轨道、稳定信息层和可控生命微环境传达精确与可信。 */
import { type PointerEvent as ReactPointerEvent } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronDown, CircuitBoard, FlaskConical, Microscope, MoveRight, Phone, ScanLine } from "lucide-react";
import { CellField } from "@/components/CellField";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./home-upgrade-notice.css";

const assets = {
  logo: "/manus-storage/future-mind-logo-crop_138a4cac.png",
  qr: "/manus-storage/future-mind-wechat-qr_93df8553.jpg",
  hero: "/manus-storage/organoid-hero-stellar_745fcb51.png",
  chip: "/manus-storage/organoid-chip-system_c1cbb7b4.png",
  automation: "/manus-storage/organoid-automation-suite_89997c2e.png",
  atlas: "/manus-storage/organoid-signal-atlas_ce4bc5ec.png",
};

const services = [
  { n: "01", title: "试剂与耗材", en: "CULTURE FOUNDATIONS", icon: FlaskConical, body: "围绕建模、扩增、传代、冻存和分析所需的培养体系，构建稳定、可追溯的实验起点。", note: "从基质、培养基到定制化配套方案" },
  { n: "02", title: "类器官芯片与定制", en: "ORGANOID-ON-CHIP", icon: CircuitBoard, body: "将类器官模型与微环境控制能力整合，让流体、界面与组织行为在可编程尺度上协同。", note: "芯片设计、模型适配与功能模块定制" },
  { n: "03", title: "配套设备", en: "AUTOMATED SYSTEMS", icon: Microscope, body: "面向日常培养、成像、环境控制与批次管理的设备配置，帮助团队把复杂流程沉淀为标准。", note: "培养、监测、液体处理与工作流集成" },
  { n: "04", title: "类器官CRO服务", en: "ORGANOID CRO SERVICE", icon: ScanLine, body: "以项目化协作连接模型建立、质控路径与结果解读，并为每个关键节点建立共同语言。", note: "面向研究目标的项目协同服务" },
];

function tiltCard(event: ReactPointerEvent<HTMLElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--card-x", `${((event.clientX - rect.left) / rect.width - .5) * 4}deg`);
  card.style.setProperty("--card-y", `${-((event.clientY - rect.top) / rect.height - .5) * 4}deg`);
}

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <CellField />
        <div className="hero-orb" aria-hidden="true" />
        <div className="hero-media" aria-hidden="true"><img src={assets.hero} alt="" /></div>
        <div className="top-noise" aria-hidden="true" />
        <SiteHeader />
        <div className="hero-content layout-boundary">
          <div className="hero-statement">
            <p className="site-upgrade-notice">网站正在升级，还在完善中，敬请期待……</p>
            <p className="eyebrow"><span /> FUTURE MIND BIOTECHNOLOGY / 01</p>
            <h1>把人源生物学<br /><em>带入每一次决策。</em></h1>
            <p className="hero-lead">从类器官培养体系、器官芯片定制到实验自动化与专家协作，我们为科研、药物研发和转化医学团队建立可扩展的工作基础。</p>
            <p className="hero-motto">启心铭志，引动未来! <span>Unlock your mind,open your future!</span></p>
            <div className="hero-actions"><a className="solid-button" href="#solutions">探索整体方案 <MoveRight size={17} /></a><a className="text-button" href="#workflow">查看技术路径 <ArrowDownRight size={17} /></a></div>
          </div>
          <aside className="hero-readout" aria-label="类器官平台状态"><div className="readout-top"><span className="status-dot" /> LIVE SYSTEM MAP</div><div className="readout-number">AI</div><p>将模型、微环境与读数路径组织为一套可持续演进的生命科学系统。</p><div className="readout-rule"><span />FUTURE MIND ECOSYSTEM</div></aside>
        </div>
        <a className="scroll-cue" href="#solutions"><span>SCROLL TO EXPLORE</span><ChevronDown size={18} /></a>
      </section>

      <section className="intro-band" aria-labelledby="intro-title"><div className="layout-boundary intro-layout"><p className="section-index">/ 01 — PLATFORM VIEW</p><h2 id="intro-title">让每一个模型，<br />连接到<strong>下一步证据。</strong></h2><p className="intro-note">类器官不是孤立的实验对象。芯启蔚来把培养条件、芯片微环境、设备工作流和项目协作放进同一个解决方案中，为不同阶段的研究目标提供连续支持。</p></div></section>

      <section className="solutions-section" id="solutions" aria-labelledby="solutions-title">
        <div className="layout-boundary section-heading"><div><p className="eyebrow light"><span /> INTEGRATED SOLUTIONS / 02</p><h2 id="solutions-title">四个模块，<br /><em>一条完整路径。</em></h2></div><p>模块可独立启用，也可围绕一个具体的组织模型、疾病方向或筛选目标协同配置。</p></div>
        <div className="service-track layout-boundary">{services.map((service) => { const Icon = service.icon; return <article className="service-card" data-stage={service.n} key={service.n} onPointerMove={tiltCard} onPointerLeave={(e) => { e.currentTarget.style.setProperty("--card-x", "0deg"); e.currentTarget.style.setProperty("--card-y", "0deg"); }}><div className="service-card-top"><span>{service.n}</span><Icon size={21} strokeWidth={1.3} /></div><div className="service-card-main"><p className="mono-label">{service.en}</p><h3>{service.title}</h3><p>{service.body}</p></div><div className="service-card-bottom"><span>{service.note}</span><ArrowUpRight size={18} /></div></article>; })}</div>
      </section>

      <section className="chip-feature" id="workflow" aria-labelledby="chip-title"><div className="chip-image-wrap"><img src={assets.chip} alt="类器官芯片的概念化微流控结构" /></div><div className="chip-content layout-boundary"><p className="section-index">/ 03 — ORGANOID-ON-CHIP</p><div className="chip-copy"><h2 id="chip-title">让微环境<br /><em>可被设计。</em></h2><p>当类器官进入芯片，持续流动、界面分隔与多参数控制得以汇合。我们把定制能力放在模型需求之后，而不是把模型塞进固定的设备逻辑中。</p><a className="line-link" href="#contact">沟通芯片定制需求 <MoveRight size={17} /></a></div><div className="micro-notes"><span>01 / MODEL FIT</span><span>02 / MICROENVIRONMENT</span><span>03 / READOUT</span></div></div></section>

      <section className="platform-section" id="platform" aria-labelledby="platform-title"><div className="atlas-bg" aria-hidden="true"><img src={assets.atlas} alt="" /></div><div className="layout-boundary platform-layout"><div className="platform-copy"><p className="eyebrow light"><span /> STANDARDIZE THE COMPLEX / 04</p><h2 id="platform-title">把复杂实验<br />转化为<strong>可执行的系统。</strong></h2><p>从日常培养到关键节点的监测，设备与工作流程的价值在于减少不确定性，让团队把精力留给真正需要判断的问题。</p><div className="platform-points"><div><span>01</span><p><strong>培养与环境控制</strong>支持稳定、连续的类器官培养节奏。</p></div><div><span>02</span><p><strong>过程与结果观察</strong>让重要状态在正确的节点被看见。</p></div><div><span>03</span><p><strong>项目化专家协作</strong>将方案、操作、质控与交付组织为共同语言。</p></div></div></div><figure className="automation-frame"><img src={assets.automation} alt="类器官自动化培养与监测工作站概念图" /><figcaption><span className="status-dot" /> INTEGRATED OPERATIONS / SYSTEM READY</figcaption></figure></div></section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="layout-boundary contact-layout"><p className="section-index">/ 05 — START A CONVERSATION</p><div><h2 id="contact-title">启心铭志，<br /><em>引动未来。</em></h2><p className="contact-slogan">Unlock your mind,open your future!</p></div><div className="contact-side"><p>无论您正在搭建新的类器官模型，还是需要把已有系统推进到芯片、设备或项目交付阶段，芯启蔚来愿意从您的研究问题开始。</p><a className="phone-link" href="tel:02151869862"><Phone size={19} /><span><small>BUSINESS LINE</small><strong>021-51869862</strong></span><ArrowUpRight size={16} /></a><div className="qr-callout"><img src={assets.qr} alt="芯启蔚来生物科技公众号二维码" /><div><p>关注公众号</p><span>扫描二维码，获取类器官技术与解决方案动态。</span></div></div></div></div></section>
      <SiteFooter />
    </main>
  );
}
