# Setup jornada.md

Cria no Desktop a pasta unificada `AI-First-Operations-Leadership-Jornada/` com **5 pastas de Wave**. Os arquivos de cada aula entram depois, quando a formação pedir.

## Pré-requisito: Python 3

```text
python --version
```

Se não tiver:

| Sistema | Comando |
|---------|---------|
| Windows | `winget install Python.Python.3.12` |
| macOS | `brew install python3` |
| Linux (Debian/Ubuntu) | `sudo apt update && sudo apt install -y python3` |

Feche e abra o terminal. Confira de novo com `python --version` (ou `python3` / `py`).

## Comando (na pasta `domain/game`)

**Windows (Prompt de Comando):**

```text
python setup-jornada.py
```

Se falhar: `py setup-jornada.py`

**macOS / Linux (Terminal):**

```text
python3 setup-jornada.py
```

## O que nasce no Desktop

```text
AI-First-Operations-Leadership-Jornada/
  01 Pre-voo/            ← Wave 01 — O Despertar
  02 Produto/            ← Wave 02 — O Mapa de Valor
  03 Delivery/           ← Wave 03 — A Engenharia do Ciclo
  04 Times hibridos/     ← Wave 04 — Humano & IA
  05 Homeostase/         ← Wave 05 — Seu potencial humano
  LEIA-ME.md
```

Não renomeie essas pastas. O jogo aponta para estes nomes.
