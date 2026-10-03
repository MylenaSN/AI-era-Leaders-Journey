# -*- coding: utf-8 -*-
"""Cria no Desktop a pasta unificada da jornada com as 5 Waves.

Por enquanto só as pastas das Waves. Os arquivos de cada aula entram depois,
quando a formação pedir.
"""
from __future__ import print_function

import argparse
import os
import sys

LEADER_DIR = "AI-First-Operations-Leadership-Jornada"

# Nomes que o jogo aponta — não renomeie.
WAVES = (
    "01 Pre-voo",
    "02 Produto",
    "03 Delivery",
    "04 Times hibridos",
    "05 Homeostase",
)

LEIA_ME = """# AI-First Operations Leadership — sua jornada

Pasta unificada no Desktop. Dentro dela existem **só as 5 Waves**:

| Pasta | Wave |
|-------|------|
| `01 Pre-voo` | Wave 01 — Pré-voo: O Despertar |
| `02 Produto` | Wave 02 — Produto: O Mapa de Valor |
| `03 Delivery` | Wave 03 — Delivery: A Engenharia do Ciclo |
| `04 Times hibridos` | Wave 04 — Times híbridos: Humano & IA |
| `05 Homeostase` | Wave 05 — Homeostase: seu potencial humano |

Os arquivos de cada aula (Homework, Lab, prompts) entram **depois**,
semana a semana, quando a formação pedir. Não renomeie estas pastas —
o jogo aponta para estes nomes.
"""


def desktop_dir():
    home = os.path.expanduser("~")
    profile = os.environ.get("USERPROFILE") or home
    for candidate in (
        os.path.join(profile, "Desktop"),
        os.path.join(home, "Desktop"),
        os.path.join(profile, "OneDrive", "Desktop"),
        os.path.join(home, "OneDrive", "Desktop"),
    ):
        if os.path.isdir(candidate):
            return candidate
    return os.path.join(profile, "Desktop")


def criar_jornada(root):
    created = 0
    skipped = 0
    if not os.path.isdir(root):
        os.makedirs(root)
        created += 1
        print("Criada:", root)
    else:
        skipped += 1
        print("Ja existia:", root)

    for name in WAVES:
        path = os.path.join(root, name)
        if not os.path.isdir(path):
            os.makedirs(path)
            created += 1
            print("  +", name)
        else:
            skipped += 1
            print("  =", name, "(ja existia)")

    leia = os.path.join(root, "LEIA-ME.md")
    if not os.path.exists(leia):
        with open(leia, "w", encoding="utf-8") as fh:
            fh.write(LEIA_ME)
        created += 1
        print("  + LEIA-ME.md")
    else:
        skipped += 1

    print("Novos:", created, "| ja existiam:", skipped)
    print("Pronto. As 5 Waves estao na pasta. Volte ao jogo.")
    return created, skipped


def main(argv):
    parser = argparse.ArgumentParser(
        description="Cria no Desktop a pasta da jornada com as 5 Waves."
    )
    parser.add_argument(
        "--destino",
        default=None,
        help="Pasta raiz. Padrao: Desktop/" + LEADER_DIR,
    )
    args = parser.parse_args(argv)
    root = (
        os.path.abspath(args.destino)
        if args.destino
        else os.path.join(desktop_dir(), LEADER_DIR)
    )
    criar_jornada(root)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
