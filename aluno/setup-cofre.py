# -*- coding: utf-8 -*-
"""Cria a árvore do cofre (pastas + arquivos nomeados). Não sobrescreve o que já existe."""
from __future__ import print_function

import argparse
import os
import sys

WAVE = {
    1: "01 Pre-voo",
    2: "01 Pre-voo",
    3: "02 Produto",
    4: "02 Produto",
    5: "02 Produto",
    6: "02 Produto",
    7: "03 Delivery",
    8: "03 Delivery",
    9: "03 Delivery",
    10: "03 Delivery",
    11: "04 Times hibridos",
    12: "04 Times hibridos",
    13: "04 Times hibridos",
    14: "04 Times hibridos",
    15: "05 Homeostase",
    16: "05 Homeostase",
}

STUB = "# {name}\n\n(preencha na semana — o engine lê este nome)\n"

# Manter alinhado a setup-jornada.py extras_semana e arquivos-jornada.js
def a3_report_body():
    path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "01 Pre-voo",
        "semana-02",
        "A3 Report aula 02 semana 02.md",
    )
    if os.path.isfile(path):
        with open(path, encoding="utf-8") as fh:
            return fh.read()
    return "# A3 Report aula 02 semana 02.md\n\nPreencha o A3 de 1 pagina.\n"


def extras_semana(n):
    catalog = {
        2: [
            ("A3 Report aula 02 semana 02.md", a3_report_body()),
            (
                "Link Project aula 03 semana 02.txt",
                "Cole o link do A3 no Project (Claude, GPT ou Gemini).\n"
                "O Lab aula 03 semana 02.md e o export em markdown.\n",
            ),
        ],
        3: [
            (
                "Diagrama hierarquia aula 03 semana 03.md",
                "# Diagrama hierarquia aula 03 semana 03.md\n\n"
                "Cole o mermaid da hierarquia de valor.\n"
                "Se for imagem, salve nesta pasta como Diagrama hierarquia aula 03 semana 03.png "
                "e deixe uma linha apontando para ela.\n",
            ),
        ],
        4: [
            (
                "Grafico KR aula 03 semana 04.csv",
                "kr,baseline,hoje,target\n"
                ",,,\n",
            ),
        ],
        5: [
            (
                "Link prototipo aula 03 semana 05.txt",
                "Cole a URL do prototipo (Lovable, v0 ou similar).\n"
                "So a fatia core (IN) do PBB.\n",
            ),
            (
                "Jornada persona aula 03 semana 05.md",
                "# Jornada persona aula 03 semana 05.md\n\n"
                "Salve nesta pasta a imagem com o nome:\n"
                "Jornada persona aula 03 semana 05.png\n\n"
                "Ou cole aqui o print / descricao da jornada da persona.\n",
            ),
        ],
        7: [
            (
                "Link overview NotebookLM aula 03 semana 07.txt",
                "Cole o link do audio ou video overview (NotebookLM).\n",
            ),
        ],
        8: [
            (
                "Diagrama fluxo aula 03 semana 08.md",
                "# Diagrama fluxo aula 03 semana 08.md\n\n"
                "Cole o mermaid do fluxo (LT, CT, TH, WIP, CFD).\n",
            ),
        ],
        9: [
            (
                "Pergunta voto aula 03 semana 09.txt",
                "Uma pergunta para Mentimeter (ou similar).\n"
                "A IA nao escolhe o ritmo vencedor.\n",
            ),
        ],
        10: [
            (
                "Deck FinOps aula 03 semana 10.md",
                "# Deck FinOps aula 03 semana 10.md\n\n"
                "Cole o link do Gamma ou salve o PDF nesta pasta como:\n"
                "Deck FinOps aula 03 semana 10.pdf\n\n"
                "5 slides: conservador, base, agressivo e teto assinado.\n",
            ),
        ],
        11: [
            (
                "Diagrama esteira aula 03 semana 11.md",
                "# Diagrama esteira aula 03 semana 11.md\n\n"
                "1 etapa n8n/Zapier, 1 etapa GenAI, 1 etapa proibida ao agente.\n"
                "Se exportar o fluxo, salve nesta pasta e aponte o nome aqui.\n",
            ),
        ],
        12: [
            ("persona.md", "# persona.md\n\nQuem e o agent.\n"),
            ("steering.md", "# steering.md\n\nLimites e 3 proibicoes.\n"),
            ("skill.md", "# skill.md\n\nPassos que o agent executa.\n"),
        ],
        13: [
            (
                "Diagrama spec maestro aula 03 semana 13.md",
                "# Diagrama spec maestro aula 03 semana 13.md\n\n"
                "Diagrama hierarchico: requirements → design → gates.\n"
                "Sem codigo antes da spec.\n",
            ),
        ],
        15: [
            (
                "Link Project advisor aula 03 semana 15.txt",
                "Cole o link do Project do advisor (timeline real + 1 gap SMART).\n",
            ),
        ],
        16: [
            (
                "Link overview aula 03 semana 16.txt",
                "Cole o link do overview em audio ou video do pacote do ano.\n",
            ),
            (
                "Ata ritual aula 03 semana 16.md",
                "# Ata ritual aula 03 semana 16.md\n\n"
                "Decisao escrita a mao / offline. Sem LLM.\n"
                "O modelo conta a historia; voce assina o ritual.\n",
            ),
        ],
    }
    return catalog.get(n, [])


def rotulo(n):
    return "bonus" if n == 17 else str(n).zfill(2)


def homework(n):
    return "Homework aula 02 semana {0}.md".format(rotulo(n))


def lab(n):
    return "Lab aula 03 semana {0}.md".format(rotulo(n))


def pasta_semana(n):
    return "bonus-medida" if n == 17 else "semana-" + rotulo(n)


def write_new(path, body):
    if os.path.exists(path):
        return False
    parent = os.path.dirname(path)
    if parent and not os.path.isdir(parent):
        os.makedirs(parent)
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(body)
    return True


def main(argv):
    here = os.path.dirname(os.path.abspath(__file__))
    parser = argparse.ArgumentParser(description="Cria pastas e arquivos do cofre AI-First Operations Leadership.")
    parser.add_argument("--destino", default=here, help="Pasta raiz (Drive sincronizado ou esta aluno/)")
    args = parser.parse_args(argv)
    root = os.path.abspath(args.destino)
    created = 0
    skipped = 0

    def touch(rel, body):
        nonlocal created, skipped
        path = os.path.join(root, rel)
        if write_new(path, body):
            created += 1
            print("  +", rel)
        else:
            skipped += 1

    print("Cofre em:", root)

    for n in range(1, 17):
        folder = os.path.join(WAVE[n], pasta_semana(n))
        a2, a3 = homework(n), lab(n)
        os.makedirs(os.path.join(root, folder), exist_ok=True)
        extras = extras_semana(n)
        touch(os.path.join(folder, a2), STUB.format(name=a2))
        touch(os.path.join(folder, a3), STUB.format(name=a3))
        touch(
            os.path.join(folder, "input-semana-" + rotulo(n) + ".txt"),
            "Cole aqui o Homework aula 02 da semana " + rotulo(n) + ".\n",
        )
        for extra_name, extra_body in extras:
            touch(os.path.join(folder, extra_name), extra_body)
        nomes = a2 + "\n" + a3 + "\n"
        for extra_name, _extra_body in extras:
            nomes += extra_name + "\n"
        nomes += "Prompt lab aula 03 semana {0}.md\n".format(rotulo(n))
        nomes += "Prompt exemplo aula 03 semana {0}.md\n".format(rotulo(n))
        nomes_path = os.path.join(root, folder, "_nomes.txt")
        with open(nomes_path, "w", encoding="utf-8") as fh:
            fh.write(nomes)
        print("  ~", os.path.join(folder, "_nomes.txt"))

    bonus = os.path.join("04 Times hibridos", "bonus-medida")
    os.makedirs(os.path.join(root, bonus), exist_ok=True)
    touch(os.path.join(bonus, homework(17)), STUB.format(name=homework(17)))
    touch(os.path.join(bonus, lab(17)), STUB.format(name=lab(17)))
    touch(os.path.join(bonus, "input-semana-bonus.txt"), "Cole aqui o Homework aula 02 da semana bonus.\n")
    touch(
        os.path.join(bonus, "_nomes.txt"),
        homework(17) + "\n" + lab(17) + "\n"
        + "Prompt lab aula 03 semana bonus.md\n"
        + "Prompt exemplo aula 03 semana bonus.md\n",
    )

    agents = os.path.join(root, "agents")
    os.makedirs(agents, exist_ok=True)
    for i in (1, 2, 3):
        name = "AGENT-0{0}.md".format(i)
        touch(os.path.join("agents", name), "# {0}\n\n".format(name.replace(".md", "")))
    touch(os.path.join("agents", "_nomes.txt"), "AGENT-01.md\nAGENT-02.md\nAGENT-03.md\n")

    touch("jornada.manifest.json", '{\n  "slug_parceiro": "agile-school",\n  "oferta": "INI-AFSL-AS",\n  "artefatos": []\n}\n')

    print("Novos:", created, "| ja existiam:", skipped)
    print("Confira: 01 Pre-voo\\semana-01\\Lab aula 03 semana 01.md")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
