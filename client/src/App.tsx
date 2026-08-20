/**
 * 声波奇点路由中枢：多页叙事围绕信号场、音乐、AI、项目与关于展开。
 * 设计提醒：全站默认深色空间底，路由切换保持明确且不打断用户的探索节奏。
 */
/** 活体蓝图路由中枢：中英双语公司官网围绕整体解决方案、芯片定制、设备与 CRO 服务展开。 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { FutureMindShell } from "./components/FutureMindShell";
import CompanyHome from "./pages/CompanyHome";
import Solutions from "./pages/Solutions";
import Chips from "./pages/Chips";
import Equipment from "./pages/Equipment";
import Cro from "./pages/Cro";
import CompanyAbout from "./pages/CompanyAbout";


function Router() {
  return (
    <FutureMindShell>
      <Switch>
        <Route path="/" component={CompanyHome} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/chips" component={Chips} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/cro" component={Cro} />
        <Route path="/about" component={CompanyAbout} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </FutureMindShell>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <LanguageProvider><TooltipProvider><Toaster /><Router /></TooltipProvider></LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
