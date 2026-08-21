/** 系统字体双语策略：固定切换器让访客可在任何页面切换中文与英文版本。 */
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import "./language-switch.css";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  return <div className="language-switch" role="group" aria-label="Language selector">
    <Languages size={14} />
    <button type="button" className={language === "zh" ? "active" : ""} aria-pressed={language === "zh"} onClick={() => setLanguage("zh")}>中</button>
    <i />
    <button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
  </div>;
}
