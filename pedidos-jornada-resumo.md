---
id: pedidos-jornada-resumo
titulo: Resumo dos pedidos — Jornada Aluno (Mylena)
atualizado_em: "2026-08-30"
---

# Pedidos da jornada — status

Legenda: **✅** feito · **🟡** parcial · **❌** pendente

Fonte da trilha: [`04-trilha-cognitiva-master-ai-first-systems-leadership.md`](../trilhas-conhecimento/AI-first-Systems-Leadership/04-trilha-cognitiva-master-ai-first-systems-leadership.md)

---

## Propósito e pedagogia

| Pedido | Status | Notas |
|--------|--------|-------|
| Jogo como instrumento Aula 1+2 → prática Aula 3, não formulário genérico | ✅ | 16 semanas revisadas; tom de líder; siglas explicadas |
| Conceitos da Aula 3 no game **antes** do Lab IA (sem passar slide) | ✅ | Fase `brief` + `aula03-brief.js` — 3 LOs + trilha/grade S01; depois o prompt |
| Cofre `aluno/` com nomes fixos `Snn-An-*` + manifest na S16 | ✅ | `cofre-artefatos.md`, `setup-cofre.py`, import/export manifest |
| Três agents da autora + engine; trilha não depende do jogo | ✅ | Mosby: runtime em `game/` consome trilha |

---

## Setup e Plus (mapa)

| Pedido | Status | Notas |
|--------|--------|-------|
| Setup **fora** do serpentino — ilha no espaço vazio, perto da referência S01 | ✅ | Círculos `#map-gadgets` na margem direita; dock abre no mapa |
| Links ChatGPT/Gemini abaixo de Copiar Aula 2 | ✅ | `#caso-tools` no contrato |
| Setup **acionável** (abre painel com passos) | 🟡 | `openMapSetup` + dock no mapa; testar após recarregar |
| Plus (bônus medida) fora da trilha, desbloqueia após FinOps (S10) | ✅ | Círculo Plus em `#map-gadgets`; bloqueado até S10 |
| Não sujar a coluna W01–W05 nem o explorer com gadgets | 🟡 | Ilhas só no canvas; explorer continua com waves |

---

## UI / UX — estrutura

| Pedido | Status | Notas |
|--------|--------|-------|
| Terminologia: **Conceito · Homework Prático · Lab IA** | ✅ | Abas `#mesa-tabs` |
| Header na aula: **só** `Semana XX — [frase trilha cognitiva]` | ✅ | `weekTitle()` + `SEMANA_TRILHA`; sem AI-era Leaders na mesa |
| Mapa: título **AI-first Systems Leadership** (sem subtítulo mantra) | ✅ | Só `#title` no mapa |
| HUD mapa: Semanas + Waves no canto | ✅ | `#hud-streak`, `#hud-waves` |
| HUD na aula: só andamento (ex. Conceito · 1/4) | ✅ | `#hud-lesson` |
| Explorer alinhado às 5 waves da trilha master | 🟡 | Ordem W05→W01; título do explorer = frase da próxima semana |
| Mesa: uma coluna por vez (abas), sem rails estreitos quebrando texto | ✅ | Refactor `mesa-tabs` |
| Contrato A2 oculto até 1º pin; cresce a cada clique no homework | ✅ | `#caso` + `revealedContract` |
| Cards marcados colapsam em uma linha | ✅ | `.piece.on` esconde corpo |
| Notas 1·2·3 com labels e botões funcionando | ✅ | Modal `#nota-dialog` centralizado; abre ao fechar o Lab IA |
| Zerar jornada só no mapa | ✅ | `#btn-reset` oculto em `.is-level` |
| Remover "Agile School" da UI | ✅ | Brand via `brand-config.json` |
| Cofre na UI = **`aluno/`** / Diretório | ✅ | Labels atualizados |
| Visual inspirado em contrato isométrico (hierarquia, fundo limpo) | 🟡 | Órbitas/círculos; polish visual incompleto |
| Mobile responsivo sem sobreposição | 🟡 | CSS responsivo; falta teste real em vários devices |
| Quebra de linha após ponto final (prosa coesa) | ✅ | `phraseLines()` |

---

## Conteúdo (Conceito e tom)

| Pedido | Status | Notas |
|--------|--------|-------|
| Menos coach / casos fake (Marina etc.) | ✅ | 5 times (Vértice, Atlas, Lumen, Harbor, Cora); papéis antes do nome; copie o TIPO |
| Nomes ligados a autores, não personagens inventados | ✅ | Labs citam autores; conceito sem teatro |
| No Conceito: evitar **wave, semana, slide** no texto dos cartões | ✅ | Varredura S01–S16 |
| Conteúdo denso e real (não teatro) | ✅ | Alinhado à densidade pedagógica |

---

## Arquitetura (Mosby)

| Pedido | Status | Notas |
|--------|--------|-------|
| Runtime em `game/`; jogo consome trilha; trilha não depende do jogo | ✅ | `play.html` shell + `game/js/boot.js` |
| `MAP_ISLANDS` em `game/content/` | ✅ | `map-islands.js` |
| README `arquitetura-folder` atualizado | ✅ | `game/README.md`, feature README |

---

## Hospedagem

| Pedido | Status | Notas |
|--------|--------|-------|
| `patronloop.com` — tela escura, botão AI-era Leaders, senha `human loop` | ✅ | `outer-layers/adapters/patronloop-site/` |
| Deploy público | ❌ | Domínio no Squarespace; uso solo = local por enquanto |
| Script `publicar-aiel.py` | ✅ | Copia jogo → `aiel/` |

---

## Bugs / ajustes recentes (esta sessão)

| Item | Status |
|------|--------|
| Pop-up de nota aparecendo embaixo da aula | ✅ | Dialog fora do `#app`, centralizado; não auto-abre no `renderMesa` |
| Título duplicado no mapa | ✅ | Mapa: AI-first Systems Leadership; aula: Semana + trilha |
| Setup não abria no mapa | 🟡 | Dock com `z-index` no mapa; confirmar clique na ilha |
| Bússola Wave 01 + exemplos além do Nexo (11 set 2026) | ✅ | Base (não chão); 5 times em `casos-exemplo.js`; A3 teatro ágil na S02 |

---

## Entrega noturna (30 ago 2026)

| Item | Status |
|------|--------|
| Revisão PLAY S01–S16 + bônus | ✅ |
| Cofre (`FILES`, setup-cofre, READMEs) unificado | ✅ |
| Runtime promovido para `domain/game/` (01 set 2026) | ✅ |
| Espelho `AI-era Leaders v.1/` removido | ✅ |
| PPT pack canônico em `outer-layers/outputs/ini-aiel-as/export-drive/` | ✅ |
| PPTs ouro S01 A1+A2 preservados (sync sem regenerar gerador) | ✅ |

Log completo: [`REVISAO-2026-08-30.md`](./REVISAO-2026-08-30.md)

---

## Como testar agora

```bash
cd domain/game
python -m http.server 8765
```

Abra `http://127.0.0.1:8765/play.html` — hard refresh (`Ctrl+Shift+R`).

**Fechamento com nota:** Lab IA → **✓ Feito** → painel 1·2·3.
