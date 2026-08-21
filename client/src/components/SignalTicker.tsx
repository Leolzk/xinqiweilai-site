/** 活体星图设计系统：用可读的系统信号取代装饰性轮播，强化AI类器官基础设施的实时感。 */
const signals = ["LIVE / MULTI-MODAL INPUT", "AI / ORGANOID INTELLIGENCE", "FLOW / TRACEABLE WORKFLOW", "READOUT / EVIDENCE READY"];

export function SignalTicker() {
  return <div className="signal-ticker" aria-label="平台能力标签"><div className="ticker-track">{[...signals, ...signals].map((signal, index) => <span key={`${signal}-${index}`}><i />{signal}</span>)}</div></div>;
}
