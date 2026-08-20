/**
 * 活体蓝图内页入口：用高亮白底科研图像、侧向工程标尺和双语文案建立专业服务场景。
 * 设计提醒：图像右置留出清晰的深色文字区，红色只在流程状态与定制节点中使用。
 */
import type { Localized } from "@/lib/futureMindContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { pick } from "@/lib/futureMindContent";

export function ServiceHero({ eyebrow, title, body, image, code }: { eyebrow: Localized; title: Localized; body: Localized; image: string; code: string }) {
  const { language } = useLanguage();
  return <section className="service-hero"><div className="service-hero__art" style={{ backgroundImage: `url(${image})` }} /><div className="service-hero__rail"><span>{code}</span><i /><span>FM</span></div><div className="service-hero__content"><p className="fm-eyebrow"><i />{pick(eyebrow, language)}</p><h1>{pick(title, language).split("\n").map(line => <span key={line}>{line}</span>)}</h1><p>{pick(body, language)}</p></div><div className="service-hero__status"><span>{language === "zh" ? "系统状态 / SYSTEM STATUS" : "SYSTEM STATUS / 系统状态"}</span><b>{language === "zh" ? "已就绪 / READY" : "READY / 已就绪"}</b><i /></div></section>;
}
