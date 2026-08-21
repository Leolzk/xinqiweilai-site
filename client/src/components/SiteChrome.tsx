/** 活体星图设计系统：统一导航使用稳定的信息层，品牌图形与低频信号注记贯穿各页面。 */
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const logoUrl = "/manus-storage/future-mind-logo-crop_138a4cac.png";

const navItems = [
  { href: "/site", label: "官网首页" },
  { href: "/ai-platform", label: "AI 智能平台" },
  { href: "/solutions", label: "整体解决方案" },
  { href: "/products", label: "产品与服务" },
  { href: "/about", label: "关于芯启蔚来" },
];

export function SiteHeader() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header site-header-shared">
      <Link href="/" className="brand brand-future" aria-label="芯启蔚来生物科技总首页">
        <img className="brand-asset" src={logoUrl} alt="芯启蔚来生物科技品牌标志" />
        <span className="brand-copy"><strong>芯启蔚来</strong><small>FUTURE MIND BIOTECH</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="主导航">
        {navItems.map((item) => <Link key={item.href} className={location === item.href ? "nav-active" : ""} href={item.href}>{item.label}</Link>)}
      </nav>
      <a className="nav-cta" href="tel:02151869862">021-51869862 <ArrowUpRight size={15} /></a>
      <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="打开导航菜单" aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      {menuOpen && <nav className="mobile-nav chrome-mobile-nav" aria-label="移动端主导航">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</nav>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="layout-boundary footer-grid">
        <Link href="/" className="brand brand-future footer-brand">
          <img className="brand-asset" src={logoUrl} alt="芯启蔚来生物科技品牌标志" />
          <span className="brand-copy"><strong>芯启蔚来</strong><small>FUTURE MIND BIOTECH</small></span>
        </Link>
        <p>芯启蔚来生物科技(上海)有限公司<br />Future Mind Biotechnology (Shanghai)Co.,Ltd</p>
        <div className="footer-meta"><span>© 2026 FUTURE MIND BIOTECH</span><span>CHINA / GLOBAL COLLABORATION</span></div>
      </div>
    </footer>
  );
}
