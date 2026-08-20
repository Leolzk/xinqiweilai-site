/**
 * AI 实验页：把抽象模型主题组织成可浏览的实验坐标，而非通用科技功能清单。
 * 设计提醒：空间图像右置，文本保留在暗色左侧；卡片悬停仅提升，不使用刺眼色块。
 */
import { ArrowUpRight, Braces, CircleDotDashed, Cpu } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { aiExperiments, ASSETS } from "@/lib/siteContent";

const labMeta = [
  ["INPUT", "语言 · 声音 · 手势"],
  ["METHOD", "原型化 / 反复聆听"],
  ["OUTPUT", "新的感知问题"],
];

export default function AI() {
  return (
    <div className="ai-page page-wrap">
      <PageHero
        eyebrow="EXPERIMENTAL INTELLIGENCE · 02"
        index="A / 02"
        title={<>不只让机器<br /><em>生成内容。</em></>}
        description="我更在意模型能否提出新的聆听方式、创作问题与人与机器的协作关系。"
        image={ASSETS.ai}
        aside={<><span>LAB STATUS</span><b>03 <small>ACTIVE</small></b><i className="status-pulse" /></>}
      />
      <section className="lab-manifesto">
        <div className="lab-manifesto__icon"><Cpu size={32} /></div>
        <p>“AI 对我而言不是捷径。它是一面会回声的镜子：你丢进一个问题，它会让问题长出新的形状。”</p>
        <div className="lab-manifesto__stamp">NOTES FROM<br />THE LISTENING LAB</div>
      </section>
      <section className="experiments-section">
        <div className="experiments-heading"><p className="eyebrow">OPEN EXPERIMENTS / 可替换示例</p><h2>目前正在<br />接收的信号。</h2></div>
        <div className="experiment-grid">
          {aiExperiments.map((experiment, index) => (
            <article className="experiment-card" key={experiment.id}>
              <div className="experiment-card__head"><span>{experiment.id}</span>{index === 0 ? <CircleDotDashed size={19} /> : <Braces size={19} />}</div>
              <p className="experiment-card__type">{experiment.type}</p>
              <h3>{experiment.title}</h3>
              <p className="experiment-card__summary">{experiment.summary}</p>
              <div className="experiment-card__foot"><span><i /> {experiment.state}</span><button type="button" aria-label={`查看 ${experiment.title} 详情`}><ArrowUpRight size={18} /></button></div>
            </article>
          ))}
        </div>
      </section>
      <section className="lab-metadata">{labMeta.map(([key, value]) => <div key={key}><span>{key}</span><b>{value}</b></div>)}</section>
    </div>
  );
}
