/** 活体星图设计系统：关于页以品牌身份、联络方式与公众号为稳定锚点，保留深海场景中的清晰信息层。 */
import { ArrowUpRight, Phone } from "lucide-react";
import { CellField } from "@/components/CellField";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const logoUrl = "/manus-storage/future-mind-logo-crop_138a4cac.png";
const qrUrl = "/manus-storage/future-mind-wechat-qr_93df8553.jpg";

export default function About() {
  return <main className="site-shell about-page"><section className="page-hero about-hero"><CellField /><img className="page-hero-visual about-hero-visual" src="/manus-storage/future-mind-about-hero_de791a76.png" alt="芯启蔚来生物科技的类器官与数据连接愿景" /><div className="about-starmap" aria-hidden="true" /><SiteHeader /><div className="layout-boundary about-hero-content"><p className="eyebrow"><span /> ABOUT FUTURE MIND BIOTECH / 01</p><h1>启心铭志，<br /><em>引动未来。</em></h1><p className="page-lead">芯启蔚来生物科技(上海)有限公司致力于类器官整体解决方案的建设，以试剂耗材、芯片定制、配套设备、AI智能化与项目协同服务，连接生命科学研究中的关键节点。</p></div></section><section className="identity-section"><div className="layout-boundary identity-grid"><div className="identity-brand"><img src={logoUrl} alt="芯启蔚来生物科技品牌标志" /><div><p>芯启蔚来生物科技(上海)有限公司</p><span>Future Mind Biotechnology (Shanghai)Co.,Ltd</span></div></div><div><p className="section-index">/ 02 — BRAND STATEMENT</p><h2>Unlock your mind,<br /><strong>open your future!</strong></h2><p className="identity-copy">我们相信，类器官技术的价值在于更贴近人源生物学的观察与协同。芯启蔚来希望以系统化的技术基础设施，帮助团队把复杂的探索推进为可被组织、理解和沟通的路径。</p></div></div></section><section className="contact-detail"><div className="layout-boundary contact-detail-grid"><div><p className="eyebrow light"><span /> CONNECT WITH FUTURE MIND / 03</p><h2>从一次交流，<br /><em>开始一条路径。</em></h2><a className="contact-phone-large" href="tel:02151869862"><Phone size={25} /><span><small>BUSINESS LINE</small><strong>021-51869862</strong></span><ArrowUpRight size={18} /></a></div><div className="wechat-panel"><img src={qrUrl} alt="芯启蔚来生物科技公众号二维码" /><div><p>芯启蔚来公众号</p><span>扫描二维码，关注类器官技术、产品服务与解决方案动态。</span><i>WECHAT / FOLLOW</i></div></div></div></section><SiteFooter /></main>;
}
