/**
 * 活体蓝图语言控制层：中文默认，关键科研服务信息可即时切换为英文。
 * 设计提醒：双语是同等信息层，而不是在中文页面上追加的装饰翻译。
 */
import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "zh" | "en";
type LanguageState = { language: Language; setLanguage: (language: Language) => void };
const LanguageContext = createContext<LanguageState | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
