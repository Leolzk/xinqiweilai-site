/** 活体蓝图芯片与定制页：以微流控轨道组织芯片能力和定制流程，突出研究问题优先。 */
import { ArrowDown, Droplets, Route } from "lucide-react";
import { ServiceHero } from "@/components/ServiceHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { pick, serviceCopy } from "@/lib/futureMindContent";

export default function Chips() { const { language } = useLanguage(); const zh = language === "zh"; const flow = zh ? [["研究问题", "明确应用目标与类器官模型需求"],["结构设计", "梳理芯片通道、培养腔与流体条件"],["定制协同", "围绕实验路径推进适配方案"]] : [["Research question", "Clarify application objectives and organoid-model needs"],["Architecture", "Align channels, culture chambers and fluid conditions"],["Custom collaboration", "Advance an adapted concept around the study pathway"]]; return <div className="service-page"><ServiceHero {...serviceCopy.chips} code="02" /><section className="chip-intro"><div className="chip-intro__mark"><Droplets size={31} /><Route size={20} /></div><h2>{zh ? <>从细胞环境到流体路径，<em>让每一个设计选择都有方向。</em></> : <>From cellular environments to fluid paths,<em> give each design decision direction.</em></>}</h2></section><section className="custom-flow"><p className="fm-eyebrow"><i />{zh ? "定制协同路径" : "CUSTOMIZATION PATH"}</p>{flow.map(([title, desc], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{desc}</p></div>{index < flow.length - 1 ? <ArrowDown size={18} /> : null}</article>)}</section></div>; }
