# Pacote `game/` — runtime desacoplado

Motor da jornada gamificada. **Consome** trilha como pacote de conteúdo (`content/`) e adapters (`brand-config.json`, pasta `aluno/`). O BC Trilhas **não** depende deste diretório.

Spec: [`../spec-mosby.md`](../spec-mosby.md).

## arquitetura-folder

| Elemento | Tipo | Papel | Liga a |
|----------|------|-------|--------|
| [`README.md`](./README.md) | hub | Inventário do runtime | [`play.html`](../play.html) · FEAT-JORNADA |
| [`css/play.css`](./css/play.css) | skin | Layout, mapa, ilhas (`#map-gadgets`), mesa, mobile | `play.html` |
| [`js/boot.js`](./js/boot.js) | bootstrap | Monta engine + pacote de conteúdo | [`app.js`](./js/app.js) · [`map-islands.js`](./content/map-islands.js) |
| [`js/app.js`](./js/app.js) | engine | Estado, mapa, mesa, portfólio, dock | BC Jornada · `localStorage` |
| [`content/map-islands.js`](./content/map-islands.js) | conteúdo | Ilhas Setup/Plus **fora** do serpentino | [`plus-s01-setup-cofre.md`](../../../../../trilhas-conhecimento/AI-era-Leaders/densidade-pedagogica/plus-s01-setup-cofre.md) |
| [`content/lab-deliverables.js`](./content/lab-deliverables.js) | conteúdo | Título da sessão Lab + o quê gerar e por quê | [`app.js`](./js/app.js) · trilha 3 artefatos |
| [`content/agents-prompt-seed.md`](./content/agents-prompt-seed.md) | conteúdo | Semente agnóstica para 3 agents (S08+) | [`app.js`](./js/app.js) Lab S08 · [`lab-deliverables.js`](./content/lab-deliverables.js) |

## Rodar

Na pasta da feature:

```bash
python -m http.server 8765
```

Abrir `http://127.0.0.1:8765/play.html` (módulos ES exigem servidor local).

## Ilhas do mapa

Setup e Plus ficam como **círculos na margem direita** do canvas (`#map-gadgets`), fora do serpentino.
