/**
 * 深空旗舰首页：用类器官指挥舱、双语价值主张与升级提示呈现企业能力和持续迭代状态。
 * 设计提醒：升级提示位于英雄区数据场内，取代旧培养环境信息框，不干扰核心行动入口。
 */
import { ArrowDownRight, ArrowUpRight, FlaskConical, ScanLine } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS, capabilities, company, pick, solutions } from "@/lib/futureMindContent";

export default function CompanyHome() {
  const { language } = useLanguage();
  const zh = language === "zh";
  return <div className="company-home">
    <section className="fm-hero"><div className="fm-hero__art" style={{ backgroundImage: `url(${ASSETS.hero})` }} /><div className="fm-hero__shells" aria-hidden="true"><i /><i /><i /><b /></div><div className="fm-hero__content"><p className="fm-eyebrow"><i />{zh ? "INTEGRATED ORGANOID SOLUTIONS" : "类器官整体解决方案"}</p><h1>{zh ? <>让类器官研究，<em>进入下一阶段。</em></> : <>Integrated organoid solutions<br /><em>for the next stage of research.</em></>}</h1><p>{zh ? "从试剂耗材、类器官芯片与个性化定制，到配套设备与 CRO 服务，芯启蔚来连接完整的研究支持路径。" : "From reagents and consumables to organoid chips, tailored concepts, supporting equipment and CRO services, Future Mind connects the full research-support pathway."}</p><div className="fm-hero__actions"><Link href="/solutions" className="fm-primary">{zh ? "探索解决方案" : "Explore solutions"}<ArrowDownRight size={18} /></Link><a href={`tel:${company.telephone.replace(/-/g, "")}`} className="fm-secondary">{zh ? "咨询合作" : "Talk to us"}<ArrowUpRight size={17} /></a></div></div><div className="hero-upgrade-note"><span>{zh ? "网站正在升级，还在完善中，敬请期待……" : "Website upgrade in progress. More to come…"}</span><i /></div><div className="fm-hero__side">{zh ? "移动光标，感知培养场" : "MOVE THROUGH THE CULTURE FIELD"}</div></section>
    <section className="home-intro"><div className="home-intro__symbol"><FlaskConical size={28} /><span>FM / 01</span></div><p>{zh ? "芯启蔚来面向类器官研究与应用场景，提供覆盖培养、芯片、设备与研究服务的整体解决方案。" : "Future Mind supports organoid research and application settings with integrated solutions for culture, chips, equipment and research services."}</p><div className="home-intro__line" /></section>
    <section className="solution-constellation"><div className="section-heading"><p className="fm-eyebrow"><i />{zh ? "能力矩阵" : "CAPABILITY MATRIX"}</p><h2>{zh ? <>一条路径，<em>连接完整能力。</em></> : <>One pathway.<br /><em>Connected capabilities.</em></>}</h2></div><div className="solution-grid">{solutions.map((item, index) => <Link href={item.href} className={`solution-card solution-card--${item.icon}`} key={item.no}><span>{item.no}</span><div className="solution-card__glyph">{index % 2 ? <ScanLine size={24} /> : <FlaskConical size={24} />}</div><small>{zh ? pick(item.title, "en") : pick(item.title, "zh")}</small><h3>{pick(item.title, language)}</h3><p>{pick(item.detail, language)}</p><ArrowUpRight className="solution-card__arrow" size={20} /></Link>)}</div></section>
    <section className="proof-band">{capabilities.map(([title, body], index) => <article key={pick(title, language)}><span>0{index + 1}</span><h3>{pick(title, language)}</h3><p>{pick(body, language)}</p></article>)}</section>
    <section className="home-contact"><img src={ASSETS.logo} alt="" className="home-contact__mark" /><div><p className="fm-eyebrow"><i />{zh ? "开始连接 / START A CONVERSATION" : "START A CONVERSATION / 开始连接"}</p><h2>{zh ? <>一起定义下一个<br /><em>研究路径。</em></> : <>Define the next<br /><em>research pathway.</em></>}</h2></div><a href={`tel:${company.telephone.replace(/-/g, "")}`}><small>{zh ? "合作咨询热线 / COLLABORATION LINE" : "COLLABORATION LINE / 合作咨询热线"}</small><b>{company.telephone}</b><ArrowUpRight size={22} /></a></section>
  </div>;
}
