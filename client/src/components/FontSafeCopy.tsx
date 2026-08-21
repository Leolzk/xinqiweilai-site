/** 字体合规复制层：选中的网页文字写入 HTML 剪贴板时显式标注宋体，避免 Word 按默认字体接收。 */
import { useEffect } from "react";

const COPY_FONT = "SimSun, 宋体";

export function FontSafeCopy() {
  useEffect(() => {
    const lockCopiedFont = (event: ClipboardEvent) => {
      const root = document.getElementById("root");
      const selection = window.getSelection();
      if (!root || !selection || selection.rangeCount === 0 || selection.isCollapsed || !event.clipboardData) return;

      const range = selection.getRangeAt(0);
      if (!root.contains(range.commonAncestorContainer)) return;

      const fragment = range.cloneContents();
      const wrapper = document.createElement("div");
      wrapper.append(fragment);
      if (!wrapper.textContent?.trim()) return;

      wrapper.style.setProperty("font-family", COPY_FONT, "important");
      wrapper.querySelectorAll<HTMLElement>("*").forEach((element) => {
        element.style.setProperty("font-family", COPY_FONT, "important");
      });

      event.clipboardData.setData("text/plain", selection.toString());
      event.clipboardData.setData("text/html", wrapper.outerHTML);
      event.preventDefault();
    };

    document.addEventListener("copy", lockCopiedFont);
    return () => document.removeEventListener("copy", lockCopiedFont);
  }, []);

  return null;
}
