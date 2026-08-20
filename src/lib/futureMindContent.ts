/**
 * 活体蓝图内容控制台：在此更新公司资料、双语文案、服务名称、联系信息及静态资产地址。
 * 设计提醒：对外陈述保持科研级准确、可验证；不虚构临床结论、合作方或用户评价。
 */
import type { Language } from "@/contexts/LanguageContext";

export type Localized = Record<Language, string>;
export const l = (zh: string, en: string): Localized => ({ zh, en });
export const pick = (content: Localized, language: Language) => content[language];

export const ASSETS = {
  logo: "/manus-storage/future-mind-organoid-mark_b9f91278.png",
  wechatQr: "/manus-storage/future-mind-wechat-qr_aa2c90b5.jpg",
  hero: "/manus-storage/future-mind-flagship-hero_0fb3968a.jpg",
  solutions: "/manus-storage/future-mind-solutions_b1220bd6.jpg",
  chips: "/manus-storage/future-mind-flagship-chip_aa4d65dc.jpg",
  equipment: "/manus-storage/future-mind-equipment_90781f88.jpg",
  cro: "/manus-storage/future-mind-flagship-cro_04f6a509.jpg",
} as const;

export const company = {
  name: l("芯启蔚来", "FUTURE MIND"),
  legalName: l("芯启蔚来生物科技（上海）有限公司", "Future Mind Biotechnology (Shanghai) Co., Ltd."),
  tagline: l("启心铭志，引动未来！", "Unlock your mind, open your future!"),
  telephone: "021-51869862",
  email: "business@futuremindbio.com",
};

export const navigation = [
  { href: "/", label: l("首页", "Home"), code: "00" },
  { href: "/solutions", label: l("产品与解决方案", "Solutions"), code: "01" },
  { href: "/chips", label: l("类器官芯片与定制", "Chips & Custom"), code: "02" },
  { href: "/equipment", label: l("配套设备", "Equipment"), code: "03" },
  { href: "/cro", label: l("类器官 CRO 服务", "CRO Services"), code: "04" },
  { href: "/about", label: l("关于我们", "About"), code: "05" },
];

export const solutions = [
  { no: "01", title: l("产品与解决方案", "Products & Solutions"), detail: l("整合类器官试剂耗材、培养体系与研究路径，为实验设计提供可衔接的基础支持。", "Integrated reagents, consumables, culture systems and research pathways for connected experimental support."), href: "/solutions", icon: "orb" },
  { no: "02", title: l("芯片与个性化定制", "Chips & Customization"), detail: l("围绕微流控结构、培养需求与研究目标，构建适配的类器官芯片与定制化方案。", "Organoid-on-chip and tailored concepts aligned to microfluidic architecture, culture needs and research objectives."), href: "/chips", icon: "flow" },
  { no: "03", title: l("配套设备", "Supporting Equipment"), detail: l("面向培养、观察与分析场景，连接实验流程中的关键设备节点。", "Supporting key culture, observation and analysis stages across the experimental workflow."), href: "/equipment", icon: "device" },
  { no: "04", title: l("类器官 CRO 服务", "Organoid CRO Services"), detail: l("从研究目标梳理到实验执行与结果交付，支持项目化的类器官研究协作。", "Project-based organoid research collaboration from study framing to execution and result delivery."), href: "/cro", icon: "path" },
];

export const capabilities = [
  [l("一体化路径", "Integrated pathway"), l("从耗材、芯片到设备与 CRO 服务，构建连续的研究支持链路。", "A connected research-support path spanning consumables, chips, equipment and CRO services.")],
  [l("定制化思维", "Customization mindset"), l("围绕研究问题与培养条件组织方案，而非以单一产品替代完整路径。", "Solutions are organized around research questions and culture conditions, not isolated products alone.")],
  [l("工程化协同", "Engineering collaboration"), l("将生物培养需求与微流控、设备和过程节点放进同一张实施蓝图。", "Biological culture needs, microfluidics, equipment and workflow milestones live in one implementation blueprint.")],
];

export const serviceCopy = {
  solutions: { eyebrow: l("01 / PRODUCT ECOSYSTEM", "01 / PRODUCT ECOSYSTEM"), title: l("让培养体系，\n从第一步就可连接。", "Build culture systems\nthat connect from day one."), body: l("围绕类器官培养场景，整合试剂耗材、培养逻辑与研究支持，帮助团队搭建连续、可迭代的实验基础。", "For organoid culture settings, we connect reagents, consumables, culture logic and research support into a continuous, adaptable experimental foundation."), image: ASSETS.solutions },
  chips: { eyebrow: l("02 / MICROPHYSIOLOGICAL DESIGN", "02 / MICROPHYSIOLOGICAL DESIGN"), title: l("以类器官为核心，\n重构复杂生命研究体系。", "Centered on organoids,\nreimagining complex life research systems."), body: l("从芯片结构到培养需求与应用场景，类器官芯片和个性化定制服务帮助研究设计获得更清晰的落点。", "From chip architecture to culture requirements and application settings, organoid-on-chip and custom concepts bring sharper focus to study design."), image: ASSETS.chips },
  equipment: { eyebrow: l("03 / PRECISION SUPPORT", "03 / PRECISION SUPPORT"), title: l("让每一次培养，\n被稳定地看见。", "Make every culture\nreliably observable."), body: l("配套设备连接培养、观察与分析的关键节点，为类器官研究流程提供更清晰的操作界面。", "Supporting equipment connects critical culture, observation and analysis stages with a clearer operational interface."), image: ASSETS.equipment },
  cro: { eyebrow: l("04 / COLLABORATIVE RESEARCH", "04 / COLLABORATIVE RESEARCH"), title: l("从研究意图，\n走向可交付的证据。", "Move from research intent\ntoward deliverable evidence."), body: l("类器官 CRO 服务围绕项目目标、实验执行与结果整理开展协作，帮助研究路径保持透明与可追溯。", "Organoid CRO services align project objectives, experimental execution and result organization for transparent, traceable collaboration."), image: ASSETS.cro },
};
