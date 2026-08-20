/**
 * 深空旗舰全局外壳：将圆形品牌印记、双语导航、热线与公众号二维码统一为企业入口。
 * 设计提醒：页首与页脚使用同一圆形品牌容器；二维码保持足够尺寸，确保可被正常扫码。
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Phone, X } from "lucide-react";
import { BioField } from "@/components/BioField";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS, company, navigation, pick } from "@/lib/futureMindContent";

export function FutureMindShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const scroll = () => setScrolled(window.scrollY > 18); window.addEventListener("scroll", scroll, { passive: true }); return () => window.removeEventListener("scroll", scroll); }, []);
  useEffect(() => setOpen(false), [location]);
  return <div className="fm-site">
    <BioField /><a className="skip-link" href="#main-content">{language === "zh" ? "跳到主要内容" : "Skip to main content"}</a>
    <header className={`fm-header ${scrolled ? "fm-header--scrolled" : ""}`}>
      <Link href="/" className="fm-brand" aria-label={pick(company.name, language)}><img src={ASSETS.logo} alt="" /><span><b>{pick(company.name, language)}</b><i>{language === "zh" ? "FUTURE MIND" : "芯启蔚来"}</i></span></Link>
      <nav className={`fm-nav ${open ? "fm-nav--open" : ""}`} aria-label={language === "zh" ? "主导航" : "Primary navigation"}>{navigation.map(item => <Link key={item.href} href={item.href} className={location === item.href ? "is-active" : ""} aria-current={location === item.href ? "page" : undefined}><small>{item.code}</small>{pick(item.label, language)}</Link>)}</nav>
      <div className="fm-actions"><div className="language-switch" aria-label={language === "zh" ? "语言切换" : "Language switch"}><button className={language === "zh" ? "is-selected" : ""} onClick={() => setLanguage("zh")}>中</button><span>/</span><button className={language === "en" ? "is-selected" : ""} onClick={() => setLanguage("en")}>EN</button></div><a className="header-phone" href={`tel:${company.telephone.replace(/-/g, "")}`}><Phone size={14} />{company.telephone}</a><button className="fm-menu" type="button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? "关闭导航" : "打开导航"}>{open ? <X size={19} /> : <Menu size={19} />}</button></div>
    </header>
    <main id="main-content">{children}</main>
    <footer className="fm-footer"><div className="fm-footer__brand"><img src={ASSETS.logo} alt="" /><div><b>{pick(company.name, language)}</b><span>{pick(company.legalName, language)}</span></div></div><p>{pick(company.tagline, language)}</p><a href={`tel:${company.telephone.replace(/-/g, "")}`}><Phone size={15} />{company.telephone}</a><div className="fm-footer__qr"><img src={ASSETS.wechatQr} alt={language === "zh" ? "芯启蔚来微信公众号二维码" : "Future Mind WeChat official account QR code"} /><span>{language === "zh" ? <>关注微信公众号<small>WECHAT OFFICIAL ACCOUNT</small></> : <>Follow our WeChat account<small>公众号二维码</small></>}</span></div><small>© 2026 FUTURE MIND BIOTECHNOLOGY</small></footer>
  </div>;
}
