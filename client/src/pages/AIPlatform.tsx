/** 活体星图设计系统：AI页面采用可审阅的信号矩阵与流式节点，表达智能化而避免黑箱式夸张。 */
import { ArrowDownRight, ArrowUpRight, Binary, BrainCircuit, Cpu, ScanLine } from "lucide-react";
import { CellField } from "@/components/CellField";
import { SignalTicker } from "@/components/SignalTicker";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const layers = [
  { n: "01", title: "多模态数据接入", en: "MULTI-MODAL INPUT", icon: Binary, text: "将图像、培养记录、芯片参数与实验读数组织为可追溯的数据层，为后续分析建立统一上下文。" },
  { n: "02", title: "模型识别与分析", en: "MODEL ANALYTICS", icon: BrainCircuit, text: "围绕形态、过程与读数构建可复核的分析路径，帮助团队从高维实验信号中定位关键观察点。" },
  { n: "03", title: "自动化流程协同", en: "AUTOMATION ORCHESTRATION", icon: Cpu, text: "把培养、监测、数据归档和任务节点连接到同一工作流，减少信息断点并提升协同效率。" },
  { n: "04", title: "证据化决策工作台", en: "EVIDENCE WORKBENCH", icon: ScanLine, text: "以模型、数据和过程记录为依据形成可回溯的项目视图，支持科研与转化团队的下一步判断。" },
];

export default function AIPlatform() {
  return <main className="site-shell ai-page">
    <section className="page-hero ai-hero">
      <CellField />
      <div className="ai-field-grid" aria-hidden="true" />
      <SiteHeader />
      <div className="layout-boundary ai-hero-content">
        <div><p className="eyebrow"><span /> INTELLIGENT ORGANOID INFRASTRUCTURE / 01</p><h1>让类器官系统<br /><em>开始理解数据。</em></h1><p className="page-lead">芯启蔚来以AI为数据与工作流的连接层，围绕类器官模型、芯片微环境、自动化设备和过程读数，构建更连续、可观察、可协同的智能化基础设施。</p><div className="hero-actions"><a className="solid-button" href="#architecture">进入智能架构 <ArrowDownRight size={17} /></a><a className="text-button" href="tel:02151869862">沟通平台需求 <ArrowUpRight size={17} /></a></div></div>
        <div className="ai-console" aria-label="AI类器官智能化闭环示意"><div className="console-head"><span className="status-dot" /> FUTURE MIND / INTELLIGENCE CORE</div><div className="console-map"><span className="core-point p1" /><span className="core-point p2" /><span className="core-point p3" /><span className="core-point p4" /><span className="core-link l1" /><span className="core-link l2" /><span className="core-link l3" /><b>AI</b></div><div className="console-readout"><span>INPUT / ORGANOID</span><span>STATE / ACTIVE</span><span>OUTPUT / EVIDENCE</span></div></div>
      </div>
    </section>
    <SignalTicker />
    <section className="ai-architecture" id="architecture"><div className="layout-boundary"><div className="section-heading ai-heading"><div><p className="eyebrow light"><span /> PLATFORM ARCHITECTURE / 02</p><h2>从数据进入，<br /><em>到洞见形成。</em></h2></div><p>智能化不是替代实验判断，而是让模型状态、微环境变化和关键读数在正确的节点被看见、被关联、被回溯。</p></div><div className="ai-layer-grid">{layers.map((layer) => { const Icon = layer.icon; return <article className="ai-layer" key={layer.n}><div className="layer-top"><span>{layer.n}</span><Icon size={22} strokeWidth={1.25} /></div><p className="mono-label">{layer.en}</p><h3>{layer.title}</h3><p>{layer.text}</p><div className="layer-node"><i /> SIGNAL / READY</div></article>; })}</div></div></section>
    <section className="ai-bridge"><div className="layout-boundary bridge-layout"><div className="bridge-orbit" aria-hidden="true"><span /><span /><span /><b>FM</b></div><div><p className="section-index">/ 03 — CONNECT THE LAB</p><h2>让每一次操作，<br />留下<strong>可被理解的路径。</strong></h2></div><p>当数据、设备与人员协作遵循同一套上下文，AI才有机会成为真正的实验室伙伴。我们从具体的模型与工作流出发，协同定义适合团队的智能化路径。</p></div></section>
    <section className="page-close"><div className="layout-boundary page-close-inner"><p className="eyebrow"><span /> START WITH YOUR MODEL</p><h2>为您的类器官工作流，<br /><em>建立AI连接层。</em></h2><a className="solid-button" href="tel:02151869862">021-51869862 <ArrowUpRight size={17} /></a></div></section>
    <SiteFooter />
  </main>;
}
