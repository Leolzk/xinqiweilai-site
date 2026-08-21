/** 活体星图设计系统：产品页使用高信息密度的目录结构，把能力表达为可组合的实验基础设施。 */
import { ArrowUpRight, Beaker, Box, CircuitBoard, Cpu, FlaskConical, Microscope, ScanLine } from "lucide-react";
import { CellField } from "@/components/CellField";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const catalog = [
  { code: "CAT. 01", title: "类器官试剂与耗材", icon: FlaskConical, copy: "支持模型建立、维持、扩增、传代、冻存和分析等实验节点的培养基础。", items: ["培养基与补充体系", "细胞外基质与相关耗材", "建模与质控配套"] },
  { code: "CAT. 02", title: "类器官芯片与定制", icon: CircuitBoard, copy: "基于模型需求设计芯片结构、培养腔体、流体路径和应用场景的组合方案。", items: ["微流控类器官芯片", "芯片模型适配", "定制化功能模块"] },
  { code: "CAT. 03", title: "类器官配套设备", icon: Microscope, copy: "为稳定培养、过程观察、环境控制和实验室协同配置基础设备与运行模块。", items: ["培养与环境控制", "图像与状态观察", "液体处理与工作站"] },
  { code: "CAT. 04", title: "AI智能化平台", icon: Cpu, copy: "把数据、模型、过程和设备读数接入同一智能化语境，形成可回溯的工作流视图。", items: ["多模态数据接入", "过程分析与模型识别", "工作流协同"] },
  { code: "CAT. 05", title: "类器官CEO服务", icon: ScanLine, copy: "面向具体研究任务的项目化协同，连接方案设计、流程搭建、质控和结果解读。", items: ["技术方案协同", "项目节点管理", "结果解读支持"] },
  { code: "CAT. 06", title: "定制整合服务", icon: Beaker, copy: "根据组织模型、疾病方向、研发阶段或实验室条件，组织一体化的配置路径。", items: ["模型与场景评估", "模块整合建议", "交付路径设计"] },
];

export default function Products() {
  return <main className="site-shell products-page"><section className="page-hero products-hero"><CellField /><img className="page-hero-visual products-hero-visual" src="/manus-storage/future-mind-products-hero_b507a386.png" alt="类器官试剂芯片与智能设备产品系统" /><div className="catalog-aura" aria-hidden="true" /><SiteHeader /><div className="layout-boundary products-hero-content"><p className="eyebrow"><span /> PRODUCT & SERVICE CATALOG / 01</p><h1>把所需能力，<br /><em>组织成系统。</em></h1><p className="page-lead">芯启蔚来的产品与服务以研发流程为单位进行组合。您可以从单一模块开始，也可以围绕实际项目建立一套完整的类器官基础设施。</p><div className="hero-ai-readout"><span><i /> MATERIAL / TRACE</span><span><i /> CHIP / CONNECT</span><span><i /> DEVICE / READOUT</span></div></div></section><section className="catalog-section"><div className="layout-boundary catalog-heading"><p className="section-index">/ 02 — CAPABILITY INDEX</p><div><h2>从基础工具，<br />到<strong>智能化协同。</strong></h2><p>以下目录用于帮助团队快速定位需要讨论的能力模块；具体配置将始终回到您的模型、流程和研究目标。</p></div></div><div className="layout-boundary catalog-grid">{catalog.map((item) => { const Icon = item.icon; return <article className="catalog-card" key={item.code}><div className="catalog-head"><span>{item.code}</span><Icon size={23} strokeWidth={1.2} /></div><h3>{item.title}</h3><p>{item.copy}</p><ul>{item.items.map((entry) => <li key={entry}><i />{entry}</li>)}</ul><a href="tel:02151869862">咨询此模块 <ArrowUpRight size={16} /></a></article>; })}</div></section><section className="catalog-cta"><div className="layout-boundary catalog-cta-inner"><div className="catalog-loop" aria-hidden="true"><Box size={38} /><span>01</span><span>02</span><span>03</span></div><div><p className="eyebrow"><span /> CONFIGURE WITH YOUR MODEL</p><h2>没有两套类器官工作流，<br /><em>完全相同。</em></h2></div><a className="solid-button" href="tel:02151869862">021-51869862 <ArrowUpRight size={17} /></a></div></section><SiteFooter /></main>;
}
