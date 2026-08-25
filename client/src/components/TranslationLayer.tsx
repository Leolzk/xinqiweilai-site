// @ts-nocheck
/** 双语文本层：保留每个文本节点原始中文，在语言切换时替换为经人工编写的专业英文，不改动字体。 */
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const translation: Record<string, string> = {
  "芯启蔚来": "FUTURE MIND", "官网首页": "HOME", "AI 智能平台": "AI PLATFORM", "整体解决方案": "INTEGRATED SOLUTIONS", "产品与服务": "PRODUCTS & SERVICES", "关于芯启蔚来": "ABOUT FUTURE MIND", "规划方案": "PLAN A SOLUTION", "启心铭志，引动未来!": "Unlock your mind, open your future!", "关注公众号": "FOLLOW US", "公众号": "WECHAT", "点击页面开始播放": "Click to start music", "点击进入": "ENTER", "让生命信号": "Let life signals", "开始连接。": "connect.", "模型 · 芯片 · 数据 · 证据": "MODELS · CHIPS · DATA · EVIDENCE", "将人源生物学模型与AI工作流组织为一套可读取的实验基础设施。": "Organize human-relevant biological models and AI workflows into readable experimental infrastructure.", "FUTURE MIND BIOTECHNOLOGY": "FUTURE MIND BIOTECHNOLOGY", "把人源生物学": "Bring human-relevant biology", "带入每一次决策。": "into every decision.", "从类器官培养体系、器官芯片定制到实验自动化与专家协作，我们为科研、药物研发和转化医学团队建立可扩展的工作基础。": "From organoid culture systems and custom organ chips to laboratory automation and expert collaboration, we build scalable foundations for research, drug discovery, and translational medicine teams.", "探索整体方案": "EXPLORE SOLUTIONS", "查看技术路径": "VIEW WORKFLOW", "让每一个模型，": "Let every model", "连接到": "connect to", "下一步证据。": "the next piece of evidence.", "类器官不是孤立的实验对象。源境把培养条件、芯片微环境、设备工作流和项目协作放进同一个解决方案中，为不同阶段的研究目标提供连续支持。": "Organoids are not isolated experimental objects. We connect culture conditions, chip microenvironments, equipment workflows, and project collaboration into a continuous solution for each research stage.", "四个模块，": "Four modules.", "一条完整路径。": "One complete pathway.", "模块可独立启用，也可围绕一个具体的组织模型、疾病方向或筛选目标协同配置。": "Each module can stand alone or be configured together around a specific tissue model, disease area, or screening objective.", "试剂与耗材": "REAGENTS & CONSUMABLES", "围绕建模、扩增、传代、冻存和分析所需的培养体系，构建稳定、可追溯的实验起点。": "Build a stable, traceable experimental starting point around culture systems for modeling, expansion, passaging, cryopreservation, and analysis.", "从基质、培养基到定制化配套方案": "From matrices and media to tailored support packages", "类器官芯片与定制": "ORGANOID CHIPS & CUSTOMIZATION", "将类器官模型与微环境控制能力整合，让流体、界面与组织行为在可编程尺度上协同。": "Integrate organoid models with microenvironment control so flow, interfaces, and tissue behavior work together at a programmable scale.", "芯片设计、模型适配与功能模块定制": "Chip design, model adaptation, and functional module customization", "配套设备": "LAB EQUIPMENT", "面向日常培养、成像、环境控制与批次管理的设备配置，帮助团队把复杂流程沉淀为标准。": "Equipment configurations for culture, imaging, environmental control, and batch management help teams standardize complex procedures.", "培养、监测、液体处理与工作流集成": "Culture, monitoring, liquid handling, and workflow integration", "类器官 CRO 服务": "ORGANOID CRO SERVICE", "以项目化协作连接模型建立、质控路径与结果解读，并为每个关键节点建立共同语言。": "Project-based collaboration connects model establishment, quality pathways, and results interpretation with a shared language at every critical node.", "面向研究目标的项目协同服务": "Research-objective-driven project collaboration", "让微环境": "Make microenvironments", "可被设计。": "designable.", "当类器官进入芯片，持续流动、界面分隔与多参数控制得以汇合。我们把定制能力放在模型需求之后，而不是把模型塞进固定的设备逻辑中。": "When organoids enter a chip, continuous flow, interface separation, and multi-parameter control converge. We place customization after model needs—not models inside fixed device logic.", "沟通芯片定制需求": "DISCUSS CHIP CUSTOMIZATION", "把复杂实验": "Turn complex experiments", "转化为": "into", "可执行的系统。": "executable systems.", "从日常培养到关键节点的监测，设备与工作流程的价值在于减少不确定性，让团队把精力留给真正需要判断的问题。": "From daily culture to critical monitoring points, equipment and workflows reduce uncertainty so teams can focus on questions that truly require judgment.", "培养与环境控制": "Culture & environmental control", "支持稳定、连续的类器官培养节奏。": "Support stable, continuous organoid culture.", "过程与结果观察": "Process & outcome observation", "让重要状态在正确的节点被看见。": "Make important states visible at the right checkpoints.", "项目化专家协作": "Project-based expert collaboration", "将方案、操作、质控与交付组织为共同语言。": "Organize plans, operations, quality control, and delivery through one shared language.", "启心铭志，": "Unlock your mind,", "引动未来。": "open your future.", "无论您正在搭建新的类器官模型，还是需要把已有系统推进到芯片、设备或项目交付阶段，芯启蔚来愿意从您的研究问题开始。": "Whether you are building a new organoid model or advancing an existing system toward chips, equipment, or project delivery, Future Mind starts with your research question.", "BUSINESS LINE": "BUSINESS LINE", "关注公众号": "FOLLOW WECHAT", "扫描二维码，获取类器官技术、产品服务与解决方案动态。": "Scan to follow organoid technology, products, and solution updates.", "AI × ORGANOID / SYSTEM MAP": "AI × ORGANOID / SYSTEM MAP", "让类器官系统": "Let organoid systems", "开始理解数据。": "understand data.", "芯启蔚来以AI为数据与工作流的连接层，围绕类器官模型、芯片微环境、自动化设备和过程读数，构建更连续、可观察、可协同的智能化基础设施。": "Future Mind uses AI as the connective layer for data and workflows, creating continuous, observable, collaborative infrastructure around organoid models, chip microenvironments, automation, and process readouts.", "进入智能架构": "ENTER AI ARCHITECTURE", "沟通平台需求": "DISCUSS PLATFORM NEEDS", "从数据进入，": "From data in,", "到洞见形成。": "to insight formed.", "智能化不是替代实验判断，而是让模型状态、微环境变化和关键读数在正确的节点被看见、被关联、被回溯。": "Intelligence does not replace experimental judgment; it makes model states, microenvironment changes, and critical readouts visible, connected, and traceable at the right moments.", "多模态数据接入": "MULTI-MODAL DATA INPUT", "将图像、培养记录、芯片参数与实验读数组织为可追溯的数据层，为后续分析建立统一上下文。": "Organize images, culture records, chip parameters, and experimental readouts into a traceable data layer with a unified context for analysis.", "模型识别与分析": "MODEL RECOGNITION & ANALYSIS", "围绕形态、过程与读数构建可复核的分析路径，帮助团队从高维实验信号中定位关键观察点。": "Build reviewable analysis paths around morphology, process, and readouts to locate key observations in high-dimensional experimental signals.", "自动化流程协同": "AUTOMATED WORKFLOW COORDINATION", "把培养、监测、数据归档和任务节点连接到同一工作流，减少信息断点并提升协同效率。": "Connect culture, monitoring, data archiving, and task nodes in one workflow to reduce information gaps and improve coordination.", "证据化决策工作台": "EVIDENCE DECISION WORKBENCH", "以模型、数据和过程记录为依据形成可回溯的项目视图，支持科研与转化团队的下一步判断。": "Build traceable project views from models, data, and process records to support the next decision for research and translation teams.", "让每一次操作，": "Let every operation", "留下": "leave", "可被理解的路径。": "a path that can be understood.", "当数据、设备与人员协作遵循同一套上下文，AI才有机会成为真正的实验室伙伴。我们从具体的模型与工作流出发，协同定义适合团队的智能化路径。": "When data, equipment, and people work within one shared context, AI can become a genuine laboratory partner. We start from concrete models and workflows to define the right intelligent path together.", "为您的类器官工作流，": "For your organoid workflow,", "建立AI连接层。": "build an AI connection layer.", "从模型建立，": "From model establishment,", "到下一步证据。": "to the next evidence.", "芯启蔚来围绕类器官研发的实际节点，组织试剂耗材、芯片定制、配套设备、AI智能化能力与项目协作，让每一个模块都连接到同一条实验路径。": "Future Mind organizes reagents, chip customization, lab equipment, AI capabilities, and project collaboration around real organoid R&D nodes so every module connects to one experimental pathway.", "不是四项产品，": "Not four products,", "而是": "but", "一条工作流。": "one workflow.", "每一个阶段都可以独立启用，也可以被组织为一个连续的整体解决方案。": "Every stage can be used independently or organized into one continuous integrated solution.", "模型基础": "MODEL FOUNDATION", "以适合研究目标的培养体系、试剂耗材与过程条件，为类器官建模建立一致的实验起点。": "Establish a consistent experimental starting point for organoid modeling with culture systems, reagents, consumables, and process conditions suited to the research objective.", "微环境设计": "MICROENVIRONMENT DESIGN", "把类器官模型与微流控芯片、界面和动态培养条件相连接，形成面向功能观察的可控微环境。": "Connect organoid models with microfluidic chips, interfaces, and dynamic culture conditions to create controllable microenvironments for functional observation.", "系统化运行": "SYSTEM OPERATIONS", "围绕培养、成像、监测与数据归档的关键节点配置设备和流程，让复杂操作沉淀为稳定运行能力。": "Configure equipment and procedures around culture, imaging, monitoring, and archiving checkpoints to turn complex operations into stable capability.", "专家协同交付": "EXPERT COLLABORATION", "以项目为单位组织方案、操作、质控和结果解读，让模型、设备和数据在同一交付语境中协同。": "Organize plans, operations, quality control, and interpretation by project so models, equipment, and data collaborate within one delivery context.", "让AI参与连接，": "Let AI connect,", "让证据回到决策。": "and bring evidence back to decisions.", "AI智能化不是独立的“功能岛”，而是贯穿模型状态、设备读数、过程数据和协作节点的连接层。它让团队能够在复杂的实验推进中保留清晰的上下文。": "AI intelligence is not an isolated feature island; it is the connective layer across model state, equipment readouts, process data, and collaboration nodes. It keeps context clear through complex experimental progress.", "查看AI智能平台": "VIEW AI PLATFORM", "把所需能力，": "Organize the capabilities", "组织成系统。": "you need into a system.", "芯启蔚来的产品与服务以研发流程为单位进行组合。您可以从单一模块开始，也可以围绕实际项目建立一套完整的类器官基础设施。": "Future Mind combines products and services around R&D workflows. Start from one module or build a complete organoid infrastructure around a real project.", "从基础工具，": "From foundational tools,", "到": "to", "智能化协同。": "intelligent coordination.", "以下目录用于帮助团队快速定位需要讨论的能力模块；具体配置将始终回到您的模型、流程和研究目标。": "This catalog helps teams identify capability modules for discussion; every configuration returns to your model, workflow, and research objective.", "类器官试剂与耗材": "ORGANOID REAGENTS & CONSUMABLES", "类器官芯片与定制": "ORGANOID CHIPS & CUSTOMIZATION", "类器官配套设备": "ORGANOID LAB EQUIPMENT", "AI智能化平台": "AI INTELLIGENCE PLATFORM", "类器官CRO服务": "ORGANOID CRO SERVICE", "定制整合服务": "CUSTOM INTEGRATION SERVICE", "没有两套类器官工作流，": "No two organoid workflows are", "完全相同。": "exactly alike.", "关于": "ABOUT", "芯启蔚来生物科技(上海)有限公司": "Future Mind Biotechnology (Shanghai) Co., Ltd.", "致力于类器官整体解决方案的建设，以试剂耗材、芯片定制、配套设备、AI智能化与项目协同服务，连接生命科学研究中的关键节点。": "is dedicated to integrated organoid solutions, connecting critical life-science research nodes through reagents, chip customization, equipment, AI intelligence, and project collaboration.", "从一次交流，": "From one conversation,", "开始一条路径。": "begin a pathway.", "芯启蔚来公众号": "Future Mind WeChat", "扫描二维码，关注类器官技术、产品服务与解决方案动态。": "Scan to follow updates on organoid technology, products, and solutions."
};

Object.assign(translation, {
  "类器官不是孤立的实验对象。芯启蔚来把培养条件、芯片微环境、设备工作流和项目协作放进同一个解决方案中，为不同阶段的研究目标提供连续支持。": "Organoids are not isolated experimental objects. Future Mind brings culture conditions, chip microenvironments, equipment workflows, and project collaboration into one continuous solution for each research stage.",
  "网站正在升级，还在完善中，敬请期待……": "Website upgrades are in progress. More to come.",
  "类器官CRO服务": "ORGANOID CRO SERVICE",
  "模型 · 芯片 · 数据 · 设备 · 技术": "MODELS · CHIPS · DATA · EQUIPMENT · TECHNOLOGY",
  "将模型、微环境与读数路径组织为一套可持续演进的生命科学系统。": "Organize models, microenvironments, and readout pathways into an evolving life-science system.",
  "扫描二维码，获取类器官技术、产品服务与解决方案动态。": "Scan to receive updates on organoid technology, products, and integrated solutions.",
  "培养体系": "CULTURE SYSTEMS",
  "试剂耗材": "REAGENTS & CONSUMABLES",
  "模型建立": "MODEL ESTABLISHMENT",
  "类器官芯片": "ORGANOID CHIPS",
  "定制开发": "CUSTOM DEVELOPMENT",
  "多参数控制": "MULTI-PARAMETER CONTROL",
  "自动化协同": "AUTOMATION COORDINATION",
  "过程监测": "PROCESS MONITORING",
  "CRO服务": "CRO SERVICE",
  "项目协作": "PROJECT COLLABORATION",
  "结果解读": "RESULTS INTERPRETATION",
  "从您的研究问题开始，": "Start with your research question,",
  "组织一条完整路径。": "and organize a complete pathway.",
  "发起技术交流": "START A TECHNICAL CONVERSATION",
  "支持模型建立、维持、扩增、传代、冻存和分析等实验节点的培养基础。": "Culture foundations supporting model establishment, maintenance, expansion, passaging, cryopreservation, and analysis.",
  "培养基与补充体系": "MEDIA & SUPPLEMENT SYSTEMS",
  "细胞外基质与相关耗材": "EXTRACELLULAR MATRIX & CONSUMABLES",
  "建模与质控配套": "MODEL BUILDING & QC SUPPORT",
  "咨询此模块": "DISCUSS THIS MODULE",
  "基于模型需求设计芯片结构、培养腔体、流体路径和应用场景的组合方案。": "Design chip architectures, culture chambers, flow paths, and application configurations around model requirements.",
  "微流控类器官芯片": "MICROFLUIDIC ORGANOID CHIPS",
  "芯片模型适配": "CHIP-TO-MODEL ADAPTATION",
  "定制化功能模块": "CUSTOM FUNCTIONAL MODULES",
  "为稳定培养、过程观察、环境控制和实验室协同配置基础设备与运行模块。": "Configure equipment and operating modules for stable culture, process observation, environmental control, and laboratory coordination.",
  "图像与状态观察": "IMAGING & STATE OBSERVATION",
  "液体处理与工作站": "LIQUID HANDLING & WORKSTATIONS",
  "把数据、模型、过程和设备读数接入同一智能化语境，形成可回溯的工作流视图。": "Bring data, models, processes, and equipment readouts into one intelligent context to create traceable workflow views.",
  "过程分析与模型识别": "PROCESS ANALYTICS & MODEL RECOGNITION",
  "工作流协同": "WORKFLOW COORDINATION",
  "面向具体研究任务的项目化协同，连接方案设计、流程搭建、质控和结果解读。": "Project collaboration for specific research tasks, connecting solution design, workflow setup, quality control, and results interpretation.",
  "技术方案协同": "TECHNICAL SOLUTION COLLABORATION",
  "项目节点管理": "PROJECT MILESTONE MANAGEMENT",
  "结果解读支持": "RESULTS INTERPRETATION SUPPORT",
  "根据组织模型、疾病方向、研发阶段或实验室条件，组织一体化的配置路径。": "Build integrated configuration paths around tissue models, disease areas, R&D stages, or laboratory conditions.",
  "模型与场景评估": "MODEL & SCENARIO ASSESSMENT",
  "模块整合建议": "MODULE INTEGRATION ADVICE",
  "交付路径设计": "DELIVERY PATHWAY DESIGN"
  ,"芯启蔚来生物科技(上海)有限公司致力于类器官整体解决方案的建设，以试剂耗材、芯片定制、配套设备、AI智能化与项目协同服务，连接生命科学研究中的关键节点。": "Future Mind Biotechnology (Shanghai) Co., Ltd. is dedicated to integrated organoid solutions, connecting critical life-science research nodes through reagents, chip customization, equipment, AI intelligence, and project collaboration."
  ,"我们相信，类器官技术的价值在于更贴近人源生物学的观察与协同。芯启蔚来希望以系统化的技术基础设施，帮助团队把复杂的探索推进为可被组织、理解和沟通的路径。": "We believe organoid technology matters because it enables observation and collaboration closer to human biology. Future Mind provides systematic technical infrastructure to turn complex exploration into pathways teams can organize, understand, and communicate."
});

function localized(original: string, language: "zh" | "en") {
  if (language === "zh") return original;
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  const clean = original.trim();
  return `${leading}${translation[clean] ?? clean}${trailing}`;
}

export function TranslationLayer() {
  const { language } = useLanguage();
  const [location] = useLocation();
  const originals = useRef(new WeakMap<Text, string>());

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    const apply = () => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let node: Node | null;
      while ((node = walker.nextNode())) nodes.push(node as Text);
      nodes.forEach((textNode) => {
        const parent = textNode.parentElement;
        if (!parent || parent.closest("script,style,textarea,code")) return;
        const original = originals.current.get(textNode) ?? textNode.nodeValue ?? "";
        if (!original.trim()) return;
        if (!originals.current.has(textNode)) originals.current.set(textNode, original);
        textNode.nodeValue = localized(original, language);
      });
    };
    const frame = requestAnimationFrame(apply);
    const observer = new MutationObserver(() => requestAnimationFrame(apply));
    observer.observe(root, { childList: true, subtree: true });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [language, location]);
  return null;
}
