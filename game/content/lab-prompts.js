/**
 * Prompts estruturados do Lab IA — seções 1–6 (Persona · Contexto · Tarefa · Exemplo · Formato · Tom).
 */
const CRITICAL =
  "⚠️ RESTRIÇÃO CRÍTICA: Use APENAS fatos explícitos que aparecem descritos no cenário atual e nos insumos fornecidos. "
  + "É estritamente proibido inventar dados, usar conhecimentos gerais da web ou assumir que \"todo time faz isso\". "
  + "Se não está descrito no cenário atual, não existe.";

const TOM =
  "Direto, técnico, pragmático e totalmente orientado a entregas. "
  + "Evite floreios teóricos, introduções corteses ou conclusões em formato de ensaio no chat. "
  + "Vá direto ao bloco de código Markdown.";

const EXEMPLO_PADRAO =
  "Siga a lógica do Caso Nexo (painel lateral): use o tipo de evidência factual e a dor real constatada — nunca métricas inventadas ou deduções sem lastro.\n"
  + "- Exemplo ruim: ROI sem baseline, app genérico, dado fora do cenário fornecido.\n"
  + "- Exemplo bom: apontar a dor exata relatada pelo time com evidência do homework da Aula 2.";

function ctxHomework(homework, pad, a2File) {
  return [
    "Analise o painel lateral fornecido e o arquivo `input-semana-" + pad + ".txt` com o insumo da Aula 2.",
    homework,
  ].join("\n");
}

const WEEK_SPECS = {
  1: {
    persona:
      "Você é um Facilitador de Transformação Organizacional focado em eficácia operacional.\n"
      + "- Suas Hard Skills são: Documentação executável em Markdown, mapeamento de tabelas de capacidades e matriz RACI implícita.\n"
      + "- Suas Soft Skills são: Você confronta a ambiguidade de forma direta. Recusa veementemente entregáveis sem um dono claro (\"ownership\") e sem uma frase de trava vinculada ao nome do responsável.",
    contextoExtra:
      "Você deve extrair rigorosamente:\n"
      + "- Pelo menos 5 autores no Gantt (exatamente 1 por era histórica/marco), com contribuição em 1 frase curta.\n"
      + "- O cruzamento exato de cada método mapeado com os três pilares: Product / Tech Delivery / Human & AI.\n"
      + "- Um baseline honesto: descreva apenas o que o time já pratica no dia a dia, sem romantizar ou nomear frameworks acadêmicos.",
    tarefa: (f) =>
      "Gere o conteúdo completo e integral para o arquivo `" + f.a3 + "`.\n"
      + "- NÃO resuma o conteúdo no chat.\n"
      + "- NÃO pule seções.\n"
      + "- Preencha cada lacuna com base estritamente nos dados extraídos do cenário atual.",
    formato: () =>
      "Forneça o bloco de código Markdown pronto para copiar e salvar, seguindo rigorosamente:\n\n"
      + "```markdown\n# S01-A3-arena.md\n\n## 1. Identificação do Time\n[Nome do time em 1 linha]\n\n"
      + "## 2. Mapa As-Is dos 3 Pilares\n\n### Pilar: Product\n- **Dor Identificada:**\n- **Fato do Gantt (Evidência):**\n- **Baseline Praticado:**\n\n"
      + "### Pilar: Tech Delivery\n- **Dor Identificada:**\n- **Fato do Gantt (Evidência):**\n- **Baseline Praticado:**\n\n"
      + "### Pilar: Human & AI\n- **Dor Identificada:**\n- **Fato do Gantt (Evidência):**\n- **Baseline Praticado:**\n\n"
      + "## 3. GATE HUMANO\n* **PARA:**\n* **QUEM (LÍDER APROVADOR):**\n* **SÓ DEPOIS:**\n* **FRASE DE TRAVA:**\n```",
  },
  2: {
    tarefa: (f) =>
      "No Project, reescreva só as contramedidas do A3 da Aula 2 em duas colunas — kaizen | kaikaku — sem inventar causa. "
      + "Cada linha precisa de evidência do A3. Se faltar fato, marque HIPÓTESE. Salve como `" + f.a3 + "`.",
    formato: (lab) => "Exporte markdown completo pronto para `" + (lab.casca ? "S02-A3-project.md" : "arquivo da semana") + "`.",
  },
  3: {
    tarefa: () =>
      "Mostre o raciocínio da classe ANTES do rótulo para 5 entregas reais do homework. "
      + "Para cada: Output / Outcome / Impact e 1 frase de evidência. Depois: diagrama mermaid da Hierarquia de Valor.",
    formato: () => "Markdown estruturado e bloco mermaid. Não resuma no chat.",
  },
  4: {
    tarefa: () =>
      "Workflow: 1) leia o baseline colado 2) resuma os KRs 3) NÃO altere o alvo. "
      + "KR sem baseline medido = INVÁLIDO. Gere gráfico simples baseline → hoje → target.",
    formato: () => "Tabela ou gráfico com unidades e nota de validação em markdown.",
  },
  5: {
    tarefa: () =>
      "Gere protótipo SÓ da fatia IN do PBB. Não implemente OUT. "
      + "Inclua link do protótipo e 1 imagem da jornada da persona. O MVP deve ligar ao KR da S04.",
    formato: () => "URL do protótipo, referência da imagem e nota de ligação ao OKR em markdown.",
  },
  6: {
    tarefa: () =>
      "Avalie as 3 user stories da Aula 2 com Scorecard INVEST (1–3 por critério). "
      + "Some o total (máx. 18). Regra: qualquer nota 1 = REPROVADA. "
      + "Proibido 3 em tudo sem justificativa. Sugira ajuste mínimo só para reprovadas.",
    formato: () => "Tabela por story: critério · nota 1–3 · justificativa · total · veredito.",
  },
  7: {
    tarefa: () =>
      "Com os artefatos da Aula 2 no caderno: liste 8–12 termos conflitantes COM citação do arquivo. "
      + "Depois gere o Overview. Termo sem citação = alucinação.",
    formato: () => "Glossário citado e link ou nota do Overview.",
  },
  8: {
    tarefa: (f) =>
      "Monte `" + f.a3 + "` com LT, CT, TH, WIP e CFD em linguagem do time; Lei de Little (LT ≈ WIP ÷ TH); "
      + "diagrama mermaid do fluxo. Use só números do homework — não invente target externo.",
    formato: () => "Arquivo markdown completo com seções numeradas e diagrama mermaid.",
  },
  9: {
    tarefa: (f) =>
      "A partir da lista fica/sai/muda da Aula 2, desenhe board Agora / Proposta / Voto e 1 pergunta de voto. "
      + "NÃO declare o ritmo vencedor. Salve em `" + f.a3 + "`.",
    formato: () => "Markdown colável no Mural ou IDE — não ensaio no chat.",
  },
  10: {
    tarefa: () =>
      "Gere apresentação curta com 3 cenários de ROI (conservador / base / agressivo) a partir do Passaporte FinOps. "
      + "Slide final = teto assinado por humano. Não recomende só o agressivo.",
    formato: () => "5 slides (Gamma/PDF) e nota do teto em markdown.",
  },
  11: {
    tarefa: () =>
      "Do mapa da Aula 2: 1 nó com automação sem LLM (n8n/Zapier), 1 nó com IDE/GenAI e 1 etapa proibida ao agente. "
      + "Proibido agente em decisão de valor ou gate humano.",
    formato: () => "Dois fluxos documentados (diagrama ou export) com legenda de gates.",
  },
  12: {
    tarefa: () =>
      "Gere persona.md, steering.md e skill.md no disco e hook (evento → condição → gate). "
      + "Inclua 3 proibições no steering. Custom GPT sem arquivo não conta.",
    formato: () => "Três arquivos markdown completos prontos para salvar no repositório.",
  },
  13: {
    tarefa: (f) =>
      "Escreva spec do maestro da Aula 2: requirements, design, gates. NÃO commitar código antes da spec. "
      + "Diagrama: input → roteamento → specialists → gate humano. Salve `" + f.a3 + "`.",
    formato: () => "Spec markdown com contratos de entrada/saída e runbook de falha.",
  },
  14: {
    tarefa: (f) =>
      "A KB da Aula 2 é a base (RAG). Escreva 3 casos de eval com limiar numérico. "
      + "Sem limiar o workflow não promove. Fine-tune só se a KB falhar — documente a decisão. Salve `" + f.a3 + "`.",
    formato: () => "Casos de teste, limiar e relatório eval em markdown.",
  },
  15: {
    tarefa: () =>
      "Alimente o Project com a timeline da Aula 2. Categorias = as do líder. "
      + "Recuse PDI CHA genérico. Entregue 1 gap SMART de duas semanas com evidência.",
    formato: () => "Configuração do Project descrita e gap SMART em markdown.",
  },
  16: {
    tarefa: (f) =>
      "Suba o pacote do ano e gere Overview. A decisão do ritual é escrita offline pelo líder — o modelo não escolhe. Salve `" + f.a3 + "`.",
    formato: () => "Overview e seção separada \"Decisão offline (humano)\" em markdown.",
  },
  17: {
    tarefa: (f) =>
      "Preencha `" + f.a3 + "` estressando a unidade que o time escreveu na Aula 2 — sem inventar PF/COSMIC/LOC. "
      + "Se o bloco da Aula 2 estiver vazio, PERGUNTE. Recuse velocity como tamanho.",
    formato: () =>
      "Markdown com lente copiada, 3 tentações de inflar a unidade, o que a diretoria entenderia errado e GATE HUMANO.",
  },
};

export function buildLabPrompt(week, { reforco, homework, files, lab, persona }) {
  const pad = String(week).padStart(2, "0");
  const spec = WEEK_SPECS[week] || {};
  const personaBlock = spec.persona || persona;
  const ctx = [
    ctxHomework(homework, pad, files.a2),
    spec.contextoExtra || "",
    CRITICAL,
  ].filter(Boolean).join("\n\n");

  const tarefaFn = spec.tarefa || (() => lab.prompt || "Execute a entrega da Aula 3 com os insumos fornecidos.");
  const formatoFn = spec.formato || (() => lab.casca ? "Use o modelo de referência abaixo — mantenha os títulos das seções.\n\n" + lab.casca : "Markdown completo pronto para salvar no arquivo da semana.");

  const sections = [
    "# 1. PERSONA",
    personaBlock,
    "",
    "# 2. CONTEXTO",
    ctx,
    "",
    "# 3. TAREFA",
    tarefaFn(files),
    "",
    "# 4. EXEMPLO",
    EXEMPLO_PADRAO,
    "",
    "# 5. FORMATO",
    formatoFn(lab),
    "",
    "# 6. TOM",
    reforco
      ? "Modo reforço: chat novo, auditor rigoroso. O output anterior foi invalidado. " + TOM
      : TOM,
  ];

  if (reforco) {
    sections.splice(4, 0, "Feche o chat que alucinou. Abra um chat novo antes de colar este prompt.\n");
  }

  return sections.join("\n");
}
