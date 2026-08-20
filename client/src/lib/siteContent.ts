/**
 * 声波奇点内容控制台：在此文件更新网站上的姓名、文字、列表、项目和外部链接。
 * 设计提醒：内容应像精密仪器读数，短句、有留白，并以电离青作为唯一主强调色。
 */
export const ASSETS = {
  hero: "/manus-storage/neural-sonic-home-hero_9fc3b60d.jpg",
  music: "/manus-storage/neural-sonic-music_c75e81e6.jpg",
  ai: "/manus-storage/neural-sonic-ai_83d80e88.jpg",
  projects: "/manus-storage/neural-sonic-projects_54dc1f82.jpg",
  mark: "/manus-storage/neural-sonic-mark_3b09d44b.png",
} as const;

export const profile = {
  name: "你的名字",
  role: "音乐探索者 · AI 发烧友",
  location: "基于好奇心工作",
  email: "hello@your-domain.com",
  availability: "开放连接 / 2026",
  heroEyebrow: "PERSONAL SIGNAL ARCHIVE · 01",
  heroTitle: ["让算法", "听见情绪。"],
  heroDescription:
    "我记录声音、模型与人类直觉相互作用的瞬间。这是一座持续接收新频率的个人信号场。",
};

export const musicSignals = [
  { code: "M-01", title: "夜航合成", meta: "氛围 / 模块化合成", length: "06:42", tone: "cyan" },
  { code: "M-02", title: "低频地形", meta: "电子 / 现场片段 · PLAYING", length: "04:18", tone: "amber" },
  { code: "M-03", title: "缓慢闪烁", meta: "极简 / 声音设计", length: "08:05", tone: "white" },
  { code: "M-04", title: "近场回声", meta: "田野 / 数字处理", length: "05:29", tone: "cyan" },
];

export const aiExperiments = [
  {
    id: "E-01",
    title: "Prompt-to-Texture",
    type: "声音材质研究",
    summary: "用语言描述作为控制电压，观察生成式模型如何把抽象情绪转译为可听见的纹理。",
    state: "持续迭代",
  },
  {
    id: "E-02",
    title: "Listening Agent",
    type: "交互式聆听代理",
    summary: "一套会追问、联想并记录聆听路径的对话原型，探索推荐之外的音乐发现。",
    state: "原型完成",
  },
  {
    id: "E-03",
    title: "Latent Choir",
    type: "人声潜空间",
    summary: "把和声、呼吸和情绪强度放进同一组连续维度，寻找可演奏的潜在声部。",
    state: "研究笔记",
  },
];

export const projects = [
  {
    index: "01",
    title: "Signal Garden",
    category: "互动声音 / 网页实验",
    description: "让浏览器中的微小手势长出会响应的声学形态。",
    tags: ["Web Audio", "Touch", "Generative"],
    accent: "cyan",
  },
  {
    index: "02",
    title: "Model Listening Notes",
    category: "AI / 研究档案",
    description: "记录我如何用模型、提示与失败案例重新理解“听见”。",
    tags: ["LLM", "Audio", "Notes"],
    accent: "amber",
  },
  {
    index: "03",
    title: "Afterimage Set",
    category: "现场音画 / 实验演出",
    description: "从残留视像与慢速脉冲中切出一段可漫游的夜间场景。",
    tags: ["Live", "Visual", "Ambient"],
    accent: "ice",
  },
];

export const operatingPrinciples = [
  ["01", "先听见问题", "技术是放大感知的工具，而不是取代感知的答案。"],
  ["02", "保留试错痕迹", "把草图、失败和未完成状态一并保存，作为下一次迭代的信号。"],
  ["03", "让复杂可感", "无论模型多复杂，最终体验都应从人的耳朵和身体出发。"],
];
