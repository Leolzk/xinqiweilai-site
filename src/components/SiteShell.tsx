/**
 * 声波奇点全局外壳：悬浮导航、仪器式页脚与无障碍跳转链接统一各页的空间语言。
 * 设计提醒：导航像稳定控制条，内容沿轨道展开；避免传统居中卡片站点的观感。
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ASSETS, profile } from "@/lib/siteContent";
import { SignalField } from "@/components/SignalField";

const navigation = [
  { href: "/", label: "信号场", code: "00" },
  { href: "/music", label: "音乐", code: "01" },
  { href: "/ai", label: "AI 实验", code: "02" },
  { href: "/projects", label: "项目", code: "03" },
  { href: "/about", label: "关于", code: "04" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <div className="site-shell">
      <SignalField />
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <Link href="/" className="brand-lockup" aria-label="返回 Neural Sonic 主页">
          <img src={ASSETS.mark} alt="" className="brand-lockup__mark" />
          <span className="brand-lockup__wordmark"><b>NEURAL</b><i>/</i><strong>SONIC</strong></span>
        </Link>
        <nav className={`site-nav ${open ? "site-nav--open" : ""}`} aria-label="主导航">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav__link ${location === item.href ? "is-active" : ""}`}
              aria-current={location === item.href ? "page" : undefined}
            >
              <span>{item.code}</span>{item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__meta">
          <span className="live-dot" />
          <span>ONLINE</span>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "关闭导航" : "打开导航"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="site-footer__signal"><img src={ASSETS.mark} alt="" /><span><i className="live-dot" /> SIGNAL STABLE</span></div>
        <p>一个关于声音、模型与人的个人信号档案。</p>
        <a href={`mailto:${profile.email}`} className="footer-contact">{profile.email}<ArrowUpRight size={15} /></a>
        <span className="site-footer__code">NS / 2026 / ∿</span>
      </footer>
    </div>
  );
}
