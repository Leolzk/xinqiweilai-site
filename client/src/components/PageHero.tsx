/**
 * 声波奇点内页视觉入口：用图像、刻度与不对称文本建立可进入的主题场景。
 * 设计提醒：每页保持深色留白、仪器标签和柔和的深度图像，正文不压在明亮区域上。
 */
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  index: string;
  title: ReactNode;
  description: string;
  image: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, index, title, description, image, aside }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__image" style={{ backgroundImage: `url(${image})` }} />
      <div className="page-hero__resonance" aria-hidden="true"><i /><i /><i /><b /></div>
      <div className="page-hero__rail"><span>{index}</span><i /><span>∞</span></div>
      <div className="page-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__description">{description}</p>
      </div>
      {aside ? <div className="page-hero__aside">{aside}</div> : null}
    </section>
  );
}
