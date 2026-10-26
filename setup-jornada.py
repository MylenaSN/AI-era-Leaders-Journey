# -*- coding: utf-8 -*-
from __future__ import print_function
import os, sys
NOME_RAIZ = "AI-First-Operations-Leadership-Jornada"
PASTAS = [
    "01 Pre-voo",
    "02 Produto",
    "03 Delivery",
    "04 Times hibridos",
    "05 Normalizacao evolutiva",
]
def pasta_desktop():
    home = os.path.expanduser("~")
    profile = os.environ.get("USERPROFILE") or home
    for caminho in (
        os.path.join(profile, "Desktop"),
        os.path.join(home, "Desktop"),
        os.path.join(profile, "OneDrive", "Desktop"),
    ):
        if os.path.isdir(caminho):
            return caminho
    return os.path.join(profile, "Desktop")
def main():
    raiz = os.path.join(pasta_desktop(), NOME_RAIZ)
    os.makedirs(raiz, exist_ok=True)
    print("Raiz:", raiz)
    for nome in PASTAS:
        os.makedirs(os.path.join(raiz, nome), exist_ok=True)
        print("  OK", nome)
    return 0
if __name__ == "__main__":
    sys.exit(main())
