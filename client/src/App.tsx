import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./ai-enhancements.css";
import "./font-compliance.css";
import { AmbientAudio } from "./components/AmbientAudio";
import { WeChatFollow } from "./components/WeChatFollow";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { TranslationLayer } from "./components/TranslationLayer";
import Home from "./pages/Home";
import AIPlatform from "./pages/AIPlatform";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import About from "./pages/About";
import Portal from "./pages/Portal";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Portal} />
      <Route path={"/home"} component={Portal} />
      <Route path={"/site"} component={Home} />
      <Route path={"/ai-platform"} component={AIPlatform} />
      <Route path={"/solutions"} component={Solutions} />
      <Route path={"/products"} component={Products} />
      <Route path={"/about"} component={About} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <LanguageProvider>
      <ErrorBoundary>
        <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
          <TooltipProvider>
            <Toaster />
            <AmbientAudio />
            <WeChatFollow />
            <LanguageSwitch />
            <Router />
            <TranslationLayer />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </LanguageProvider>
  );
}

export default App;
