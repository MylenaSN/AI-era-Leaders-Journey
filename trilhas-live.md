---
id: trilhas-live
titulo: Trilhas no ar em game.patronloop.com
atualizado_em: "2026-09-19"
---

# Trilhas no ar

Fonte que o **Loop Game** lê **antes** de perguntar ao mentor. Uma linha = uma URL isolada. Ninguém edita a pasta de outra linha.

A capa [`http://game.patronloop.com/`](http://game.patronloop.com/) é índice / gate — não é play de trilha.

## Catálogo

| Slug | Formação | Mentor | URL isolada | Fonte local | Extra |
|------|----------|--------|-------------|-------------|-------|
| `trilha-operations-leaders` | AI-First Operations Leadership | Mylena de Souza Nascimento | http://game.patronloop.com/trilha-operations-leaders/play.html | `domain/game/` (play.html + game/) | **também** em [`/play.html`](http://game.patronloop.com/play.html) — MVP/POC do Loop gerado por Mylena de Souza Nascimento |
| `trilha-product-leaders` | *(reservado)* | — | http://game.patronloop.com/trilha-product-leaders/play.html | `domain/game/trilhas/trilha-product-leaders/` | ainda não no ar |
| `trilha-engineer-leaders` | *(reservado)* | — | http://game.patronloop.com/trilha-engineer-leaders/play.html | `domain/game/trilhas/trilha-engineer-leaders/` | ainda não no ar |

Nova formação: acrescente **uma** linha (slug `trilha-{audiencia}-leaders`) **antes** do primeiro push. Não recicle slug. Pasta nova em `domain/game/trilhas/{slug}/`.

## Isolamento

- A AFOL tem **duas** URLs de propósito: `/play.html` é o MVP/POC do Loop (Mylena). `/trilha-operations-leaders/play.html` é o slot estável, igual às futuras trilhas.
- Publicar a AFOL atualiza **as duas** a partir da mesma fonte (`domain/game/`). Não apagar o `/play.html`.
- Qualquer outra trilha **nunca** grava `/play.html` nem a pasta `trilha-operations-leaders/`.
- Se um deploy mudar copy de outro slug, o Loop Game **reverte**.
