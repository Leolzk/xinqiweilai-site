/** 活体蓝图产品与解决方案页：将试剂耗材嵌入连续培养路径，而不是孤立成单一产品货架。 */
import { Check, ChevronRight, Layers3 } from "lucide-react";
import { ServiceHero } from "@/components/ServiceHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { pick, serviceCopy } from "@/lib/futureMindContent";

export default function Solutions() { const { language } = useLanguage(); const zh = language === "zh"; const items = zh ? ["类器官培养试剂与耗材支持", "培养体系与应用场景梳理", "研究流程中的衔接建议"] : ["Organoid culture reagents and consumables support", "Culture-system and application-setting alignment", "Connected guidance across research workflows"]; return <div className="service-page"><ServiceHero {...serviceCopy.solutions} code="01" /><section className="service-statement"><Layers3 size={28} /><p>{zh ? "类器官研究的可靠性，往往从培养条件被清晰定义的那一刻开始。" : "Reliable organoid research often begins when culture conditions are clearly defined."}</p><span>PRODUCT ECOSYSTEM</span></section><section className="detail-split"><div><p className="fm-eyebrow"><i />{zh ? "服务构成" : "SERVICE COMPONENTS"}</p><h2>{zh ? "让实验基础，形成一套可协同的体系。" : "Turn experimental basics into a coordinated system."}</h2></div><div className="check-list">{items.map((item, i) => <div key={item}><span>0{i + 1}</span><Check size={17} /><p>{item}</p><ChevronRight size={16} /></div>)}</div></section></div>; }
