---
id: domain-game
titulo: Domain — Game (Jornada do Aluno)
id_feature: FEAT-JORNADA
versao: "1.0"
atualizado_em: "2026-09-01"
---

# domain/game/

**5º domain.** Runtime autônomo da jornada gamificada — `play.html` + `game/` + `aluno/` rodam sem import de Trilhas, Library ou agents do Loop.

O aluno **guarda** cada output na pasta da jornada (`AI-First-Operations-Leadership-Jornada` no Desktop, depois Drive) e a semana seguinte **lê** o Homework aula 02. Na semana 16 exporta o manifest e consolida os 3 artefatos da trilha. Oferta viva: **AI-First Operations Leadership** (`INI-AFSL-AS`).

| Rastreio | Onde |
|----------|------|
| Card FL2 | [`FEAT-JORNADA`](../core/FL02-loop-frameworks/loop-workitem/features/jornada-aluno-jogo/README.md) |
| BC | [`jornada-aluno.md`](../core/bounded-contexts/jornada-aluno.md) |
| Projeto | [`prj-aiel-as`](../core/FL02-loop-frameworks/loop-workitem/projetos/prj-aiel-as/) |
| Tabuleiro (regras) | [`jogo-dois-trilhos.md`](../trilhas-conhecimento/AI-first-Systems-Leadership/densidade-pedagogica/jogo-dois-trilhos.md) |

Spec Mosby: [`spec-mosby.md`](./spec-mosby.md).

## Rodar

```bash
cd domain/game
python -m http.server 8765
```

Abrir `http://127.0.0.1:8765/play.html` (módulos ES exigem servidor local).

## User Stories (síntese)

| ID | Enunciado | Fatia Patton |
|----|-----------|--------------|
| `US-JOR-01` | Como aluno, quero ver a semana no mapa (A1 aberta; A3 trava sem A2) para não pular a Raiz | Walking skeleton |
| `US-JOR-02` | Como aluno, quero registrar evidência da Aula 2 e nota de gate da Aula 3 para fechar a semana | Skeleton + persistência |
| `US-JOR-03` | Como aluno, quero o visual do parceiro (kit) sem mudar as regras do tabuleiro | Brand pack |
| `US-JOR-04` | Como autora, quero o progresso opcional no host (Hotmart / WP / Udemy) sem o domínio conhecer o LMS | Porta Generic |
| `US-JOR-05` | Como aluno, quero guardar A2/A3 com nomes que o engine aponta e, na S16, alimentar o git com o Drive | Cofre + manifest |

## arquitetura-folder

Inventário desta pasta. Qualquer alteração aqui atualiza **esta** seção no mesmo passo.

| Elemento | Tipo | Papel | Liga a |
|----------|------|-------|--------|
| [`README.md`](./README.md) | domain | Hub do Game (FEAT-JORNADA) | BC [`jornada-aluno.md`](../core/bounded-contexts/jornada-aluno.md) · stub FL2 |
| [`spec-mosby.md`](./spec-mosby.md) | spec | DDD + Clean + USM | [`jornada-usuario.md`](../core/FL01-loop-universe/loop-arq/processos/jornada-usuario.md) |
| [`play.html`](./play.html) | jogo | Shell HTML + campo do mapa | [`game/`](./game/README.md) |
| [`setup-jornada.bat`](./setup-jornada.bat) | rotina | Windows — cria pasta no Desktop | [`game/js/app.js`](./game/js/app.js) Setup |
| [`setup-jornada.sh`](./setup-jornada.sh) | rotina | macOS/Linux — mesma árvore no Desktop | [`game/js/app.js`](./game/js/app.js) Setup |
| [`game/`](./game/README.md) | runtime | CSS + engine ES modules + ilhas de conteúdo | `play.html` · `brand-config.json` · `aluno/` |
| [`game/content/casos-exemplo.js`](./game/content/casos-exemplo.js) | conteúdo | 5 times de exemplo (um por wave) | Lab aula 03 · `Prompt exemplo` |
| [`emitir-casos-exemplo.py`](./emitir-casos-exemplo.py) | rotina | Espelha os exemplos no `aluno/` e na V.2 | `python emitir-casos-exemplo.py` |
| [`brand-config.json`](./brand-config.json) | projeção | HEX/tipo do slug ativo (commitado; não inventar) | [`partners/agile-school/brand-config.json`](../partners/agile-school/brand-config.json) · [`emitir-brand-config.py`](./emitir-brand-config.py) |
| [`emitir-brand-config.py`](./emitir-brand-config.py) | rotina | Opcional: copia projeção do kit Parceiro | `python emitir-brand-config.py --slug=agile-school` |
| [`cofre-artefatos.md`](./cofre-artefatos.md) | contrato | Nomes Homework/Lab + Drive + git | [`laboratorio-ia-mercado.md`](../trilhas-conhecimento/AI-first-Systems-Leadership/densidade-pedagogica/laboratorio-ia-mercado.md) |
| [`jornada.manifest.schema.json`](./jornada.manifest.schema.json) | schema | O que o engine aceita | [`aluno/jornada.manifest.json`](./aluno/jornada.manifest.json) |
| [`pedidos-jornada-resumo.md`](./pedidos-jornada-resumo.md) | doc | Inventário de pedidos + status | trilha cognitiva |
| [`REVISAO-2026-08-30.md`](./REVISAO-2026-08-30.md) | doc | Log da revisão noturna | [`game/js/app.js`](./game/js/app.js) |
| [`aluno/`](./aluno/README.md) | pacote | Workspace: 5 waves → 16 semanas | Drive do aluno · 3 prompts · S09 IDE |
