# -*- coding: utf-8 -*-
# Copia de referencia do script que o ALUNO monta no Desktop.
# Setup pedagogico: aluno/Setup jornada.md
#   1) criar setup-jornada.py no Desktop
#   2) colar este corpo
#   3) cd Desktop
#   4) python setup-jornada.py

from __future__ import print_function

import os
import sys

NOME_RAIZ = "AI-First-Operations-Leadership-Jornada"

PASTAS = [
    "01 Pre-voo",
    "02 Produto",
    "03 Delivery",
    "04 Times hibridos",
    "05 Equilibrio AI-Era",
]


def pasta_desktop():
    home = os.path.expanduser("~")
    profile = os.environ.get("USERPROFILE") or home
    candidatos = [
        os.path.join(profile, "Desktop"),
        os.path.join(home, "Desktop"),
        os.path.join(profile, "OneDrive", "Desktop"),
        os.path.join(home, "OneDrive", "Desktop"),
    ]
    for caminho in candidatos:
        if os.path.isdir(caminho):
            return caminho
    return os.path.join(profile, "Desktop")


def main():
    raiz = os.path.join(pasta_desktop(), NOME_RAIZ)
    os.makedirs(raiz, exist_ok=True)
    print("Raiz:", raiz)

    for nome in PASTAS:
        caminho = os.path.join(raiz, nome)
        os.makedirs(caminho, exist_ok=True)
        print("  OK", nome)

    print("Pronto. 5 pastas criadas (ou ja existiam).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
