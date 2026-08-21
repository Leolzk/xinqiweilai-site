/** 系统字体双语策略：语言状态仅决定文本内容，所有字符仍通过宋体/黑体系统字族显示。 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "zh" | "en";
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => (localStorage.getItem("fm-language") === "en" ? "en" : "zh"));
  const setLanguage = (nextLanguage: Language) => setLanguageState(nextLanguage);
  useEffect(() => {
    localStorage.setItem("fm-language", language);
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.title = language === "en" ? "Future Mind Biotechnology (Shanghai) Co., Ltd. | Integrated Organoid Solutions" : "芯启蔚来生物科技（上海）有限公司｜类器官整体解决方案";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", language === "en" ? "Future Mind Biotechnology provides integrated organoid solutions for research, drug discovery, and translational medicine teams." : "芯启蔚来生物科技（上海）有限公司为科研、药物研发与转化医学团队提供类器官整体解决方案。");
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
