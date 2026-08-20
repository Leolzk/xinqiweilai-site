/**
 * 项目页：以斜向轨道和大型编号标注跨越音乐与 AI 的个人实践，不采用等宽卡片矩阵。
 * 设计提醒：每个项目像轨道上的独立物体，使用留白、线条和局部高亮表现层次。
 */
import { ArrowUpRight, Plus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ASSETS, projects } from "@/lib/siteContent";

export default function Projects() {
  return (
    <div className="projects-page page-wrap">
      <PageHero
        eyebrow="CROSSOVER PRACTICE · 03"
        index="P / 03"
        title={<>把想法接入<br /><em>可感知的世界。</em></>}
        description="这些项目是声音、算法、界面和现场体验互相折射的实验场。"
        image={ASSETS.projects}
        aside={<><span>PROJECT INDEX</span><b>03 <small>SELECTED</small></b><i className="status-pulse" /></>}
      />
      <section className="project-index-section">
        <div className="project-index-header"><p className="eyebrow">SELECTED PROJECTS / 可替换示例</p><p>三种不同媒介的切口。实际展示时，可将每一项连接到真实的项目页面、演示视频或代码仓库。</p></div>
        <div className="project-rail">
          {projects.map((project, index) => (
            <article className={`project-entry project-entry--${project.accent}`} key={project.index}>
              <div className="project-entry__index">{project.index}</div>
              <div className="project-entry__node"><i /><Plus size={16} /></div>
              <div className="project-entry__content"><span>{project.category}</span><h2>{project.title}</h2><p>{project.description}</p><div>{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div></div>
              <button type="button" className="project-entry__open" aria-label={`打开 ${project.title} 示例详情`}><ArrowUpRight size={22} /></button>
              {index < projects.length - 1 ? <div className="project-entry__connector" /> : null}
            </article>
          ))}
        </div>
      </section>
      <section className="project-closer"><span>HAVE A SIGNAL TO SHARE?</span><a href="mailto:hello@your-domain.com">建立连接 <ArrowUpRight size={20} /></a></section>
    </div>
  );
}
