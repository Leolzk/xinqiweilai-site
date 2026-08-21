/** 活体星图设计系统：公众号入口以独立信号节点悬浮于音乐控件上方，保持全站可达而不干扰浏览。 */
import { useState } from "react";
import { MessageCircleMore, X } from "lucide-react";
import "./wechat-follow.css";

const qrUrl = "/manus-storage/future-mind-wechat-qr_93df8553.jpg";

export function WeChatFollow() {
  const [open, setOpen] = useState(false);
  return <aside className={`wechat-follow ${open ? "is-open" : ""}`} aria-label="芯启蔚来公众号">
    {open && <div className="wechat-panel-float" role="dialog" aria-label="扫码关注芯启蔚来公众号">
      <button className="wechat-close" type="button" aria-label="关闭公众号二维码" onClick={() => setOpen(false)}><X size={15} /></button>
      <img src={qrUrl} alt="芯启蔚来公众号二维码" />
      <div><p>关注芯启蔚来公众号</p><span>扫码获取类器官技术、AI平台与解决方案动态。</span><i>WECHAT / FOLLOW</i></div>
    </div>}
    <button className="wechat-trigger" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
      <MessageCircleMore size={17} />
      <span>公众号</span>
    </button>
  </aside>;
}
