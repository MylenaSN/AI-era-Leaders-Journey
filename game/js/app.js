import { LAB_DELIVERABLES, labPersona, labSessionTitle } from "../content/lab-deliverables.js";

export function startJornada(cfg = {}) {
  const MAP_ISLANDS = cfg.islands || [];
  const KEY = "aiel-cofre-v4";
  const FILES = {
    1: { a2: "S01-A2-gantt.md", a3: "S01-A3-arena.md" },
    2: { a2: "S02-A2-a3.md", a3: "S02-A3-project.md" },
    3: { a2: "S03-A2-hierarquia.md", a3: "S03-A3-hierarquia.md" },
    4: { a2: "S04-A2-okr.md", a3: "S04-A3-okr.md" },
    5: { a2: "S05-A2-pbb.md", a3: "S05-A3-prototipo.md" },
    6: { a2: "S06-A2-invest.md", a3: "S06-A3-invest.md" },
    7: { a2: "S07-A2-topologia.md", a3: "S07-A3-topologia.md" },
    8: { a2: "S08-A2-dashboard.md", a3: "S08-A3-fluxo.md" },
    9: { a2: "S09-A2-ritmos.md", a3: "S09-A3-board.md" },
    10: { a2: "S10-A2-finops.md", a3: "S10-A3-finops.md" },
    11: { a2: "S11-A2-mapa-hibrido.md", a3: "S11-A3-esteira.md" },
    12: { a2: "S12-A2-persona.md", a3: "S12-A3-agent-files.md" },
    13: { a2: "S13-A2-spec.md", a3: "S13-A3-maestro.md" },
    14: { a2: "S14-A2-kb.md", a3: "S14-A3-eval.md" },
    15: { a2: "S15-A2-timeline.md", a3: "S15-A3-pdi.md" },
    16: { a2: "S16-A2-pi.md", a3: "S16-A3-fechamento.md" },
    17: { a2: "B04-A2-medida.md", a3: "B04-A3-lingua.md" }
  };
  const WEEKS = [
    { n: 1, w: 1, t: "Chão do orquestrador" },
    { n: 2, w: 1, t: "5ª Revolução Industrial" },
    { n: 3, w: 2, t: "Valor, não volume" },
    { n: 4, w: 2, t: "OKR com baseline" },
    { n: 5, w: 2, t: "Do problema ao produto" },
    { n: 6, w: 2, t: "Story Mapping + INVEST" },
    { n: 7, w: 3, t: "Fronteiras" },
    { n: 8, w: 3, t: "Fluxo visível" },
    { n: 9, w: 3, t: "Ritmo, não rito" },
    { n: 10, w: 3, t: "Teto assinado" },
    { n: 11, w: 4, t: "Papel, não marca" },
    { n: 12, w: 4, t: "Arquivo, não chatbot" },
    { n: 13, w: 4, t: "Spec antes do código" },
    { n: 14, w: 4, t: "Sobe com eval" },
    { n: 15, w: 5, t: "Suas categorias" },
    { n: 16, w: 5, t: "Decisão offline" },
    { n: 17, w: 4, t: "Bônus · medida da entrega", bonus: true }
  ];
  const WAVES = { 1: "Pré-Voo", 2: "Produto", 3: "Delivery", 4: "Times Híbridos", 5: "AI-era Homeostase" };
  const WAVE_META = {
    1: { pilar: "Pré-Voo", subtitle: "O Despertar", artefato: "" },
    2: { pilar: "Product Management", subtitle: "O Mapa de Valor", artefato: "" },
    3: { pilar: "Tech Delivery", subtitle: "A Engenharia do Ciclo", artefato: "Métricas de fluxo (apoio)" },
    4: { pilar: "Times Híbridos", subtitle: "Humano & IA no loop", artefato: "Workflow Agêntico" },
    5: { pilar: "AI-era Homeostase", subtitle: "Seu potencial humano", artefato: "PDI Advisor" }
  };
  const LEADER_CALL = {
    1: "Você não opera a máquina. Você desenha o chão.",
    2: "Você não entrega volume. Você entrega valor.",
    3: "Você não reza pelo ciclo. Você engenharia o ritmo.",
    4: "Você não perde o time. Você orquestra humano & IA.",
    5: "Você não some na IA. Você lidera a era."
  };
  const WAVE_LINE = {
    1: "Antes de voar, identifique seu chão",
    2: "O Mapa de Valor",
    3: "A Engenharia do Ciclo",
    4: "Times Híbridos: Humano & IA",
    5: "O real potencial humano"
  };
  const SEMANA_TRILHA = {
    1: "Os líderes e suas habilidades fundamentais na era da IA",
    2: "Como sobreviver à 5ª Revolução Industrial",
    3: "Outcomes vs. Outputs: o que o seu time realmente entrega?",
    4: "Discovery Estratégico: OKRs e o Backlog que Gera Valor",
    5: "Do Problema ao Produto",
    6: "Hierarquia de Backlog e a Esteira Upstream com IA",
    7: "Modelos Mentais importantes para a Liderança Moderna",
    8: "Kanban Sistêmico e Métricas de Fluxo",
    9: "Engenharia de Ciclos",
    10: "FinOps e a Visão Econômica do Desenvolvimento",
    11: "Liderança Holárquica: o ecossistema Humano & IA",
    12: "Design de Agents: LangChain, LangGraph, Tools, Skills, Hooks e Personas",
    13: "Orquestração Agêntica: construindo o maestro do seu time",
    14: "A Esteira Agêntica Inteligente: RAG, MCP, Subagents e Evals",
    15: "Consolidação do Líder Transformador da Era IA",
    16: "O real potencial humano na era da IA",
    17: "Medida da entrega — além do fluxo"
  };

  function weekTitle(n) {
    const label = SEMANA_TRILHA[n] || WEEKS[n - 1].t;
    if (isBonus(n)) return "Plus — " + label;
    return "Semana " + String(n).padStart(2, "0") + " — " + label;
  }

  function labOf() { return LABS[week]; }

  function labEtapas(lab) {
    if (lab.etapas && lab.etapas.length) return lab.etapas;
    const out = [];
    const pushEtapa = (tools) => {
      const clean = tools.filter((t) => t && t.label && t.href);
      if (clean.length) out.push({ tools: clean });
    };
    const alt = String(lab.alt || "").trim();
    const hasAlt = alt && alt !== "—";
    const tool = String(lab.tool || "").trim();
    if (hasAlt && lab.href2) {
      pushEtapa([{ label: toolShortName(tool), href: lab.href }, { label: toolShortName(alt), href: lab.href2 }]);
      return out;
    }
    if (lab.href2 && /\s+ou\s+/i.test(tool)) {
      const parts = tool.split(/\s+ou\s+/i).map((s) => s.trim()).filter(Boolean);
      if (parts.length === 2) {
        pushEtapa([
          { label: toolShortName(parts[0]), href: lab.href },
          { label: toolShortName(parts[1]), href: lab.href2 },
        ]);
        return out;
      }
    }
    pushEtapa([{ label: toolShortName(tool), href: lab.href }]);
    if (lab.href2) pushEtapa([{ label: toolShortName(alt || "Alternativa"), href: lab.href2 }]);
    return out;
  }

  function toolShortName(raw) {
    let s = String(raw || "").trim();
    if (!s || s === "—") return s;
    s = s.split(/\s+ou\s+/i)[0].trim();
    s = s.split(/\s*\+\s*/)[0].trim();
    s = s.split(/\s*\/\s*/)[0].trim();
    s = s.split(/\s*·\s*/)[0].trim();
    s = s.replace(/\s*\(.*?\)\s*/g, " ").trim();
    s = s.replace(/\s*(free|cloud|Hobby|Artifact|Project|Gem|juiz|Sheets)\s*/gi, " ").trim();
    s = s.replace(/\s+/g, " ").trim();
    if (/^gpt$/i.test(s)) return "GPT";
    if (/^gemini$/i.test(s)) return "Gemini";
    if (/^claude$/i.test(s)) return "Claude";
    if (/^cursor$/i.test(s)) return "Cursor";
    if (/^kiro$/i.test(s)) return "Kiro";
    if (/^n8n/i.test(s)) return "n8n";
    if (/^zapier/i.test(s)) return "Zapier";
    if (/^napkin/i.test(s)) return "Napkin";
    if (/^lovable/i.test(s)) return "Lovable";
    if (/^notebooklm/i.test(s)) return "NotebookLM";
    if (/^gamma/i.test(s)) return "Gamma";
    if (/^copilot/i.test(s)) return "Copilot";
    if (/^promptfoo/i.test(s)) return "Promptfoo";
    if (/^eraser/i.test(s)) return "Eraser";
    if (/^whimsical/i.test(s)) return "Whimsical";
    if (/^chatgpt/i.test(s)) return "ChatGPT";
    if (/^v0/i.test(s)) return "v0";
    return s;
  }

  function etapaHeading(i, total) {
    if (total === 1) return "Etapa única";
    return "Etapa " + (i + 1);
  }

  function labToolsSummary(lab) {
    return labEtapas(lab)
      .flatMap((e) => e.tools.map((t) => t.label))
      .join(" · ");
  }

  function labToolsHtml(lab, vertical) {
    const etapas = labEtapas(lab);
    const paired = etapas.length > 1;
    const cls = "lab-tools" + (vertical ? " is-vertical" : "");
    let html = '<div class="' + cls + '">';
    if (paired) {
      html += '<div class="lab-tools-block is-paired"><div class="lab-tools-group">';
      etapas.forEach((etapa, ei) => {
        html += '<div class="lab-etapa">';
        html += '<span class="lab-etapa-label">' + etapaHeading(ei, etapas.length) + "</span>";
        html += '<div class="lab-etapa-btns">';
        (etapa.tools || []).forEach((t) => {
          html += '<a class="lab-tool" href="' + t.href + '" target="_blank" rel="noopener noreferrer">' + t.label + "</a>";
        });
        html += "</div></div>";
      });
      html += "</div></div>";
    } else {
      const tools = (etapas[0] && etapas[0].tools) ? etapas[0].tools : [];
      if (tools.length) {
        html += '<div class="lab-tools-block is-solo is-tools-stack">';
        html += '<span class="lab-etapa-label">Etapa única</span>';
        html += '<div class="lab-etapa-btns">';
        tools.forEach((t) => {
          html += '<a class="lab-tool" href="' + t.href + '" target="_blank" rel="noopener noreferrer">' + t.label + "</a>";
        });
        html += "</div></div>";
      }
    }
    html += "</div>";
    return html;
  }

  function islandState(g) {
    const won = wonSet();
    const color = WAVE_COLOR[g.wave];
    if (g.kind === "setup") {
      return { open: true, done: save.setupS01, here: needsSetupPrompt(), color };
    }
    return {
      open: unlocked(g.n),
      done: won.has(g.n),
      here: unlocked(g.n) && !won.has(g.n),
      color,
    };
  }

  function islandPoint(m, item) {
    const ref = item.refWeek ?? 1;
    const node = weekNode(m, ref);
    const pad = Math.max(44, 52 * m.s);
    const lane = item.lane || "margin";
    let x;
    if (lane === "right") x = m.w - m.padR - pad * 0.55;
    else if (lane === "left") x = m.padL + pad;
    else {
      const onRight = node.x > m.cx;
      x = onRight ? m.padL + pad : m.w - m.padR - pad;
    }
    let y = node.y + (item.dy || 0) * m.s;
    y = Math.max(m.padT + pad, Math.min(m.bot - pad, y));
    return { x, y };
  }

  function orbitHtml(g, st) {
    let cls = "map-orbit";
    if (st.done) cls += " on";
    if (st.here) cls += " next";
    if (g.kind === "setup" && needsSetupPrompt()) cls += " needs-attn";
    const tip = g.title + (g.sub ? " — " + g.sub : "");
    return '<button type="button" class="' + cls + '" data-gadget="' + g.id + '"'
      + (st.open ? "" : " disabled")
      + ' style="--gadget-color:' + st.color + '" title="' + tip + '" aria-label="' + tip + '">'
      + '<span class="orbit-icon" aria-hidden="true">' + g.icon + "</span>"
      + "</button>"
      + '<span class="orbit-caption">' + g.shortLabel + "</span>";
  }

  function bindMapGadgets(layer) {
    if (!layer || layer.dataset.bound === "1") return;
    layer.dataset.bound = "1";
    layer.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-gadget]");
      if (!btn || btn.disabled) return;
      ev.preventDefault();
      ev.stopPropagation();
      const id = btn.getAttribute("data-gadget");
      const g = MAP_ISLANDS.find((x) => x.id === id);
      if (!g) return;
      if (g.kind === "setup") {
        openMapSetup();
        return;
      }
      if (!unlocked(g.n)) {
        toast("Plus bloqueado — conclua FinOps na trilha", true);
        return;
      }
      enterWeek(g.n);
    });
  }

  function renderMapGadgets() {
    const layer = document.getElementById("map-gadgets");
    if (!layer) return;
    bindMapGadgets(layer);
    if (mode !== "map") { layer.innerHTML = ""; return; }
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (ch < 8 || cw < 8) return;
    const m = mapMetrics(cw, ch);
    layer.innerHTML = MAP_ISLANDS.map((g) => {
      const pt = islandPoint(m, g);
      const st = islandState(g);
      return '<div class="orbit-wrap" style="left:' + pt.x + "px;top:" + pt.y + 'px">'
        + orbitHtml(g, st)
        + "</div>";
    }).join("");
  }

  function openMapSetup() {
    closeCofre();
    openDock("setup");
    syncHud();
    toast("Setup — organize " + LEADER_DIR + " no Drive");
  }

  function bindScoreButtons() {
    document.querySelectorAll(".nota-score-block[data-n]").forEach((b) => {
      b.onclick = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        applyScore(Number(b.getAttribute("data-n")));
      };
    });
  }

  function closeNotaDialog() {
    const dlg = document.getElementById("nota-dialog");
    if (dlg && dlg.open) dlg.close();
  }

  function openNotaDialog() {
    if (phase !== "nota" || mode !== "level") return;
    const dlg = document.getElementById("nota-dialog");
    if (!dlg) return;
    const lab = labOf();
    const lead = document.getElementById("nota-lead");
    if (lead) {
      const meta = LAB_DELIVERABLES[week] || {};
      lead.textContent = phraseLines(meta.deliverable || lab.out);
    }
    const box = document.getElementById("nota-scores");
    if (box) box.innerHTML = scoreScaleHtml();
    bindScoreButtons();
    if (!dlg.open) dlg.showModal();
  }

  const PILL_STEPS = [
    { id: "conceito", label: "Conceito" },
    { id: "homework", label: "Homework Prático" },
    { id: "lab_ia", label: "Lab IA" },
  ];

  function pillIndexForPhase(ph) {
    if (ph === "conceito") return 0;
    if (ph === "raiz") return 1;
    if (ph === "lab" || ph === "setup") return 2;
    if (ph === "nota") return 3;
    return 0;
  }

  function lessonStepLabel(ph) {
    const steps = ["Conceito", "Homework", "Lab IA", "Fechamento"];
    const idx = pillIndexForPhase(ph);
    const n = Math.min(idx + 1, steps.length);
    return steps[Math.min(idx, steps.length - 1)] + " · " + n + "/4";
  }

  function wavesWonCount() {
    const won = wonSet();
    let n = 0;
    for (let w = 1; w <= 5; w++) {
      if (IN_WAVE[w].every((wk) => won.has(wk))) n++;
    }
    return n;
  }

  const COURSE_NAME = "AI-era Leaders";
  const LEADER_DIR = "AI-era-Leaders-Jornada";
  const COFRE_DIR = LEADER_DIR + "/";
  const IN_WAVE = { 1: [1, 2], 2: [3, 4, 5, 6], 3: [7, 8, 9, 10], 4: [11, 12, 13, 14], 5: [15, 16] };
  const WAVE_DIR = { 1: "01-pre-voo", 2: "02-product", 3: "03-delivery", 4: "04-hibridos", 5: "05-homeostase" };
  let WAVE_COLOR = { 1: "#3B67B0", 2: "#2BC0B4", 3: "#E88F2B", 4: "#5B2D8E", 5: "#C83E74" };

  function phraseLines(s) {
    if (!s) return "";
    return String(s).replace(/\. +/g, ".\n").trim();
  }

  function applyBrand(cfg) {
    const root = document.documentElement;
    const c = cfg.cores || {};
    Object.keys(c).forEach((k) => root.style.setProperty("--" + k, c[k]));
    if (cfg.fontes) {
      if (cfg.fontes.titulo) root.style.setProperty("--font-title", cfg.fontes.titulo + ", sans-serif");
      if (cfg.fontes.corpo) root.style.setProperty("--font-body", cfg.fontes.corpo + ", sans-serif");
    }
    const brand = document.getElementById("brand-name");
    if (brand) brand.textContent = COURSE_NAME;
    if (cfg.waves) {
      WAVE_COLOR = {};
      Object.keys(cfg.waves).forEach((k) => { WAVE_COLOR[Number(k)] = cfg.waves[k]; });
    }
    paintWaveLabels();
    const bar = document.getElementById("assinatura");
    if (bar && cfg.assinatura && cfg.assinatura.length) {
      const n = cfg.assinatura.length - 1;
      bar.style.background = "linear-gradient(90deg, " + cfg.assinatura.map((hex, i) => hex + " " + Math.round((i / n) * 100) + "%").join(", ") + ")";
    }
  }

  function loadBrand() {
    return fetch("brand-config.json").then((r) => (r.ok ? r.json() : Promise.reject())).then(applyBrand).catch(() => {
      applyBrand({
        nome: "",
        cores: {},
        waves: WAVE_COLOR,
        assinatura: ["#5B2D8E", "#3B67B0", "#2BC0B4", "#C8D400", "#FFD700", "#E88F2B", "#C83E74"],
      });
    });
  }
  const LABS = {
    1: { autor:"Teo · prompt + gate", cap:"Arquivo com trava humana", tool:"ChatGPT free", alt:"Gemini", href:"https://chatgpt.com", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"ChatGPT", href:"https://chatgpt.com" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Mapa as-is dos 3 pilares + GATE HUMANO (rodar em GPT e Gemini)",
      casca:"# S01-A3-arena.md\n\n## Time\n(1 linha)\n\n## 3 linhas\n| Pilar | Dor (1 frase) | Fato do time |\n| Product |  |  |\n| Delivery |  |  |\n| Human & AI |  |  |\n\n## GATE HUMANO\n- PARA: (o que a IA está proibida de decidir)\n- QUEM: (cargo que autoriza)\n- SÓ DEPOIS: (o que pode acontecer após o sim)\n- FRASE DE TRAVA: Nenhuma ação deste mapa entra no calendário sem o sim de [QUEM].\n",
      prompt:"Gere o arquivo completo S01-A3-arena.md: time (1 linha), 3 linhas com dor + fato do Gantt, GATE HUMANO (PARA / QUEM / SÓ DEPOIS / frase de trava). Output = markdown pronto para salvar — não resuma em chat.",
      tips:["Dois outputs completos (GPT e Gemini) — compare os gates.","Formato quebrado ou ensaio: volte ao modelo de referência.","Um modelo só: a arena pede os dois para comparar."] },
    2: { autor:"Teo · contexto que fica", cap:"A3 vivo no Project", tool:"Claude Project", alt:"GPT Project / Gemini Gem", href:"https://claude.ai", href2:"https://chatgpt.com",
      etapas: [{ tools: [{ label:"Claude", href:"https://claude.ai" }, { label:"GPT", href:"https://chatgpt.com" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"A3 salvo no Project, não no chat avulso",
      prompt:"Cole o A3 da Aula 2 neste Project. Tarefa: reescreva só as contramedidas em duas colunas — kaizen | kaikaku — sem inventar causa. Cada linha precisa de evidência do A3. Se faltar fato, escreva HIPÓTESE.",
      tips:["Chat avulso esquece amanhã. Crie o Project.","A IA escolheu a contramedida: devolva o gate para você.","Kaikaku no lugar de kaizen: peça para justificar com o A3."] },
    3: { autor:"Wei · CoT", cap:"Diagrama da hierarquia", tool:"Claude ou GPT + mermaid", alt:"Napkin.ai (free)", href:"https://claude.ai", href2:"https://www.napkin.ai",
      etapas: [
        { tools: [{ label:"Claude", href:"https://claude.ai" }, { label:"GPT", href:"https://chatgpt.com" }] },
        { tools: [{ label:"Napkin", href:"https://www.napkin.ai" }] },
      ],
      out:"5 linhas Classe + raciocínio + evidência + 1 diagrama",
      prompt:"Mostre o RACIOCÍNIO da classe ANTES do rótulo.\nItens reais: [cole 5 entregas].\nPara cada: Output / Outcome / Impact + 1 frase de evidência. Recuse se inventar métrica.\nDepois: diagrama mermaid da Hierarquia de Valor da Aula 2.",
      tips:["Sem CoT visível a classe é chute.","Diagrama bonito sem as 5 linhas não fecha.","Métrica que o time não mediu = alucinação."] },
    4: { autor:"Ng · workflow", cap:"Gráfico / planilha", tool:"Gemini (Sheets)", alt:"GPT", href:"https://gemini.google.com", href2:"https://chatgpt.com",
      etapas: [{ tools: [{ label:"Gemini", href:"https://gemini.google.com" }, { label:"GPT", href:"https://chatgpt.com" }] }],
      out:"Síntese dos KRs com baseline que VOCÊ mediu",
      prompt:"Workflow: 1) li a planilha/baseline que eu colei 2) resumo 3) NÃO mudo o alvo.\nOKR da Aula 2: [cole]. Se KR sem baseline, marque INVÁLIDO. Gere um gráfico simples baseline→hoje→target.",
      tips:["Moonshot sem baseline. Cole o número medido.","A IA mudou o target: isso é gate seu.","Gráfico sem eixo com unidade não serve ao C-Level."] },
    5: { autor:"intenção → UI", cap:"Protótipo + imagem coesa", tool:"Lovable (free)", alt:"v0 · Designer/Gemini imagem", href:"https://lovable.dev", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"Lovable", href:"https://lovable.dev" }, { label:"v0", href:"https://v0.dev" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Link do protótipo da fatia IN + 1 imagem de jornada",
      prompt:"Gere um protótipo SÓ da fatia IN do PBB: [cole IN/OUT]. Não implemente OUT. Depois (Gemini/Designer): uma imagem da jornada da persona — mesmo traço, sem stock genérico. O MVP serve o OKR da S04 — se a vitrine não liga ao KR, recuse.",
      tips:["Markdown no chat não é protótipo. Precisa do link.","Imagem de banco de foto: peça consistência com a persona.","Tudo IN: volte ao OUT da Aula 2."] },
    6: { autor:"Husain · eval", cap:"Julgamento INVEST das USs", tool:"Custom GPT / Gem", alt:"Cursor no backlog.md", href:"https://chatgpt.com", href2:"https://cursor.com",
      etapas: [{ tools: [{ label:"GPT", href:"https://chatgpt.com" }, { label:"Gemini", href:"https://gemini.google.com" }, { label:"Cursor", href:"https://cursor.com" }] }],
      out:"Julgamento INVEST com recusas explícitas (não auto-nota 5/5)",
      prompt:"Revise 3 user stories da Aula 2 com INVEST (I=Independente · N=Negociável · V=Valiosa · E=Estimável · S=Small · T=Testável). Story fora do padrão precisa ser questionada — aponte o que falta e sugira ajuste. PROIBIDO dar 5/5 em story que você mesmo reescreveu sem um segundo olhar meu.",
      tips:["A IA se autoavaliou. Peça uma segunda revisão ou você recusa.","Sem story da Aula 2 a IA inventa backlog.","Use o prompt para educar o time — não precisa ser regra letra a letra no fluxo diário."] },
    7: { autor:"Lewis · RAG", cap:"Caderno + overview (áudio/vídeo)", tool:"NotebookLM (free)", alt:"Gemini com PDFs", href:"https://notebooklm.google.com", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"NotebookLM", href:"https://notebooklm.google.com" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Glossário com citação + 1 Audio/Video Overview",
      prompt:"Suba SÓ os artefatos da Aula 2 (mapa de topologia). Pergunte: liste 8–12 termos conflitantes COM citação do arquivo. Depois gere o Overview. Se não citar a fonte, o termo é alucinação.",
      tips:["Chat sem PDF = chute da web, não RAG.","Overview sem glossário citado é teatro.","Termo sem dono: volte ao mapa da Aula 2."] },
    8: { autor:"Anderson · fluxo", cap:"Dashboard Kanban + diagrama", tool:"Cursor Hobby", alt:"Copilot · mermaid no GPT", href:"https://cursor.com", href2:"https://github.com/features/copilot",
      etapas: [{ tools: [{ label:"Cursor", href:"https://cursor.com" }, { label:"Copilot", href:"https://github.com/features/copilot" }, { label:"GPT", href:"https://chatgpt.com" }] }],
      out:"Dashboard LT/CT/TH/WIP/CFD + diagrama mermaid do fluxo",
      prompt:"A partir do dashboard da Aula 2 [cole números que EU medi], monte S08-A3-fluxo.md com:\n1) Lead Time (LT), Cycle Time (CT), Throughput (TH), WIP e CFD explicados em linguagem do time.\n2) Lei de Little: LT ≈ WIP ÷ TH — onde está o alavancador?\n3) Diagrama mermaid do fluxo atual.\n4) (Apoio futuro) Rascunho de prompt agnóstico para 3 agents: Métricas de fluxo · Esteira híbrida · Advisor de liderança — cada um com persona/steering/skill, sem depender de ferramenta.\nUse só números do meu contexto. Não invente target externo.",
      tips:["LT = tempo total até entregar. CT = tempo em trabalho ativo. TH = itens/ período. WIP = em progresso. CFD = diagrama de fluxo acumulado.","Sem números da Aula 2 o dashboard é teatro.","Os 3 agents do curso são apoiadores — esta semana fecha o painel de fluxo."] },
    9: { autor:"ritmos + voto", cap:"Board + workspace no IDE", tool:"Cursor + Claude Artifact", alt:"Whimsical free → cola no Mural", href:"https://cursor.com", href2:"https://claude.ai",
      etapas: [
        { tools: [{ label:"Cursor", href:"https://cursor.com" }] },
        { tools: [{ label:"Claude", href:"https://claude.ai" }, { label:"Whimsical", href:"https://whimsical.com" }] },
      ],
      out:"Antes/depois de 1 ritmo em 03-delivery/S09/ + 1 pergunta de voto",
      prompt:"A partir da auditoria fica/sai/muda da Aula 2, desenhe um board (Agora / Proposta / Voto). Uma pergunta para Mentimeter. NÃO declare o ritmo vencedor.\nSalve o board em 03-delivery/S09/S09-A3-board.md — abra sua pasta " + LEADER_DIR + " no Cursor. Ciclo sem pasta no disco é rito.",
      tips:["Sem pergunta de voto a IA 'ganhou' sozinha.","Board sem a lista fica/sai/muda da Aula 2 é layout vazio.","Cola no Mural: o artefato precisa ser colável, não um ensaio."] },
    10: { autor:"Amodei · risco", cap:"Apresentação / PDF de 3 cenários", tool:"Gamma (free)", alt:"Gemini", href:"https://gamma.app", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"Gamma", href:"https://gamma.app" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Deck de 5 slides: conservador / base / agressivo + teto",
      prompt:"Gere apresentação curta com 3 ROIs a partir do Passaporte FinOps: [cole números]. O slide final é TETO ASSINADO POR HUMANO. Não recomende o agressivo. Console de cloud só em leitura.",
      tips:["Um único ROI 'o modelo disse'. Faltam 3.","Agressivo como único slide: esconde o conservador.","Sem teto assinado o C-Level compra teatro."] },
    11: { autor:"papel no loop", cap:"Esteira clássica vs GenAI", tool:"n8n cloud free ou Zapier free", alt:"Cursor numa etapa só", href:"https://n8n.io", href2:"https://cursor.com",
      etapas: [
        { tools: [{ label:"n8n", href:"https://n8n.io" }, { label:"Zapier", href:"https://zapier.com" }] },
        { tools: [{ label:"Cursor", href:"https://cursor.com" }] },
      ],
      out:"1 etapa acelerada + 1 etapa PROIBIDA para o agente",
      prompt:"Do mapa da Aula 2: escolha 1 nó para automação sem LLM (n8n ou Zapier) e 1 nó para Cursor/Copilot. Mostre os dois fluxos. Proibido agente em decisão de valor ou gate humano.",
      tips:["'Vamos usar o Cursor' sem nó: volte ao mapa.","Tudo no agente: falta a etapa sem GenAI.","Zapier no julgamento = gate furado."] },
    12: { autor:"Chase / Moura / Wang", cap:"Arquivos de agent", tool:"Cursor", alt:"Kiro", href:"https://cursor.com", href2:"https://kiro.dev",
      etapas: [{ tools: [{ label:"Cursor", href:"https://cursor.com" }, { label:"Kiro", href:"https://kiro.dev" }] }],
      out:"persona.md + steering.md + skill.md no disco",
      prompt:"A partir dos 3 blocos da Aula 2, gere os 3 arquivos no repo e um hook (evento→condição→gate). Chatbot Custom GPT sem arquivo NÃO conta. Inclua 3 proibições no steering.",
      tips:["Custom GPT sem pasta no git.","Falta o hook ligado ao gate da S11.","Persona sem proibição: o agent faz tudo."] },
    13: { autor:"Ng · spec-before-code", cap:"Diagrama + spec", tool:"Kiro", alt:"Cursor + Eraser/mermaid", href:"https://kiro.dev", href2:"https://www.eraser.io",
      etapas: [
        { tools: [{ label:"Kiro", href:"https://kiro.dev" }] },
        { tools: [{ label:"Cursor", href:"https://cursor.com" }, { label:"Eraser", href:"https://www.eraser.io" }] },
      ],
      out:"requirements → design (código opcional)",
      prompt:"Spec do maestro da Aula 2. Em Kiro (ou spec MD): requirements, design, gates. NÃO commitar código sem spec. Diagrama hierárquico input→roteamento→specialists→gate humano.",
      tips:["Código no primeiro commit: volte à spec.","Diagrama sem gate final humano.","Sem contratos de entrada/saída o maestro é um chat."] },
    14: { autor:"Lewis + Husain", cap:"RAG + eval (fine-tune só se RAG falhar)", tool:"Cursor + Sheets ou Promptfoo", alt:"NotebookLM na KB", href:"https://cursor.com", href2:"https://www.promptfoo.dev",
      etapas: [
        { tools: [{ label:"Cursor", href:"https://cursor.com" }] },
        { tools: [{ label:"Promptfoo", href:"https://www.promptfoo.dev" }, { label:"NotebookLM", href:"https://notebooklm.google.com" }] },
      ],
      out:"3 evals com limiar. Fine-tune NÃO é o default",
      prompt:"A KB da Aula 2 é a base (RAG). Escreva 3 casos de eval com limiar numérico. Sem limiar o workflow não promove.\nPergunta de líder: precisamos de fine-tune (AI Studio / AutoTrain) ou a KB resolve? Se a KB resolve, NÃO fine-tune.",
      tips:["'Funciona no chat' sem limiar.","Fine-tune pedido sem tentar RAG: Lewis primeiro.","Eval sem caso da KB é teste de teatro."] },
    15: { autor:"advisor próprio", cap:"Project do PDI", tool:"Claude Project / Custom GPT", alt:"Gemini Gem", href:"https://claude.ai", href2:"https://chatgpt.com",
      etapas: [{ tools: [{ label:"Claude", href:"https://claude.ai" }, { label:"GPT", href:"https://chatgpt.com" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Advisor que recusa CHA genérico",
      prompt:"Alimente o Project com a linha do tempo da Aula 2. Categorias = as MINHAS. Se eu pedir 'faz um PDI CHA', recuse e peça evidência da timeline. 1 gap SMART da quinzena.",
      tips:["Prompt avulso 'me dá um PDI'. Sem Project.","CHA genérico passou: o advisor não está ancorado.","Gap sem SMART: não fecha a quinzena."] },
    16: { autor:"Amodei · autoria", cap:"Overview do ano + decisão OFFLINE", tool:"NotebookLM", alt:"Gamma PDF do pacote", href:"https://notebooklm.google.com", href2:"https://gamma.app",
      etapas: [{ tools: [{ label:"NotebookLM", href:"https://notebooklm.google.com" }, { label:"Gamma", href:"https://gamma.app" }] }],
      out:"Video/Audio Overview + 1 decisão escrita sem LLM",
      prompt:"Suba o pacote do ano (A3, OKR, métricas de fluxo, PDI). Gere Overview. A ATA: uma decisão do ritual EU escrevo offline — o modelo não escolhe o ritual do time.",
      tips:["O modelo escolheu a decisão: apague e escreva à mão.","Overview sem fontes do pacote.","Sem cláusula de autoria o PI some."] },
    17: { autor:"Albrecht / COSMIC / Anderson (ponte)", cap:"Língua de tamanho para o C-Level", tool:"ChatGPT free", alt:"Gemini", href:"https://chatgpt.com", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"ChatGPT", href:"https://chatgpt.com" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"B04-A3-lingua.md — a IA estressa a unidade; não inventa PF",
      casca:"# B04-A2-medida.md\n\n## Time\n(1 linha)\n\n## O que o fluxo já diz\n- Lead time:\n- Cycle time:\n- Throughput:\n- WIP:\n\n## Lente deste ciclo (UMA)\nfuncional | técnica | qualitativa\n\n## Unidade\n\n## O que NÃO conta\n\n## Frase para o C-Level\n\n## Por que isso deixa o time puxar sem estimar o card\n",
      prompt:"Preencher B04-A3-lingua.md estressando a unidade que o time já escreveu na Aula 2 — sem inventar pontos de função, COSMIC ou LOC fora do bloco.\nFormato:\n# B04-A3-lingua.md\n## Lente (copiada da Aula 2)\n## O que inflaria esta unidade (3 tentações)\n## O que a diretoria entenderia errado\n## GATE HUMANO\n- PARA: a IA não troca a lente nem inventa contagem\n- QUEM: cargo que assina a língua do trimestre\n- SÓ DEPOIS:\n- FRASE DE TRAVA: Nenhuma contagem entra no comitê sem o sim de [QUEM].\nRegra: se o bloco da Aula 2 estiver vazio, PERGUNTE. Recuse velocity como tamanho.",
      tips:["A IA escolheu APF sozinha. Volte à lente do A2.","Número de PF sem inventário = alucinação.","Velocity no slide do C-Level: recuse."] }
  };

  const PLAY = {
    1: { metodo:"Gantt histórico × 3 pilares + baseline do time",
      a1:[
        { t: "As 5 revoluções", d: "Cada Revolução Industrial reestrutura o papel do líder — o trabalho não desaparece, muda de forma." },
        { t: "Era agêntica", d: "Na 5ª Revolução Industrial você orquestra sistemas híbridos — pessoas, agentes e ferramentas — em vez de operar a ferramenta sozinho." },
        { t: "Padrão, não ruptura", d: "Tratar a era atual como exceção ignora o fio histórico: toda revolução reorganiza papéis, não apaga o método." }
      ],
      a2:["≥5 autores no Gantt (1 por era), com contribuição em 1 frase","Cruzar cada método → Product / Tech Delivery / Human & AI","Baseline honesto: o que o time já pratica sem nomear"] },
    2: { metodo:"PDCA modernizado + Documento A3 (1 página)",
      a1:[
        { t: "Três pilares", d: "Product define o que vale construir; Tech Delivery entrega com ritmo; Human & AI define onde humanos autorizam com IA." },
        { t: "Kaizen vs kaikaku", d: "Kaizen é evolução incremental; kaikaku é ruptura — só funciona com base, dados e patrocínio." },
        { t: "Revolução por passos", d: "Mudança durável vem de pequenas evoluções organizadas no tempo, não de salto sem chão." }
      ],
      a2:["A3 de 1 página com UM problema real do time","Hipótese → experimento → evidência → padronizar ou ajustar","Contramedidas ainda sem IA — você é dono do aprendizado"] },
    3: { metodo:"Hierarquia de Valor (Impacto → Outcome → Output → Task)",
      a1:[
        { t: "Output, outcome, impact", d: "Output é o que entregamos; outcome é a mudança mensurável no comportamento; impact é o efeito no negócio." },
        { t: "Volume ≠ valor", d: "Time que só conta entregas celebra atividade — produtividade real mede se algo mudou para cliente ou negócio." },
        { t: "A pergunta certa", d: "Trocar \"o que entregamos?\" por \"que resultado movemos?\" desloca o time de fábrica de features para time de valor." }
      ],
      a2:["1 impacto estratégico no topo do board","2–3 outcomes + outputs + tasks ligadas","Priorizar 3 itens reais pela contribuição ao impacto"] },
    4: { metodo:"OKR → backlog (funil + hipótese)",
      a1:[
        { t: "KR com baseline", d: "KR sem baseline medido pelo time não é KR — é slogan." },
        { t: "Target assinado", d: "O target é decisão de cargo; o modelo não troca o alvo." },
        { t: "Backlog serve o objetivo", d: "Projeto entra se testa uma hipótese do OKR. O contrário — backlog mandando no objetivo — invalida o funil." }
      ],
      a2:["1 Objetivo + 2 KRs","Baseline que VOCÊ mediu","4 projetos com hipótese"] },
    5: { metodo:"Lean Inception + PBB no board",
      a1:[
        { t: "Persona evidenciada", d: "Persona sem identificação, sem rotina, sem ações no produto não é persona." },
        { t: "Core do MVP", d: "A fatia do MVP é o core — o que não pode ficar de fora do primeiro passo. Adjacente e transformacional tendem ao próximo passo. Se o essencial ficar de fora, o MVP não valida o propósito do produto." },
        { t: "MVP serve o OKR", d: "O MVP serve o OKR — nunca o contrário. Objetivo e KRs claros antes do board; vitrine que não liga ao KR é recusada." }
      ],
      a2:["Porquê + personas + jornada","MVP no mapa de entrega","IN / OUT explícito"] },
    6: { metodo:"User Story Mapping (Patton) + INVEST",
      a1:[
        { t: "Julgamento de valor das USs", d: "Story gerada fora do padrão INVEST precisa ser questionada antes de entrar no backlog." },
        { t: "INVEST", d: "I = Independente · N = Negociável · V = Valiosa · E = Estimável · S = Small · T = Testável. Use prompt para validar enquanto o time aprende — não é regra letra a letra no fluxo diário." },
        { t: "Template que aprende", d: "A story questionada ajusta o template. Auto-nota 5/5 do modelo não conta." }
      ],
      a2:["3 stories pontuadas","1 story reescrita","1 ajuste de template"] },
    7: { metodo:"Team Topologies + linguagem compartilhada (DDD)",
      a1:[
        { t: "Quatro tipos de time", d: "Stream-aligned, Platform, Enabling, Complicated-subsystem (Skelton & Pais) — cada um com papel e carga cognitiva." },
        { t: "Bounded context", d: "Termos decisores do bounded context precisam ter significado explícito para toda a equipe." },
        { t: "Interação entre tipos", d: "Stream consome platform; enabling reduz atrito. Uma interação nomeada vale mais que organograma novo." }
      ],
      a2:["Mapa dos 4 tipos + carga cognitiva","1 ajuste de fronteira (interação, não cargo)","Glossário de 8–12 termos do time"] },
    8: { metodo:"Kanban sistêmico (Anderson) + métricas de fluxo",
      a1:[
        { t: "Métricas de fluxo", d: "Lead Time (LT): da entrada à entrega. Cycle Time (CT): do início do trabalho à entrega. Throughput (TH): itens por período. WIP: trabalho em progresso. CFD: diagrama de fluxo acumulado." },
        { t: "Lei de Little", d: "LT ≈ WIP ÷ TH. Se o WIP sobe e o throughput não acompanha, o lead time explode — é matemática do fluxo, não opinião." },
        { t: "Board visível", d: "Políticas de WIP, classes de serviço e puxar explícitas no Kanban. Só se gerencia o que se vê." }
      ],
      a2:["Dashboard com LT, CT, TH, WIP e CFD","Segmento por tipologia (bug · feature · risco)","1 alavancador via Lei de Little"] },
    9: { metodo:"Auditoria de cadências + métricas em 3 camadas",
      a1:[
        { t: "Rito ≠ ritmo", d: "Reunião sem métrica de ciclo é rito. Ritmo é cadência que o painel de fluxo que você já mede justifica." },
        { t: "Voto do time", d: "Fica / sai / muda é decisão do time. A IA não declara o ritmo vencedor." },
        { t: "Kill criteria", d: "Adotar framework de escala (SAFe, Flight Levels, Spotify) só com patrocínio e critério de abandono se não funcionar." }
      ],
      a2:["Lista fica / sai / muda","Painel em 3 camadas: operacional → tático → estratégico","1 ritmo candidato (voto do time decide)"] },
    10: { metodo:"Business case enxuto + Passaporte FinOps",
      a1:[
        { t: "Core · adjacente · transformacional", d: "Core melhora o que já funciona; adjacente expande o próximo; transformacional aposta alto — exige kill criteria desde o início." },
        { t: "Teto de budget", d: "Budget de iniciativa é o teto explícito: sem teto, cada gasto parece justificável isoladamente." },
        { t: "ROI com julgamento", d: "ROI (Return on Investment) compara opções, mas não substitui contexto — retorno de curto prazo pode esconder valor estratégico." }
      ],
      a2:["Problema em 1 frase — sem mencionar ferramenta","Baseline + custo + benefício com premissas explícitas","Passaporte FinOps: custo unitário, teto, alerta, dono e métrica de valor"] },
    11: { metodo:"Mapa híbrido + Context / Prompt / Steering",
      a1:[
        { t: "Loop com gates", d: "Todo processo é um loop; gate humano é o ponto onde decisão irreversível não pode ser automática." },
        { t: "Automação vs GenIA", d: "Regra fixa → automação clássica; ambiguidade de linguagem → GenIA (IA generativa); alto risco → gate humano obrigatório." },
        { t: "Líder orquestrador", d: "Você desenha onde humanos precisam estar acordados — não executa cada nó no lugar do time." }
      ],
      a2:["Mapa do ecossistema: humanos, agentes, ferramentas, gates e dados","Context + Prompt + Steering no nó mais crítico do loop","Testar o conjunto com 1 caso real e documentar escala para humano"] },
    12: { metodo:"Persona + Steering + Skill (1 agente)",
      a1:[
        { t: "Anatomia do agente", d: "Persona (quem é), Tools (o que chama), Skills (procedimentos) e orquestração (quem decide a próxima ação)." },
        { t: "Conceito antes da marca", d: "LangChain/LangGraph e IDEs usam nomes diferentes para os mesmos conceitos — aprenda o conceito, não só o rótulo do vendor." },
        { t: "Identidade mínima", d: "Agente sem persona é colaborador sem descrição de cargo — improvisa a cada chamada." }
      ],
      a2:["Persona com missão + Steering com limites + Skill com passos","Teste cenário feliz e cenário de escalada para humano","3 blocos versionados no disco (persona / steering / skill)"] },
    13: { metodo:"Spec de sistema agêntico sustentável",
      a1:[
        { t: "Quatro níveis de agente", d: "Reativo → com tools → multi-step → hierárquico: cada nível soma autonomia com critério." },
        { t: "Maestro, não gargalo", d: "Orquestrador coordena specialists e gates — se executa tudo, vira ponto único de falha." },
        { t: "Escalar com base", d: "Subir de agente simples para sistema hierárquico só quando processo e gates já estão claros para humanos." }
      ],
      a2:["Diagrama: orquestrador + specialists + gates humanos","Contratos de entrada/saída + regras de roteamento + runbook de falha","Guia de como incluir o próximo agente sem redesenhar o núcleo"] },
    14: { metodo:"KB viva + critério de subagents",
      a1:[
        { t: "RAG traz verdade", d: "RAG (Retrieval-Augmented Generation) busca na sua base antes de responder — antídoto contra alucinação de fato." },
        { t: "MCP conecta", d: "MCP (Model Context Protocol) liga agentes a ferramentas e dados sem reescrever integração a cada vendor." },
        { t: "Subagents e evals", d: "Subagents dividem missões distintas; evals (avaliações sistemáticas) medem se você pode confiar no sistema." }
      ],
      a2:["KB viva: 5–10 casos reais versionados com o porquê","Decisão documentada: dividir em subagents só se missão e eval forem distintos","Limiar numérico de promoção — sem limiar, workflow não sobe"] },
    15: { metodo:"Linha do tempo experiência → skill → evidência",
      a1:[
        { t: "Meta antes de categorias", d: "Defina o papel que quer exercer em 12–24 meses — categorias nascem da meta, não de framework genérico." },
        { t: "Evidência, não currículo", d: "Conquista comprova skill; skill sem evidência é autodeclaração." },
        { t: "CHA como apoio", d: "CHA (Conhecimento, Habilidade, Atitude) informa perguntas — não impõe a estrutura do seu plano." }
      ],
      a2:["Linha do tempo: experiência → skill → evidência (5 marcos)","Gaps nomeados nos SEUS grupos de competência","1 ação SMART da quinzena ligada a um gap com evidência"] },
    16: { metodo:"Pensamento arbóreo + rascunho vs decisão de autoria",
      a1:[
        { t: "Sinais de dependência", d: "Pedido sem critério, aceitar saída sem questionar e orgulho de \"uso IA para tudo\" são sinais de ferramenta no centro." },
        { t: "Sobrevivente → transformador", d: "Transformador desenha onde a IA entra, com critério, gate e autoria clara — não reage com medo ou dependência." },
        { t: "IA a serviço", d: "Pergunta-teste: se a ferramenta sumisse hoje, você ainda saberia fazer esse julgamento?" }
      ],
      a2:["Mapa arbóreo: tronco (tese) · galhos (domínios) · folhas (execução)","Declaração: 1 rascunho vs 1 decisão de autoria (PI)","Preservar artefatos do ano como registro do raciocínio"] },
    17: { metodo:"Uma lente de tamanho + frase para o C-Level (além de LT/CT/TH)",
      a1:[
        { t: "Fluxo ≠ tamanho", d: "LT/CT/TH dizem quando o card anda. Não dizem o que saiu para a diretoria." },
        { t: "Uma lente", d: "Funcional, técnica ou qualitativa — uma por ciclo. A IA não troca a lente." },
        { t: "No estimates", d: "Não estimar o card em hora. Ainda assim o time nomeia unidade e o que não conta." }
      ],
      a2:["Recorte de fluxo que vocês já medem","Uma lente + unidade + o que não conta","1 frase de C-Level + 1 linha de no-estimates"] }
  };

  const CASO = "Banco Nexo · Squad Pix PJ · Squad Leader Marie Peace · Product Leader John Watson · Tech Lead Frida Miller · Designer Lunna · QA Bartolomeu";
  const EX = {
    1: {
      a2: "Squad Leader Marie Peace lidera a Squad Pix PJ no Banco Nexo. Núcleo de liderança: Product Leader John Watson, Tech Lead Frida Miller, três engenheiros, Designer Lunna, QA Bartolomeu.\n\nEscopo: Pix de PMEs no app e na API — folha de funcionários, pagamento a fornecedor, boleto que vira Pix.\n\nO que já fazemos sem nome de método:\n• Product — Product Leader John Watson prioriza o sprint pelo Zendesk. Ticket com SLA estourado entra antes do projeto bonito.\n• Delivery — Tech Lead Frida Miller fecha o board terça e quinta. Card sem DoD não vai para homologação.\n• Human & AI — Squad Leader Marie Peace trava Pix acima de R$ 50 mil: Compliance autoriza na mão. Nenhum modelo altera limite nem libera valor.\n\nCinco autores no Gantt (um por era), com fato do time:\n• Watt — SPI do Banco Central: se o trilho para, a squad para.\n• Ford — onboarding PJ é linha: CNPJ → chave → primeiro Pix. Gargalo: KYC da Compliance (enabling Skelton).\n• Deming — toda quarta Squad Leader Marie Peace, Product Leader John Watson e Tech Lead Frida Miller olham Pix recusado no painel. Variação, não herói de plantão.\n• Gates — produto é app + API. Agência física não está no P&L da squad.\n• Teo — atendimento pediu bot no Zendesk. O modelo pode sugerir texto; Squad Leader Marie Peace e Compliance liberam Pix.\n\nBaseline: planilha de recusas no Drive (Product Leader John Watson mantém) + canal #pix-pj no Teams.",
      pv: [
        { k: "fato", t: "Fato", d: "Dor + evidência que já está no Gantt da Aula 2. Sem mapa 2, sem ROI." },
        { k: "hip", t: "Hipótese", d: "Se o Gantt não tem o fato, a célula diz HIPÓTESE — o modelo não completa com a web." },
        { k: "alu", t: "Alucinação", d: "Ensaio, app, chatbot 24h, ou GATE sem cargo (PARA / QUEM / SÓ DEPOIS)." }
      ]
    },
    2: {
      chunks: [
        "A3 numa página — formato Ohno. Dona do arquivo: Squad Leader Marie Peace.",
        "Problema: sexta, 18h20, fila Zendesk Pix PJ com 41 tickets abertos. Product Leader John Watson cronometrou na exportação — não é feeling.\nCausa com fato: três convênios (folha de dois clientes + ERP de contador) sem script de recusa padronizado. Evidência: QA Bartolomeu (QA) + analista do plantão — não dashboard agregado.",
        "Contramedida sem IA: script de 8 linhas no Confluence + Product Leader John Watson como dono do plantão de sexta. Ticket \"Pix recusado\" → cola o script. \"Dinheiro sumiu\" → escala Tech Lead Frida Miller + Compliance. Squad Leader Marie Peace assina o gate antes de qualquer piloto com LLM. Sem bot."
      ],
      a2: "A3 numa página — formato Ohno. Dona do arquivo: Squad Leader Marie Peace.\n\nProblema: sexta, 18h20, fila Zendesk Pix PJ com 41 tickets abertos. Product Leader John Watson cronometrou na exportação — não é feeling.\nCausa com fato: três convênios (folha de dois clientes + ERP de contador) sem script de recusa padronizado. Evidência: QA Bartolomeu (QA) + analista do plantão — não dashboard agregado.\nContramedida sem IA: script de 8 linhas no Confluence + Product Leader John Watson como dono do plantão de sexta. Ticket \"Pix recusado\" → cola o script. \"Dinheiro sumiu\" → escala Tech Lead Frida Miller + Compliance. Squad Leader Marie Peace assina o gate antes de qualquer piloto com LLM. Sem bot.",
      pv: [
        { k: "fato", t: "Fato", d: "Causa e número saem do A3 da Aula 2. Contramedida sem evidência não entra." },
        { k: "hip", t: "Hipótese", d: "Kaizen vs kaikaku só com justificativa no A3. Se faltar fato, HIPÓTESE." },
        { k: "alu", t: "Alucinação", d: "Métrica que o A3 não tem (NPS, ROI) ou a IA escolhendo a contramedida." }
      ]
    },
    3: {
      a2: "Hierarquia fechada no quadro — lente Perri (outcome, Product Leader John Watson) + impacto de negócio (Squad Leader Marie Peace).\n\nImpacto: PME cliente do Nexo não atrasa folha porque o Pix da sexta falhou.\nOutcomes: primeiro Pix do cliente novo em < 1 dia · recusa respondida em 15 min (mediana Zendesk de terça: 40 min — Product Leader John Watson exportou).\nOutputs: script de recusa no Confluence · fila do plantão visível no #pix-pj · card no board da Tech Lead Frida Miller.\nTasks: Product Leader John Watson cronometra três sextas · Designer Lunna valida linguagem do script com dois clientes piloto.\n\nNÃO é outcome: post no LinkedIn do banco · \"referência em open finance\" · velocity da sprint.",
      pv: [
        { k: "fato", t: "Fato", d: "Cada classe (output / outcome / impact) leva 1 evidência objetiva." },
        { k: "hip", t: "Hipótese", d: "Raciocínio visível (CoT) antes do rótulo. Sem raciocínio a classe é chute." },
        { k: "alu", t: "Alucinação", d: "Métrica que o time não mediu, ou vanity (post, prêmio) classificado como outcome." }
      ]
    },
    4: {
      a2: "OKR do trimestre — lente Doerr. Números da planilha do Drive (Product Leader John Watson). Sem alvo bonito.\n\nObjetivo: PME do Nexo não perde folha por Pix recusado.\nKR1: mediana Zendesk 40 → 15 min (baseline: terça passada, 40 tickets, QA Bartolomeu exportou).\nKR2: 70% onboardings PJ com primeiro Pix em 24h (hoje 44% — Tech Lead Frida Miller puxou do Datadog + CRM).\nProjetos: script · plantão · fila KYC. FORA: app novo · Pix internacional · \"experiência wow\".\n\nAlvo de 15 min: gerente de canais assinou com Squad Leader Marie Peace na reunião. \"Omnichannel\" foi sugestão da IA — riscamos.",
      pv: [
        { k: "fato", t: "Fato", d: "Baseline do KR é número que o time mediu (planilha, board). Sem baseline = INVÁLIDO." },
        { k: "hip", t: "Hipótese", d: "O target é o que um cargo assinou. O modelo resume — não muda o alvo." },
        { k: "alu", t: "Alucinação", d: "Moonshot sem baseline, ou KR trocado por slogan (omnichannel, referência)." }
      ]
    },
    5: {
      a2: "PBB na parede da sala — post-it amarelo, letra do time. Facilitação: Product Leader John Watson.\n\nPersona cliente (lente Cagan): dono de oficina, 41 anos, Santo André. Folha de 18 funcionários na sexta. Fala com o gerente pelo WhatsApp — não usa internet banking no desktop.\nIN: ver no app por que o Pix da folha foi recusado, em linguagem de oficina, não de BACEN.\nOUT: app novo, open finance, clube de pontos, \"jornada omnichannel\".\nMVP: os 30 clientes PJ que mais abriram ticket em julho (lista do Product Leader John Watson). Duas semanas. Se a persona não entender a tela, Squad Leader Marie Peace não autoriza escala.",
      pv: [
        { k: "fato", t: "Fato", d: "Persona e IN vêm do PBB da Aula 2. Protótipo só da fatia IN." },
        { k: "hip", t: "Hipótese", d: "O link do protótipo + 1 imagem da jornada (mesmo traço) testam o OKR da S04." },
        { k: "alu", t: "Alucinação", d: "Markdown no chat no lugar do link, stock genérico, ou vitrine que implementa o OUT." }
      ]
    },
    6: {
      a2: "Três stories — julgamento INVEST — Designer Lunna e QA Bartolomeu. Uma falhou. Priorização: Product Leader John Watson.\n\n1. Como dono de oficina (persona Cagan), quero ver em uma frase por que o Pix da folha caiu.\n2. Como atendimento, quero script de recusa no Zendesk (não PDF no Drive).\n3. Como Product Leader John Watson, quero mediana de terça na planilha, sem export manual do QA Bartolomeu.\n\nRevisão: story 2 falhou Independente — depende do macro do QA. IA deu 5/5 nas três. Tech Lead Frida Miller recusou no refinamento.",
      pv: [
        { k: "fato", t: "Fato", d: "A revisão INVEST apontou falta de Independente na story 2" },
        { k: "hip", t: "Hipótese", d: "Script no Zendesk > PDF no Drive" },
        { k: "alu", t: "Alucinação", d: "IA se deu 5/5 nas 3 stories" }
      ]
    },
    7: {
      a2: "Topologia — lente Skelton & Pais. Facilitação: Squad Leader Marie Peace. Não é organograma de RH.\n\nStream: Squad Pix PJ (Squad Leader Marie Peace). Onboarding, recusa, primeiro Pix. Uma fila, um dono de prioridade (Product Leader John Watson).\nPlataforma: Core Bancário segura SPI e ledger. Tech Lead Frida Miller consome APIs — não edita o core.\nEnabling: jurídico libera convênio ERP — gargalo Skelton (uma pessoa, todo o banco).\nAjuste: Compliance não edita texto da tela de recusa sem pedido formal da squad. Fronteira nos dois sentidos — Squad Leader Marie Peace documentou no Confluence.",
      pv: [
        { k: "fato", t: "Fato", d: "Enabling jurídico: uma pessoa libera convênio ERP para todo o banco" },
        { k: "hip", t: "Hipótese", d: "Fronteira 'Compliance não edita a tela' baixa o ruído" },
        { k: "alu", t: "Alucinação", d: "IA sugeriu 'squad de plataforma com 8 pessoas'" }
      ]
    },
    8: {
      a2: "Dashboard Kanban — lente Anderson. Dona dos números: Tech Lead Frida Miller. Fonte: Zendesk + Datadog (export de quarta).\n\nLead Time (LT) primeiro Pix (cliente novo): 3,2 dias.\nCycle Time (CT) ticket de recusa: 40 min (mediana terça).\nThroughput (TH): 38 tickets/semana na semana passada.\nWIP sexta 18h: 27 tickets no plantão.\nCFD: fila de recusa cresceu de terça a sexta.\n\nLei de Little: LT ≈ WIP ÷ TH — com WIP 27 e TH baixo, a fila não fecha. Product Leader John Watson quer a mediana descer; Tech Lead Frida Miller quer menos WIP — não outra reunião de status.",
      pv: [
        { k: "fato", t: "Fato", d: "27 tickets sexta 18h — QA Bartolomeu contou no Zendesk" },
        { k: "hip", t: "Hipótese", d: "Reduzir WIP para 15 é o alavancador via Lei de Little" },
        { k: "alu", t: "Alucinação", d: "IA colou lead time de mercado sem fonte do time" }
      ]
    },
    9: {
      a2: "Ritmos — votamos na terça, Squad Leader Marie Peace anotou no caderno. O canvas não votou.\n\nFica: huddle 9h10 (Squad Leader Marie Peace facilita). Quinze minutos. Quem falta no plantão de sexta sai dali decidido — Product Leader John Watson confirma capacidade, Tech Lead Frida Miller confirma WIP.\nSai: o \"alinhamento\" de sexta, 50 min, que em quatro semanas não gerou uma ata.\nMuda: review mensal com gerente de canais vira quinzenal e entra com UM número (mediana Zendesk). Sem número, Squad Leader Marie Peace cancela a reunião.\nVoto: seis a favor, QA Bartolomeu absteve. A IA tinha \"aprovado\" ritual de 1h com icebreaker. Riscamos.",
      pv: [
        { k: "fato", t: "Fato", d: "A sexta de 50 min não gerou ata em 4 semanas" },
        { k: "hip", t: "Hipótese", d: "Quinzena com 1 número vale mais que a sexta" },
        { k: "alu", t: "Alucinação", d: "IA 'aprovou' o ritmo novo sozinha" }
      ]
    },
    10: {
      a2: "FinOps com a fatura na mesa. Squad Leader Marie Peace apresenta; Product Leader John Watson e Tech Lead Frida Miller validam números. Julho: AWS + Zendesk + API do SPI (custo interno do Core).\n\nZendesk Suite canal PJ: R$ 1.840 no cartão do centro de custo — consta na fatura. Product Leader John Watson conferiu linha a linha.\nConservador: script + planilha. Zero a mais. É o que já fazemos.\nBase: API oficial Zendesk + QA Bartolomeu meio período para manter o script. Cabe no trimestre. Gerente de canais acenou com Squad Leader Marie Peace.\nAgressivo: bot 24h no WhatsApp. Teto que a diretoria NÃO assina: R$ 8 mil/mês + risco de bot \"liberar\" Pix. Squad Leader Marie Peace não leva esse cenário para assinatura.",
      pv: [
        { k: "fato", t: "Fato", d: "R$ 1.840 está na fatura de julho do centro de custo" },
        { k: "hip", t: "Hipótese", d: "O cenário base cabe no caixa do trimestre" },
        { k: "alu", t: "Alucinação", d: "IA vendeu só o agressivo com ROI de 400%" }
      ]
    },
    11: {
      a2: "Mapa híbrido — lente Teo (gate humano). Dona do gate: Squad Leader Marie Peace.\n\nContext: ticket da persona oficina + 3 últimas recusas no ledger (Tech Lead Frida Miller exportou).\nPrompt: script de 8 linhas (texto aprovado por Product Leader John Watson no Confluence).\nSteering: \"dinheiro saiu e não chegou\" → modelo NÃO sugere resposta final. Escala Tech Lead Frida Miller + Compliance.\nProibido: liberar Pix · alterar limite · encerrar ticket sozinho · prometer prazo de estorno.\n\nModelo escreve rascunho; cargo autoriza publicação.",
      pv: [
        { k: "fato", t: "Fato", d: "\"Dinheiro saiu e não chegou\" — ticket real da persona oficina" },
        { k: "hip", t: "Hipótese", d: "Script no modelo acelera; liberar Pix não" },
        { k: "alu", t: "Alucinação", d: "IA quis 'automatizar a liberação do limite'" }
      ]
    },
    12: {
      a2: "Três arquivos em agents/pix-pj/ — lente Chase/Moura/Wang. Custom GPT não conta. Owner: Tech Lead Frida Miller no repo.\n\npersona.md: fala curto, trata o cliente PJ por \"você\", nunca diz que o Pix \"já foi\".\nsteering.md: três proibições (liberar Pix · mudar limite · encerrar ticket sozinho) + escala para Squad Leader Marie Peace/Compliance.\nskill.md: classificar ticket → script de recusa OU Tech Lead Frida Miller/Compliance.\nHook: ticket novo tag pix-pj → só se não for \"valor divergente\". Liga no gate da S11.",
      pv: [
        { k: "fato", t: "Fato", d: "Os 3 arquivos estão em agents/pix-pj/, não num Custom GPT" },
        { k: "hip", t: "Hipótese", d: "Hook no ticket novo basta para o teste" },
        { k: "alu", t: "Alucinação", d: "Chatbot sem arquivo 'já era o agent'" }
      ]
    },
    13: {
      a2: "Spec do maestro — lente Ng (spec antes do código). Review: Squad Leader Marie Peace + Tech Lead Frida Miller.\n\nEntrada: ticket Zendesk tag pix-pj.\nRoteamento: triagem → (script automático | Tech Lead Frida Miller | Compliance).\nSaída: frase publicada no ticket OU escalada com id do ledger.\nGate: valor divergente ou Pix > R$ 50 mil → Compliance confirma; Squad Leader Marie Peace assina exceção.\n\nTrês rotas. Quarta rota (WhatsApp) = spec recusa até ter gate.",
      pv: [
        { k: "fato", t: "Fato", d: "Spec escrita ANTES de qualquer PR" },
        { k: "hip", t: "Hipótese", d: "3 rotas cobrem o dia do plantão" },
        { k: "alu", t: "Alucinação", d: "Código no primeiro commit, spec depois" }
      ]
    },
    14: {
      a2: "KB viva — owner Product Leader John Watson, validação QA Bartolomeu. Dez casos escritos por atendimento e QA, com linguagem real (não tom de modelo).\n\n1 recusa de limite  2 chave inexistente  3 CNPJ divergente  4 horário SPI  5 TED chamada de Pix  6 folha em lote  7 ERP do contador  8 valor divergente  9 estorno  10 \"sumiu o dinheiro\".\nLimiar: 8/10 com citação da KB. Quinta deu 7/10. Tech Lead Frida Miller não promove para produção.\nFine-tune: não. A KB resolve. Quem pediu fine-tune foi a IA no primeiro parágrafo.",
      pv: [
        { k: "fato", t: "Fato", d: "7/10 no teste de quinta — abaixo do limiar" },
        { k: "hip", t: "Hipótese", d: "Mais 3 casos de ERP sobem para 8" },
        { k: "alu", t: "Alucinação", d: "IA pediu fine-tune sem tentar a KB" }
      ]
    },
    15: {
      a2: "PDI da Squad Leader Marie Peace — categorias SUAS, não CHA genérico. Advisor no Project alimentado com timeline real.\n\nTimeline: 2016 atendimento PJ · 2019 coordenação de squad cartões · 2022 squad leader Pix PJ · 2024 orquestra humano & IA com Product Leader John Watson e Tech Lead Frida Miller.\nCategorias: pulso Zendesk na sexta com o time · Compliance quando enabling Skelton some · número único para gerente de canais (com Product Leader John Watson).\nGap SMART (2 semanas): assistir huddle do Core (SPI) sem falar — mapear onde nasce a fila que Tech Lead Frida Miller mede no dashboard.",
      pv: [
        { k: "fato", t: "Fato", d: "Timeline da Squad Leader Marie Peace — não CHA de catálogo" },
        { k: "hip", t: "Hipótese", d: "Observar o Core muda o pulso da fila" },
        { k: "alu", t: "Alucinação", d: "Advisor devolveu 'desenvolver liderança 4.0'" }
      ]
    },
    16: {
      a2: "Fechamento do ano — pensamento arbóreo. Facilitação: Squad Leader Marie Peace.\n\nTronco: fila Zendesk na sexta. Galhos: script (Product Leader John Watson) · WIP 15 (Tech Lead Frida Miller) · agent com gate Compliance (Squad Leader Marie Peace). Folhas: 30 clientes MVP + persona oficina.\nPI: Nexo ensina o método (Gantt, A3, métricas de fluxo, limiar). Outro banco copia o tipo, não a fatura.\nAta offline (caderno da Squad Leader Marie Peace): huddle 9h10 FICA. IA não vota. Bot 24h NÃO sobe.",
      pv: [
        { k: "fato", t: "Fato", d: "Ata no caderno: huddle das 9h10 fica" },
        { k: "hip", t: "Hipótese", d: "O Overview ajuda a contar o ano, não a decidir" },
        { k: "alu", t: "Alucinação", d: "O modelo escolheu 'acabar o huddle'" }
      ]
    },
    17: {
      a2: "Comitê. Gerente de canais: \"quanto software a Pix PJ entregou?\" Dashboard S08 na mesa: CT 40 min · TH 38 · WIP 27. Tech Lead Frida Miller responde: \"Isso é fila. Perguntei o que saiu.\"\n\nLente funcional (Albrecht/COSMIC no recorte) — não APF de consultoria. Unidade: movimento que o dono de oficina reconhece (recusa explicada · chave criada · lote de folha). FORA: \"cadê minha senha\" · story point · linha do bot.\n\nFrase C-Level (Squad Leader Marie Peace assina com Product Leader John Watson): squad explica recusa e conclui primeiro Pix PJ em < 1 dia nos 30 clientes do recorte — função nova, não cartão andando.\n\nNo estimates: puxa pelo WIP 15. Comitê ouve função, não velocity.",
      pv: [
        { k: "fato", t: "Lente", d: "Uma. A do time. Não a que a IA preferir." },
        { k: "hip", t: "Arquivo", d: "B04-A2-medida.md na mesa. Sem isso a A3 inventa PF." },
        { k: "alu", t: "GATE", d: "A IA não troca a lente nem conta ponto de função no escuro." }
      ]
    }
  };

  const canvas = document.getElementById("c");
  const ctx = canvas.getContext("2d");
  const hintB = document.querySelector("#hint b");
  const hintS = document.querySelector("#hint span");

  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY)) || {};
      if (!s.won) s.won = [];
      if (!s.cofre) s.cofre = [];
      if (!s.setupS01) s.setupS01 = false;
      return s;
    } catch { return { won: [], cofre: [], setupS01: false }; }
  }
  function persist() { localStorage.setItem(KEY, JSON.stringify(save)); }
  let save = load();

  function wonSet() { return new Set(save.won); }
  function isBonus(n) { return n === 17; }
  function unlocked(n) {
    if (isBonus(n)) return wonSet().has(10);
    return n === 1 || wonSet().has(n - 1);
  }
  function nextHole() {
    for (let i = 1; i <= 16; i++) { if (unlocked(i) && !wonSet().has(i)) return i; }
    return 16;
  }
  function streak() {
    let s = 0;
    for (let i = 1; i <= 16; i++) { if (!wonSet().has(i)) break; s++; }
    return s;
  }

  let mode = "map";
  let week = 1;
  let phase = "conceito";
  let a1open = [];
  let a2pin = [];
  let stamps = { fato: false, hipotese: false, alucinacao: false };
  let winLock, labDone, scoreLock, reforco;
  let toastT = 0;

  function rng(seed) {
    let s = seed * 1103515245 + 12345;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }

  function playOf() { return PLAY[week]; }
  function needsSetup() { return week === 1; }
  function needsSetupPrompt() {
    return !save.setupS01 && !save.won.includes(1);
  }
  function showSetupNag() {
    return needsSetup() && needsSetupPrompt();
  }

  function closeCofre() {
    document.getElementById("cofre").classList.remove("show");
  }

  function showMap() {
    mode = "map";
    document.getElementById("stage").className = "map-only";
    document.getElementById("mesa").classList.remove("show");
    closeDock();
    closeCofre();
    resize();
    renderExplorer();
    paintWaveLabels();
    renderMapGadgets();
    syncHud();
  }

  let railFocus = 1;

  function railForPhase(ph) {
    if (ph === "conceito") return 1;
    if (ph === "raiz") return 2;
    return 3;
  }

  function applyRailFocus() {
    [1, 2, 3].forEach((n) => {
      document.getElementById("rail-a" + n).classList.toggle("is-active", railFocus === n);
    });
    document.querySelectorAll("#mesa-tabs .mesa-tab").forEach((btn) => {
      const n = Number(btn.getAttribute("data-rail"));
      btn.classList.toggle("on", n === railFocus);
    });
  }

  function updateMesaTabs() {
    const tabs = document.querySelectorAll("#mesa-tabs .mesa-tab");
    if (!tabs.length) return;
    const a1ready = playOf().a1.every((_, i) => a1open[i]);
    const a2ready = playOf().a2.every((_, i) => a2pin[i]);
    tabs.forEach((btn) => {
      const n = Number(btn.getAttribute("data-rail"));
      if (n === 2) btn.disabled = !a1ready;
      if (n === 3) btn.disabled = !a2ready;
    });
  }

  function bindRailTabs() {
    document.querySelectorAll("#mesa-tabs .mesa-tab").forEach((btn) => {
      btn.onclick = () => {
        if (btn.disabled) return;
        railFocus = Number(btn.getAttribute("data-rail"));
        applyRailFocus();
      };
    });
  }

  function enterWeek(n) {
    week = n;
    phase = "conceito";
    closeNotaDialog();
    railFocus = 1;
    a1open = [];
    a2pin = [];
    stamps = { fato: false, hipotese: false, alucinacao: false };
    labDone = false;
    scoreLock = false;
    winLock = false;
    reforco = false;
    mode = "level";
    document.getElementById("stage").className = "level-on";
    document.getElementById("mesa").classList.add("show");
    closeDock();
    syncHud();
    renderExplorer();
    renderMesa();
  }

  function filesOf(n) { return FILES[n]; }
  function waveOfWeek(n) { return WEEKS[n - 1].w; }

  function cofreRelPath(n, file) {
    const pad = String(n).padStart(2, "0");
    if (isBonus(n)) return COFRE_DIR + "04-hibridos/bonus-medida/" + file;
    return COFRE_DIR + WAVE_DIR[WEEKS[n - 1].w] + "/semana-" + pad + "/" + file;
  }

  function nextCofreHole() {
    for (let n = 1; n <= 17; n++) {
      const f = filesOf(n);
      if (!save.cofre.find((x) => x.id === f.a2)) return { n, file: f.a2, aula: 2 };
      if (!save.cofre.find((x) => x.id === f.a3)) return { n, file: f.a3, aula: 3 };
    }
    return null;
  }

  function renderExplorer() {
    const tree = document.getElementById("ex-tree");
    const won = wonSet();
    const nxt = nextHole();
    const activeW = waveOfWeek(nxt);

    function waveCard(w) {
      const meta = WAVE_META[w];
      const ids = IN_WAVE[w];
      const done = ids.filter((n) => won.has(n)).length;
      const expanded = w === activeW;
      let html = '<div class="ex-wave' + (expanded ? " open" : " collapsed") + '" data-wave="' + w + '" style="--wave-color:' + WAVE_COLOR[w] + ';border-left-color:' + WAVE_COLOR[w] + '">';
      html += '<button type="button" class="ex-wave-head" data-toggle-wave="' + w + '">';
      html += '<div class="ex-wave-top"><span>W0' + w + "</span><span>" + done + "/" + ids.length + "</span></div>";
      html += '<span class="ex-wave-pilar">' + meta.pilar + "</span>";
      html += '<span class="ex-wave-sub">' + meta.subtitle + "</span>";
      html += "</button><div class='ex-holes'>";
      ids.forEach((n) => {
        const open = unlocked(n);
        const cls = (won.has(n) ? " on" : "") + (n === nxt && !won.has(n) ? " next" : "");
        const style = won.has(n) ? " style='background:" + WAVE_COLOR[w] + "'" : "";
        html += '<button type="button" class="ex-week' + cls + '" data-ex="' + n + '" title="' + weekTitle(n).replace(/"/g, "&quot;") + '"' + (open ? "" : " disabled") + style + ">" + n + "</button>";
      });
      html += "</div></div>";
      return html;
    }

    let html = "";
    for (let w = 1; w <= 5; w++) html += waveCard(w);
    tree.innerHTML = html;
    tree.querySelectorAll("[data-toggle-wave]").forEach((el) => {
      el.onclick = () => {
        const key = el.getAttribute("data-toggle-wave");
        tree.querySelectorAll(".ex-wave").forEach((wave) => {
          const wk = wave.getAttribute("data-wave");
          const isTarget = String(wk) === String(key);
          wave.classList.toggle("open", isTarget);
          wave.classList.toggle("collapsed", !isTarget);
        });
        requestAnimationFrame(paintWaveLabels);
      };
    });
    tree.querySelectorAll("[data-ex]").forEach((el) => {
      el.onclick = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        const n = Number(el.getAttribute("data-ex"));
        if (!unlocked(n)) { toast("Semana bloqueada", true); return; }
        enterWeek(n);
      };
    });
    const head = document.getElementById("ex-head-title");
    if (head) head.textContent = mode === "level" ? weekTitle(week) : weekTitle(nxt);
    const tag = document.getElementById("ex-tagline");
    if (tag) tag.hidden = true;
    requestAnimationFrame(paintWaveLabels);
  }

  function depositWeek(n) {
    const f = filesOf(n);
    const ids = [f.a2, f.a3];
    ids.forEach((id) => {
      if (!save.cofre.find((x) => x.id === id)) {
        save.cofre.push({
          id: id,
          semana: n,
          aula: id.indexOf("-A2-") > 0 ? 2 : 3,
          path: isBonus(n)
            ? "04-hibridos/bonus-medida/" + id
            : WAVE_DIR[WEEKS[n - 1].w] + "/S" + String(n).padStart(2, "0") + "/" + id
        });
      }
    });
    persist();
  }

  function manifestOut() {
    return {
      slug_parceiro: "agile-school",
      oferta: "INI-AIEL-AS",
      artefatos: save.cofre.slice(),
    };
  }

  function nextNomes() {
    for (let n = 1; n <= 16; n++) {
      const f = filesOf(n);
      if (!save.cofre.find((x) => x.id === f.a2) || !save.cofre.find((x) => x.id === f.a3)) return f;
    }
    return filesOf(16);
  }

  function renderCofre() {
    const list = document.getElementById("cofre-list");
    const meta = document.getElementById("cofre-meta");
    const hole = nextCofreHole();
    const done16 = wonSet().has(16);
    meta.textContent = done16
      ? phraseLines(COFRE_DIR + " no Drive. Exporte o manifest e cole no git do engine.")
      : (hole
        ? COFRE_DIR + save.cofre.length + "/34 · próximo " + cofreRelPath(hole.n, hole.file)
        : COFRE_DIR + save.cofre.length + "/34 · diretório completo");
    const rows = [];
    for (let n = 1; n <= 17; n++) {
      const f = filesOf(n);
      const a2 = save.cofre.find((x) => x.id === f.a2);
      const a3 = save.cofre.find((x) => x.id === f.a3);
      const mark = (ok, id, num) => ok
        ? "<code title='" + cofreRelPath(num, id) + "'>" + cofreRelPath(num, id) + "</code>"
        : "<span class='miss' title='" + cofreRelPath(num, id) + "'>" + cofreRelPath(num, id) + "</span>";
      const label = isBonus(n) ? "B04" : "S" + String(n).padStart(2, "0");
      rows.push("<li><b>" + label + "</b><br>" + mark(a2, f.a2, n) + "<br>" + mark(a3, f.a3, n) + "</li>");
    }
    list.innerHTML = rows.join("");
  }

  function homeworkContextLines() {
    const p = playOf();
    const pins = p.a2.filter((_, i) => a2pin[i]);
    const f = filesOf(week);
    const pad = String(week).padStart(2, "0");
    const inputFile = "input-semana-" + pad + ".txt";
    if (!pins.length) {
      return "Leia o contrato da Aula 2 no painel ao lado. No disco: " + inputFile + " na pasta semana-" + pad + ". Lacuna = pergunte — não invente.";
    }
    return [
      "Insumo da Aula 2 (painel ao lado + " + inputFile + " na pasta da semana):",
      pins.map((x, i) => (i + 1) + ". " + x).join("\n"),
      "Use só fatos que aparecem no contrato. Não complete com web nem com 'todo time faz'."
    ].join("\n");
  }

  function parseSixPillars(text) {
    const out = { persona: "", contexto: "", tarefa: "", tom: "", formato: "", exemplos: "" };
    const src = String(text || "").trim();
    if (!src) return out;
    const re = /^(Persona|Contexto|Tarefa|Tom|Formato|Exemplos)\s*:\s*/gim;
    const markers = [];
    let m;
    while ((m = re.exec(src))) {
      markers.push({ label: m[1], start: m.index, bodyStart: m.index + m[0].length });
    }
    if (!markers.length) {
      out.tarefa = src;
      return out;
    }
    markers.forEach((mk, i) => {
      const end = i + 1 < markers.length ? markers[i + 1].start : src.length;
      out[mk.label.toLowerCase()] = src.slice(mk.bodyStart, end).trim();
    });
    return out;
  }

  function labFormatoBlock(lab) {
    const meta = LAB_DELIVERABLES[week] || {};
    const f = filesOf(week);
    const lines = [];
    lines.push("OUTPUT DESTA AULA:");
    lines.push(meta.deliverable || lab.out);
    if (meta.outputs && meta.outputs.length) {
      lines.push("Formato esperado: " + meta.outputs.join(" · "));
    }
    const names = (meta.files && meta.files.length) ? meta.files : [f.a3];
    lines.push("Salvar como: " + names.join(", ") + " na pasta da semana no seu diretório.");
    lines.push("Comando: entregue o conteúdo completo pronto para colar no arquivo — não resuma só no chat.");
    if (week === 1) {
      lines.push("Semana 01: rode o mesmo prompt em ChatGPT e Gemini; salve os dois outputs e compare o GATE.");
    } else {
      lines.push("Aula 2 (insumo): " + f.a2 + " · Aula 3 (entrega): " + f.a3);
    }
    if (lab.casca) lines.push("Use o modelo de referência abaixo — mantenha os títulos das seções.");
    if (week === 16) {
      lines.push("Fechamento: exporte o manifest e sincronize a pasta com o Drive.");
    } else if (week > 1) {
      const last = filesOf(week - 1);
      const has = save.cofre.find((x) => x.id === last.a3);
      if (has) lines.push("Leia também a entrega da semana anterior: " + cofreRelPath(week - 1, last.a3));
    }
    if (meta.artefato) lines.push("Contribui para o artefato da trilha: " + meta.artefato);
    return lines.join("\n");
  }

  function labDeliverableHtml(wk) {
    const meta = LAB_DELIVERABLES[wk];
    if (!meta) return "";
    let html = '<section class="lab-deliverable">';
    html += "<h3 class=\"lab-session-title\">" + labSessionTitle(wk) + "</h3>";
    html += "<p class=\"lab-deliver-what\"><b>O que você vai gerar:</b> " + phraseLines(meta.deliverable) + "</p>";
    html += "<p class=\"lab-deliver-why\"><b>Por quê:</b> " + phraseLines(meta.why) + "</p>";
    if (meta.outputs && meta.outputs.length) {
      html += "<p class=\"lab-deliver-format\"><b>Formato:</b> " + meta.outputs.join(" · ") + "</p>";
    }
    if (meta.artefato) {
      html += "<p class=\"lab-deliver-artefato\"><b>Artefato da trilha:</b> " + meta.artefato + "</p>";
    }
    const f = filesOf(wk);
    const files = meta.files && meta.files.length ? meta.files : [f.a3];
    html += "<p class=\"lab-deliver-files\"><b>Arquivo(s) sugerido(s):</b> ";
    html += files.map((name) => "<code class='file'>" + name + "</code>").join(" ");
    html += "</p></section>";
    return html;
  }

  function formatPromptSixPillars(lab) {
    const parsed = parseSixPillars(lab.prompt);
    return [
      "Persona: " + (parsed.persona || labPersona(week, false)),
      "Contexto: " + homeworkContextLines(),
      "Tarefa: " + (parsed.tarefa || lab.prompt),
      "Tom: " + (parsed.tom || "direto, técnico, orientado a entrega — não consultor que escreve ensaio"),
      "Formato: " + (parsed.formato || labFormatoBlock(lab)),
      "Exemplos: Caso Nexo no painel à direita — use o tipo de evidência, não os números. Ruim: ROI sem baseline, app genérico, dado fora do contrato."
    ].join("\n\n");
  }

  function formatPromptReforco(lab) {
    const parsed = parseSixPillars(lab.prompt);
    return [
      "Persona: " + (parsed.persona || labPersona(week, true)),
      "Contexto: " + homeworkContextLines() + "\nFeche o chat que alucinou. Abra um chat novo antes de colar este prompt.",
      "Tarefa: " + (parsed.tarefa || "Repita a entrega da Aula 3 usando SÓ o contrato ao lado."),
      "Tom: direto, auditor — sem consultoria; o output anterior foi invalidado",
      "Formato: " + labFormatoBlock(lab),
      "Exemplos: Caso Nexo à direita. Se inventou de novo, pare e pergunte."
    ].join("\n\n");
  }

  function promptLabText() {
    const lab = labOf();
    if (reforco) return formatPromptReforco(lab);
    return formatPromptSixPillars(lab);
  }

  function contractChunks(wk) {
    const ex = EX[wk];
    const need = PLAY[wk].a2.length;
    if (ex.chunks && ex.chunks.length === need) return ex.chunks;
    const t = ex.a2;
    const header = t.split(/\n\n/)[0].trim();
    const mCausa = t.match(/\n?(Problema:[\s\S]*?)(?=\nContramedida|$)/);
    const mContra = t.match(/\n?(Contramedida[\s\S]*)/);
    if (need === 3 && header && mCausa && mContra) {
      return [header, mCausa[1].trim(), mContra[1].trim()];
    }
    const paras = t.split(/\n\n+/).filter((x) => x.trim());
    if (paras.length >= need) {
      if (paras.length === need) return paras;
      const out = paras.slice(0, need - 1);
      out.push(paras.slice(need - 1).join("\n\n"));
      return out;
    }
    const size = Math.ceil(t.length / need) || 1;
    return Array.from({ length: need }, (_, i) => t.slice(i * size, (i + 1) * size).trim());
  }

  function revealedContract(wk) {
    const chunks = contractChunks(wk);
    const n = a2pin.filter(Boolean).length;
    return { text: n ? chunks.slice(0, n).join("\n\n") : "", n, total: chunks.length };
  }

  function revealedExemplo(wk) {
    const chunks = contractChunks(wk);
    const n = a2pin.filter(Boolean).length;
    const ex = EX[wk];
    if (!n) {
      return "Marque os cartões — o contrato monta no painel ao lado.";
    }
    const lines = [
      "========== CASO NEXO · PIX PJ (copie o TIPO, não os números) ==========",
      CASO,
      "",
      chunks.slice(0, n).join("\n\n"),
    ];
    if (n >= chunks.length) {
      const pv = ex.pv.map((row) => row.t + ": " + row.d).join("\n");
      lines.push("", "Referência de output:", pv, "========== FIM ==========");
    }
    return lines.join("\n");
  }

  function labLabHtml() {
    const lab = labOf();
    const toolCount = labEtapas(lab).reduce((n, e) => n + (e.tools || []).length, 0);
    const manyCls = toolCount >= 3 ? " has-many-tools" : "";
    let html = '<div class="lab-lab">';
    if (reforco) {
      html += "<p class='lab-chip reforco'>Nota 1 — chat novo. Use o contrato ao lado.</p>";
    }
    html += labDeliverableHtml(week);
    if (lab.casca) {
      html += '<p class="lab-chip lab-template">Modelo de referência: <button type="button" class="ghost" id="btn-casca">copiar estrutura</button></p>';
    }
    html += '<div class="lab-workspace' + manyCls + '">';
    html += '<div class="lab-workspace-main">';
    html += '<section class="lab-frame lab-frame-prompt"><div class="lab-frame-head"><span class="lab-frame-label">'
      + (reforco ? "Prompt reforço" : "Prompt")
      + '</span><button type="button" class="ghost btn-copy-lab" data-copy="prompt">Copiar</button></div>'
      + '<pre class="lab-frame-body" data-lab-body="prompt"></pre></section>';
    html += "</div>";
    html += '<div class="lab-workspace-side">';
    html += '<div class="lab-tools-scroll">';
    html += labToolsHtml(lab, true);
    html += "</div>";
    html += '<button type="button" id="btn-lab-done" class="btn-feito lab-done-side">✓ Feito</button>';
    html += "</div></div></div>";
    return html;
  }

  function labCopyMap() {
    return { prompt: promptLabText() };
  }

  function copyLabText(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => toast("Copiado")).catch(() => toast("Copie o quadro", true));
  }

  function fillLabFrames() {
    const map = labCopyMap();
    document.querySelectorAll("[data-lab-body]").forEach((el) => {
      const key = el.getAttribute("data-lab-body");
      if (map[key]) el.textContent = map[key];
    });
    document.querySelectorAll(".btn-copy-lab[data-copy]").forEach((btn) => {
      const key = btn.getAttribute("data-copy");
      btn.onclick = () => copyLabText(map[key]);
    });
    const casca = document.getElementById("btn-casca");
    if (casca) {
      casca.onclick = () => copyLabText(labOf().casca);
    }
  }

  function renderMesa() {
    const p = playOf();
    const lab = labOf();
    const a1ready = p.a1.every((_, i) => a1open[i]);
    const a2ready = p.a2.every((_, i) => a2pin[i]);
    const pinCount = a2pin.filter(Boolean).length;
    document.getElementById("lead-a1").textContent = phraseLines("Três ideias — sem IA.");
    document.getElementById("lead-a2").innerHTML = a1ready
      ? phraseLines(p.metodo) + "<br><code class='file'>" + filesOf(week).a2 + "</code>"
      : phraseLines("Termine os três cartões do Conceito.");
    document.getElementById("lead-a3").innerHTML = !a2ready
      ? phraseLines("O Lab IA só abre depois que você entrega o homework.")
      : (phase === "nota"
        ? phraseLines("Toque o botão abaixo e escolha 1, 2 ou 3.")
        : (showSetupNag()
          ? phraseLines("No mapa: toque Setup. Rode o script de pastas — depois volte ao Lab IA.")
          : (() => {
            const meta = LAB_DELIVERABLES[week] || {};
            return phraseLines((meta.deliverable || lab.out));
          })()));
    document.getElementById("rail-a2").className = "rail" + (a1ready ? "" : " locked");
    document.getElementById("rail-a3").className = "rail" + (a2ready ? "" : " locked") + (phase === "lab" && a2ready ? " has-lab" : "");
    document.getElementById("cards-a1").innerHTML = p.a1.map((card, i) =>
      '<button type="button" class="piece' + (a1open[i] ? " on" : "") + '" data-a1="' + i + '"><span class="tag">' + (a1open[i] ? "✓" : card.t) + "</span><span class='card-d'>" + phraseLines(card.d) + "</span></button>"
    ).join("");
    document.getElementById("slots-a2").innerHTML = p.a2.map((txt, i) =>
      '<button type="button" class="piece' + (a2pin[i] ? " on" : "") + (a1ready && !a2pin[i] && pinCount === i ? " next" : "") + '" data-a2="' + i + '"' + (a1ready ? "" : " disabled") + '><span class="tag">' + (a2pin[i] ? "✓" : "Homework") + "</span><span class='card-body'>" + phraseLines(txt) + "</span></button>"
    ).join("");
    const ex = EX[week];
    const rev = revealedContract(week);
    const casoEl = document.getElementById("caso");
    const btnCaso = document.getElementById("btn-caso");
    const casoPre = document.getElementById("caso-body");
    const mesaEl = document.getElementById("mesa");
    if (!a1ready || pinCount === 0) {
      casoEl.className = "is-hidden";
      if (mesaEl) mesaEl.classList.remove("has-caso");
      document.getElementById("caso-who").textContent = "";
      casoPre.textContent = "";
      btnCaso.disabled = true;
    } else {
      casoEl.className = pinCount < p.a2.length ? "partial" : "";
      if (mesaEl) mesaEl.classList.add("has-caso");
      const inLab = phase === "lab" || phase === "nota";
      document.getElementById("caso-who").textContent = inLab
        ? "Caso Nexo · Pix PJ"
        : "Contrato · " + pinCount + "/" + p.a2.length;
      casoPre.textContent = inLab && pinCount >= p.a2.length
        ? revealedExemplo(week)
        : rev.text;
      btnCaso.disabled = false;
    }
    document.getElementById("foot-a2").innerHTML = a1ready && !a2ready
      ? "<p class='lab-chip' style='margin:0'>Marque o que você já tem no seu cenário. O contrato cresce abaixo.</p>"
      : "";
    let cards3 = "";
    let foot3 = "";
    if (!a2ready) {
      cards3 = "";
      foot3 = "";
    } else if (phase === "nota") {
      cards3 = "<div class='nota-block'>"
        + "<p class='nota-lead'>" + phraseLines("Toque o botão abaixo para escolher 1, 2 ou 3.") + "</p>"
        + "</div>";
      foot3 = '<button type="button" id="btn-open-nota" class="cta-nota">Dar nota 1 · 2 · 3</button>';
    } else if (phase === "lab") {
      cards3 = labLabHtml();
      foot3 = "";
      if (showSetupNag()) {
        foot3 += "<p class='lab-chip' style='margin:0'>Antes do Lab: rode <b>setup-jornada.bat</b> (Windows) ou <b>setup-jornada.sh</b> (macOS/Linux).</p>";
        foot3 += '<button type="button" id="btn-goto-map" class="mesa-btn">Ir ao mapa · Setup</button>';
      }
    } else {
      cards3 = "";
      foot3 = "";
    }
    const toolsEl = document.getElementById("caso-tools");
    if (toolsEl) {
      toolsEl.hidden = true;
      toolsEl.innerHTML = "";
    }
    document.getElementById("cards-a3").innerHTML = cards3;
    document.getElementById("foot-a3").innerHTML = foot3;
    if (phase === "lab" && a2ready) fillLabFrames();
    const gotoMap = document.getElementById("btn-goto-map");
    if (gotoMap) gotoMap.onclick = () => {
      showMap();
      openMapSetup();
    };
    const openNota = document.getElementById("btn-open-nota");
    if (openNota) openNota.onclick = () => openNotaDialog();
    const labDoneBtn = document.getElementById("btn-lab-done");
    if (labDoneBtn) labDoneBtn.onclick = () => startGateFromLab();
    bindScoreButtons();
    document.querySelectorAll("[data-a1]").forEach((el) => {
      el.onclick = () => {
        railFocus = 1;
        a1open[Number(el.getAttribute("data-a1"))] = true;
        if (playOf().a1.every((_, i) => a1open[i]) && phase === "conceito") {
          phase = "raiz";
          railFocus = 2;
        }
        renderMesa();
        syncHud();
      };
    });
    document.querySelectorAll("[data-a2]").forEach((el) => {
      el.onclick = () => {
        if (!playOf().a1.every((_, i) => a1open[i])) return;
        railFocus = 2;
        a2pin[Number(el.getAttribute("data-a2"))] = true;
        if (playOf().a2.every((_, i) => a2pin[i]) && (phase === "raiz" || phase === "conceito")) {
          labDone = false;
          phase = "lab";
          railFocus = 3;
        }
        renderMesa();
        syncHud();
      };
    });
    if (phase === "nota") railFocus = 3;
    else if (phase === "lab") railFocus = Math.max(railFocus, 3);
    applyRailFocus();
    updateMesaTabs();
    bindRailTabs();
    syncHud();
  }

  function scoreScaleHtml() {
    return '<button type="button" class="nota-score-block low" data-n="1">'
      + '<b class="nota-score-num">1</b>'
      + '<span class="nota-score-title">Prompt reforço</span>'
      + "</button>"
      + '<button type="button" class="nota-score-block mid" data-n="2">'
      + '<b class="nota-score-num">2</b>'
      + '<span class="nota-score-title">Resultado ok, depois de algumas iterações</span>'
      + "</button>"
      + '<button type="button" class="nota-score-block ok" data-n="3">'
      + '<b class="nota-score-num">3</b>'
      + '<span class="nota-score-title">Resultado sem alucinações</span>'
      + "</button>";
  }

  function exemploTurma() {
    const ex = EX[week];
    const pv = ex.pv.map((row) => row.t + ": " + row.d).join("\n");
    return [
      "========== CASO NEXO · PIX PJ (copie o TIPO, não os números) ==========",
      CASO,
      "",
      ex.a2,
      "",
      "Assim parece o output:",
      pv,
      "========== FIM DO EXEMPLO =========="
    ].join("\n");
  }

  function muralCardText() {
    const lab = labOf();
    const W = WEEKS[week - 1];
    const id = "S" + String(week).padStart(2, "0");
    return [
      id + " · Wave 0" + W.w + " · " + W.t,
      "Lab: " + lab.cap,
      "Ferramenta: " + labToolsSummary(lab),
      "Entrega: " + lab.out,
      "Drive A2: " + filesOf(week).a2,
      "Drive A3: " + filesOf(week).a3,
      "",
      "Caso da turma (Aula 2):",
      EX[week].a2,
      "",
      lab.prompt,
    ].join("\n");
  }

  function closeDock() {
    const dock = document.getElementById("dock");
    dock.classList.remove("show", "nota");
    document.getElementById("stage").classList.remove("dock-open");
    document.getElementById("tips").classList.remove("show");
    document.getElementById("tips").innerHTML = "";
  }

  function openDock(kind) {
    closeCofre();
    if (kind !== "setup") return;
    const dock = document.getElementById("dock");
    const actions = document.getElementById("dock-actions");
    dock.classList.remove("nota");
    document.getElementById("tips").classList.remove("show");
    document.getElementById("tips").innerHTML = "";
    document.getElementById("dock-who").textContent = "Setup · pastas no Desktop";
    document.getElementById("dock-title").textContent = phraseLines("Criar pastas da jornada");
    document.getElementById("dock-meta").textContent = "Windows: setup-jornada.bat · macOS/Linux: ./setup-jornada.sh";
    document.getElementById("dock-prompt").textContent = setupPrompt();
    document.getElementById("dock-prompt").style.display = "";
    actions.innerHTML = '<button type="button" id="btn-setup-done" class="btn-feito">✓ Feito</button>';
    document.getElementById("btn-setup-done").onclick = finishSetup;
    dock.classList.add("show");
    document.getElementById("stage").classList.add("dock-open");
    syncHud();
  }

  function setupPrompt() {
    return [
      "PASTAS DA JORNADA — Desktop",
      "",
      "Windows (Prompt de Comando):",
      "  setup-jornada.bat",
      "",
      "macOS / Linux (Terminal):",
      "  chmod +x setup-jornada.sh",
      "  ./setup-jornada.sh",
      "",
      "Cria: AI-era-Leaders-Jornada/ (16 semanas + plus)",
      "",
      "Em cada semana:",
      "  · Cole o homework da Aula 2 em input-semana-XX.txt",
      "  · Salve o output do Lab IA na mesma pasta",
    ].join("\n");
  }

  function finishSetup() {
    save.setupS01 = true;
    persist();
    if (mode === "map") {
      closeDock();
      toast("Setup ok — entre na S01 quando quiser o Lab IA.");
      renderMapGadgets();
      syncHud();
      return;
    }
    phase = "lab";
    toast("Diretório " + COFRE_DIR + " pronto. Aba Lab IA.");
    railFocus = 3;
    renderMesa();
    syncHud();
  }

  function startGateFromLab() {
    if (showSetupNag()) {
      toast("Faça o Setup no mapa antes de fechar o Lab IA.", true);
      return;
    }
    labDone = true;
    phase = "nota";
    renderMesa();
    syncHud();
    openNotaDialog();
  }

  function applyScore(n) {
    closeNotaDialog();
    const lab = labOf();
    if (n === 1) {
      scoreLock = false;
      phase = "lab";
      labDone = false;
      reforco = true;
      stamps = { fato: false, hipotese: false, alucinacao: false };
      railFocus = 3;
      toast("Nota 1 — rode o reforço com o contrato ao lado.", true);
      renderMesa();
      syncHud();
      return;
    }
    closeDock();
    depositWeek(week);
    toast(n === 3
      ? phraseLines("Nota 3 — o primeiro output já era o foco. Salve em " + cofreRelPath(week, filesOf(week).a2) + " e " + cofreRelPath(week, filesOf(week).a3))
      : phraseLines("Nota 2 — depois das iterações, ficou bom. Salve em " + cofreRelPath(week, filesOf(week).a2) + " e " + cofreRelPath(week, filesOf(week).a3)));
    winWeek();
  }

  function winWeek() {
    if (winLock) return;
    winLock = true;
    if (!save.won.includes(week)) save.won.push(week);
    persist();
    if (week === 16) {
      toast("Campo fechado. Exporte o manifest.");
    } else if (isBonus(week)) {
      toast("Bônus no diretório. A trilha S11–S16 continua no mesmo lugar.");
    } else {
      toast("Semana " + String(week).padStart(2, "0") + " fechada · " + save.cofre.length + " artefato(s) no portfólio");
    }
    setTimeout(showMap, week === 16 ? 1600 : 900);
  }

  function toast(msg, bad) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.className = bad ? "bad show" : "show";
    clearTimeout(toastT);
    toastT = setTimeout(() => { el.className = bad ? "bad" : ""; }, 1800);
  }

  function setHint(title, detail) {
    hintB.textContent = title;
    hintS.textContent = phraseLines(detail);
    const barB = document.querySelector("#bar-status b");
    const barS = document.querySelector("#bar-status span");
    barB.textContent = title;
    barS.textContent = phraseLines(detail);
  }

  function syncHud() {
    document.getElementById("app").className = mode === "map" ? "is-map" : "is-level";
    const trailWon = save.won.filter((n) => n <= 16).length;
    document.getElementById("hud-streak").innerHTML = mode === "level"
      ? "<em>Semana</em>" + week + "/16"
      : "<em>Semanas</em>" + trailWon + "/16";
    const wavesEl = document.getElementById("hud-waves");
    if (wavesEl) wavesEl.innerHTML = "<em>Waves</em>" + wavesWonCount() + "/5";
    const lessonEl = document.getElementById("hud-lesson");
    if (lessonEl) {
      lessonEl.innerHTML = mode === "level"
        ? "<em>Aula</em>" + lessonStepLabel(phase)
        : "<em>Aula</em>—";
    }
    const mantraEl = document.getElementById("leader-mantra");
    const brandEl = document.getElementById("brand-name");
    if (brandEl) brandEl.textContent = COURSE_NAME;
    const pills = document.getElementById("pills");
    if (mode === "map") {
      document.getElementById("title").textContent = COURSE_NAME;
      mantraEl.textContent = "";
      mantraEl.hidden = true;
      const waveLine = WAVE_LINE[WEEKS[nextHole() - 1].w];
      document.getElementById("sub").textContent = waveLine;
      pills.innerHTML = "";
      const mapHint = needsSetupPrompt()
        ? "Margem direita · toque Setup · organize " + LEADER_DIR + " antes do Lab IA.\n" + waveLine
        : waveLine;
      setHint("Mapa da trilha", mapHint);
      return;
    }
    document.getElementById("title").textContent = weekTitle(week);
    document.getElementById("sub").textContent = "";
    mantraEl.textContent = "";
    pills.innerHTML = "";
    if (phase === "conceito") {
      setHint("Conceito", "Três ideias do Conceito");
    } else if (phase === "raiz") {
      const pins = a2pin.filter(Boolean).length;
      setHint("Homework Prático", pins ? "Continue marcando — o contrato cresce abaixo" : "Marque o que você já tem no seu cenário");
    } else if (phase === "lab") {
      if (showSetupNag()) {
        setHint("Lab IA", "Volte ao mapa · ilha Setup · depois abra o laboratório");
      } else {
        setHint("Lab IA", "Prompt · ferramenta · caso Nexo ao lado");
      }
    } else if (phase === "nota") {
      setHint("Fechamento", "Escolha 1, 2 ou 3 no painel");
    } else {
      setHint("Lab IA", "Prompt → ferramenta → salve em " + COFRE_DIR);
    }
    if (mode === "level") mantraEl.hidden = true;
  }

  function paintWaveLabels() {
    const won = wonSet();
    document.querySelectorAll("#wave-labels [data-w]").forEach((el) => {
      const w = Number(el.getAttribute("data-w"));
      const lit = IN_WAVE[w].some((n) => unlocked(n));
      el.style.color = WAVE_COLOR[w];
      el.style.opacity = lit ? "1" : "0.42";
      el.classList.toggle("wave-done", IN_WAVE[w].every((n) => won.has(n)));
    });
    if (mode !== "map") return;
    const mapField = document.getElementById("map-field");
    const tree = document.getElementById("ex-tree");
    if (!mapField || !tree) return;
    const mfRect = mapField.getBoundingClientRect();
    const mapH = mfRect.height;
    if (mapH < 8) return;
    document.querySelectorAll("#wave-labels [data-w]").forEach((el) => {
      const w = Number(el.getAttribute("data-w"));
      const waveEl = tree.querySelector('.ex-wave[data-wave="' + w + '"]');
      if (!waveEl) return;
      const wr = waveEl.getBoundingClientRect();
      const cy = wr.top + wr.height / 2 - mfRect.top;
      el.style.top = cy + "px";
      el.style.left = "";
      el.style.width = "";
    });
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(canvas.clientWidth);
    const h = Math.floor(canvas.clientHeight);
    if (w < 8 || h < 8) return;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paintWaveLabels();
    renderMapGadgets();
  }

  function mapMetrics(w, h) {
    const s = Math.max(0.48, Math.min(1.4, Math.min(w / 560, h / 400)));
    const padL = Math.max(12, w * 0.05);
    const padR = Math.max(12, w * 0.05);
    const padT = Math.max(12, h * 0.045);
    const padB = Math.max(14, h * 0.05);
    return {
      padL, padR, padT, padB,
      cx: padL + (w - padL - padR) / 2,
      top: padT,
      bot: h - padB,
      w, h, s
    };
  }

  function trailPoint(m, t) {
    const y = m.bot - t * (m.bot - m.top);
    const amp = (m.w - m.padL - m.padR) * (0.16 + t * 0.22);
    let x = m.cx + Math.sin(t * Math.PI * 2.15 + 0.4) * amp;
    x = Math.max(m.padL + 18, Math.min(m.w - m.padR - 18, x));
    return { x, y };
  }

  function trailNodesEven(m, count) {
    const steps = 240;
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      pts.push(Object.assign({ t }, trailPoint(m, t)));
    }
    const cum = [0];
    for (let i = 1; i < pts.length; i++) {
      cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
    }
    const total = cum[cum.length - 1];
    const nodes = [];
    for (let s = 0; s < count; s++) {
      const target = count === 1 ? 0 : (s / (count - 1)) * total;
      let j = 1;
      while (j < cum.length && cum[j] < target) j++;
      const seg = cum[j] - cum[j - 1];
      const f = seg > 0 ? (target - cum[j - 1]) / seg : 0;
      const p0 = pts[j - 1];
      const p1 = pts[j];
      nodes.push({
        x: p0.x + (p1.x - p0.x) * f,
        y: p0.y + (p1.y - p0.y) * f,
        t: p0.t + (p1.t - p0.t) * f,
      });
    }
    return nodes;
  }

  function weekNode(m, n) {
    return trailNodesEven(m, 16)[Math.min(15, Math.max(0, n - 1))];
  }

  function mapLayout(w, h) {
    const m = mapMetrics(w, h);
    return trailNodesEven(m, 16).map((p, i) => ({
      n: i + 1,
      x: p.x,
      y: p.y,
      wave: WEEKS[i].w,
      t: p.t,
    }));
  }

  function hexRgb(hex) {
    const h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  function rgba(hex, a) {
    const c = hexRgb(hex);
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")";
  }

  function drawMap(w, h) {
    ctx.clearRect(0, 0, w, h);
    const m = mapMetrics(w, h);
    const nodes = mapLayout(w, h);
    const won = wonSet();
    const now = performance.now() / 1000;
    const nxt = nextHole();
    const cuts = [0, 2, 6, 10, 14, 16];
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#EDE8F4");
    sky.addColorStop(1, "#F4F4F4");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (let wave = 1; wave <= 5; wave++) {
      const t0 = cuts[wave - 1] / 15;
      const t1 = Math.min(1, (cuts[wave] - 0.02) / 15);
      const lit = IN_WAVE[wave].some((n) => unlocked(n));
      ctx.beginPath();
      for (let i = 0; i <= 32; i++) {
        const p = trailPoint(m, t0 + (t1 - t0) * (i / 32));
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = rgba(WAVE_COLOR[wave], lit ? 0.16 : 0.07);
      ctx.lineWidth = Math.max(28, Math.min(72, 58 * m.s));
      ctx.stroke();
    }

    ctx.beginPath();
    for (let i = 0; i <= 90; i++) {
      const p = trailPoint(m, i / 90);
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.strokeStyle = "rgba(255,255,255,0.88)";
    ctx.lineWidth = Math.max(10, 16 * m.s);
    ctx.stroke();

    const crowd = Math.round((90 + save.cofre.length * 2) * (0.7 + m.s));
    for (let i = 0; i < crowd; i++) {
      const t = (i / crowd + now * 0.012) % 1;
      const p = trailPoint(m, t);
      const q = trailPoint(m, Math.min(1, t + 0.01));
      const dx = q.x - p.x;
      const dy = q.y - p.y;
      const len = Math.hypot(dx, dy) || 1;
      const lane = ((i % 7) - 3) * (1.6 * m.s);
      const px = p.x + (-dy / len) * lane;
      const py = p.y + (dx / len) * lane;
      const weekN = 1 + Math.floor(t * 15);
      const walking = unlocked(Math.min(16, weekN));
      const col = walking ? WAVE_COLOR[WEEKS[Math.min(15, weekN - 1)].w] : "#FFFFFF";
      ctx.beginPath();
      ctx.arc(px, py, (walking ? 2.2 : 1.7) * m.s, 0, Math.PI * 2);
      ctx.fillStyle = walking ? rgba(col, 0.72) : "rgba(255,255,255,0.92)";
      ctx.fill();
      if (!walking) {
        ctx.strokeStyle = "rgba(180,180,188,0.55)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }

    function drawWeekFlag(nd, col, r, breathe) {
      const cr = r * breathe;
      const side = nd.x >= m.cx ? -1 : 1;
      const poleX = nd.x + side * Math.max(8, cr * 0.62);
      const baseY = nd.y - cr * 0.72;
      const poleH = 14 * m.s;
      const topY = baseY - poleH;
      ctx.strokeStyle = "rgba(51,51,51,0.88)";
      ctx.lineWidth = Math.max(1.4, 1.8 * m.s);
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(poleX, baseY + 1);
      ctx.lineTo(poleX, topY);
      ctx.stroke();
      const fh = 8 * m.s;
      const fw = 9 * m.s;
      const flagDir = side;
      ctx.beginPath();
      ctx.moveTo(poleX, topY);
      ctx.lineTo(poleX + fw * flagDir, topY + fh * 0.5);
      ctx.lineTo(poleX, topY + fh);
      ctx.closePath();
      ctx.fillStyle = col;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }

    nodes.forEach((nd) => {
      const open = unlocked(nd.n);
      const done = won.has(nd.n);
      const here = nd.n === nxt && !done;
      const col = WAVE_COLOR[nd.wave];
      const r = (12 + (here ? 3 : 0) + (done ? 1 : 0)) * m.s;
      const breathe = here ? 1 + Math.sin(now * 2.3) * 0.09 : 1;
      if (here || done) {
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, (r + 11) * breathe, 0, Math.PI * 2);
        ctx.fillStyle = rgba(col, here ? 0.26 : 0.14);
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(nd.x, nd.y, r * breathe, 0, Math.PI * 2);
      ctx.fillStyle = done || open ? col : "#FFFFFF";
      ctx.fill();
      ctx.lineWidth = 2.6;
      ctx.strokeStyle = done || open ? "#FFFFFF" : "#CCCCCC";
      ctx.stroke();
      ctx.fillStyle = done || open ? "#FFFFFF" : "#888888";
      ctx.font = "700 " + Math.max(9, 11 * m.s) + "px Montserrat, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(nd.n), nd.x, nd.y);
    });

    nodes.forEach((nd) => {
      if (!won.has(nd.n)) return;
      const col = WAVE_COLOR[nd.wave];
      const here = nd.n === nxt;
      const r = (12 + (here ? 3 : 0) + 1) * m.s;
      const breathe = here ? 1 + Math.sin(now * 2.3) * 0.09 : 1;
      drawWeekFlag(nd, col, r, breathe);
    });
  }

  function render() {
    if (mode !== "map") return;
    const w = canvas.clientWidth;
    const hgt = canvas.clientHeight;
    if (w && hgt) drawMap(w, hgt);
  }

  function tick() {
    render();
    requestAnimationFrame(tick);
  }

  canvas.addEventListener("pointerdown", (ev) => {
    if (mode !== "map") return;
    ev.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const nodes = mapLayout(rect.width, rect.height);
    const s = mapMetrics(rect.width, rect.height).s;
    const hitR = Math.max(24, 32 * s);
    const hits = nodes
      .filter((nd) => unlocked(nd.n))
      .map((nd) => ({ nd, d: Math.hypot(nd.x - x, nd.y - y) }))
      .filter((o) => o.d < hitR)
      .sort((a, b) => a.d - b.d);
    if (!hits.length) return;
    enterWeek(hits[0].nd.n);
  });

  document.getElementById("btn-dock-close").onclick = closeDock;
  document.getElementById("btn-cofre-close").onclick = closeCofre;
  document.getElementById("btn-caso").onclick = () => {
    const t = document.getElementById("caso-body").textContent;
    if (!t) return;
    navigator.clipboard.writeText(CASO + "\n\n" + t).then(() => toast("Caso copiado")).catch(() => toast("Copie o texto de baixo", true));
  };
  document.getElementById("btn-cofre").onclick = () => {
    const el = document.getElementById("cofre");
    const open = !el.classList.contains("show");
    if (open) closeDock();
    el.classList.toggle("show", open);
    if (open) renderCofre();
  };
  document.getElementById("btn-export").onclick = () => {
    const blob = new Blob([JSON.stringify(manifestOut(), null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "jornada.manifest.json";
    a.click();
    toast("Manifest pronto — cole em " + LEADER_DIR);
  };
  document.getElementById("file-manifest").onchange = (ev) => {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!Array.isArray(data.artefatos)) throw new Error("sem artefatos");
        save.cofre = data.artefatos;
        data.artefatos.forEach((x) => {
          if (x.semana && !save.won.includes(x.semana) && x.aula === 3) save.won.push(x.semana);
        });
        save.won.sort((a, b) => a - b);
        persist();
        renderCofre();
        renderExplorer();
        syncHud();
        toast("Diretório alimentado pelo manifest");
      } catch (e) {
        toast("Manifest inválido", true);
      }
    };
    reader.readAsText(file);
  };
  document.getElementById("btn-back").onclick = showMap;
  const notaLater = document.getElementById("nota-later");
  if (notaLater) {
    notaLater.onclick = () => {
      closeNotaDialog();
      if (phase === "nota") {
        phase = "lab";
        renderMesa();
        syncHud();
      }
    };
  }
  document.getElementById("btn-clear").onclick = () => {
    if (mode !== "level") return;
    enterWeek(week);
  };
  document.getElementById("btn-reset").onclick = () => {
    save = { won: [], cofre: [], setupS01: false };
    persist();
    showMap();
  };

  function bootFromUrl() {
    const w = Number(new URLSearchParams(location.search).get("week"));
    if (!(w >= 1 && w <= 17)) return;
    if (!unlocked(w)) { toast("Vença a semana anterior", true); return; }
    enterWeek(w);
  }

  window.addEventListener("resize", resize);
  if (window.ResizeObserver) {
    new ResizeObserver(function () {
      resize();
    }).observe(canvas);
    const exTree = document.getElementById("ex-tree");
    if (exTree) {
      new ResizeObserver(function () {
        paintWaveLabels();
      }).observe(exTree);
    }
  }
  resize();
  renderExplorer();
  paintWaveLabels();
  syncHud();
  loadBrand().then(() => {
    resize();
    bootFromUrl();
    requestAnimationFrame(() => {
      resize();
      requestAnimationFrame(tick);
    });
  });
}