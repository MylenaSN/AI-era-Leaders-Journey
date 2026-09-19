# -*- coding: utf-8 -*-
"""Cria no Desktop a pasta da jornada com todos os arquivos que o aluno preenche."""
from __future__ import print_function

import argparse
import json
import os
import sys

LEADER_DIR = "AI-First-Operations-Leadership-Jornada"

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

LEIA_ME = """# AI-First Operations Leadership — sua jornada

Esta pasta e o cofre das 16 semanas + o plus.

## Em cada semana

1. Faca o Homework aula 02.
2. Cole o texto em `input-semana-XX.txt` (e no `Homework aula 02 semana XX.md`).
3. Abra `Prompt lab aula 03 semana XX.md`, cole no chat e salve o output em `Lab aula 03 semana XX.md`.
4. `Prompt exemplo aula 03 semana XX.md` e o exemplo da wave — so para ver o tipo de evidencia (copie o TIPO, nao a empresa).
5. Se a pasta ja tiver outros arquivos do Lab, preencha esses tambem — nao crie outro nome.

O jogo aponta para estes nomes. Nao renomeie pastas nem arquivos.

O `Lab aula 03 semana XX.md` e o envelope. Algumas semanas pedem mais arquivos na mesma pasta.

## Arquivos extras do Lab (alem do .md)

- Semana 02 — `A3 Report aula 02 semana 02.md` (Aula 2) e `Link Project aula 03 semana 02.txt`
- Semana 03 — `Diagrama hierarquia aula 03 semana 03.md`
- Semana 04 — `Grafico KR aula 03 semana 04.csv`
- Semana 05 — `Link prototipo aula 03 semana 05.txt` e `Jornada persona aula 03 semana 05.md` (salve a imagem como `Jornada persona aula 03 semana 05.png`)
- Semana 07 — `Link overview NotebookLM aula 03 semana 07.txt`
- Semana 08 — `Diagrama fluxo aula 03 semana 08.md`
- Semana 09 — `Pergunta voto aula 03 semana 09.txt`
- Semana 10 — `Deck FinOps aula 03 semana 10.md` (salve o PDF como `Deck FinOps aula 03 semana 10.pdf`)
- Semana 11 — `Diagrama esteira aula 03 semana 11.md`
- Semana 12 — `persona.md`, `steering.md`, `skill.md`
- Semana 13 — `Diagrama spec maestro aula 03 semana 13.md`
- Semana 15 — `Link Project advisor aula 03 semana 15.txt`
- Semana 16 — `Link overview aula 03 semana 16.txt` e `Ata ritual aula 03 semana 16.md`

Semanas 01, 06, 14 e o plus: so o Lab .md.

## Onde salvar

- Semanas 01 e 02 — `01 Pre-voo/semana-XX/`
- Semanas 03 a 06 — `02 Produto/semana-XX/`
- Semanas 07 a 10 — `03 Delivery/semana-XX/`
- Semanas 11 a 14 — `04 Times hibridos/semana-XX/`
- Semanas 15 e 16 — `05 Homeostase/semana-XX/`
- Plus — `04 Times hibridos/bonus-medida/`

Na semana 16, importe `jornada.manifest.json` no play.html.

Os scripts de setup (bat, sh, py) estao em `Setup jornada.md` nesta pasta.
"""


def rotulo(n):
    return "bonus" if n == 17 else str(n).zfill(2)


def homework(n):
    return "Homework aula 02 semana {0}.md".format(rotulo(n))


def lab(n):
    return "Lab aula 03 semana {0}.md".format(rotulo(n))


def input_name(n):
    return "input-semana-{0}.txt".format(rotulo(n))


def pasta_semana(n):
    return "bonus-medida" if n == 17 else "semana-" + rotulo(n)


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


def write_new(path, body):
    parent = os.path.dirname(path)
    if parent and not os.path.isdir(parent):
        os.makedirs(parent)
    if os.path.exists(path):
        return False
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(body)
    return True


def stub_homework(n):
    name = homework(n)
    if n == 2:
        return (
            "# {0}\n\n"
            "A entrega desta aula e o `A3 Report aula 02 semana 02.md` nesta pasta.\n"
            "Preencha o A3 e cole o mesmo texto aqui e em `{1}`.\n"
        ).format(name, input_name(n))
    return (
        "# {0}\n\n"
        "Cole aqui o Homework aula 02 desta semana.\n"
        "O Lab aula 03 le este arquivo e o `{1}`.\n"
    ).format(name, input_name(n))


def a3_report_body():
    path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "aluno",
        "01 Pre-voo",
        "semana-02",
        "A3 Report aula 02 semana 02.md",
    )
    if os.path.isfile(path):
        with open(path, encoding="utf-8") as fh:
            return fh.read()
    return "# A3 Report aula 02 semana 02.md\n\nPreencha o A3 de 1 pagina.\n"


def extras_semana(n):
    """Nomes e stubs dos arquivos extras do Lab. Manter alinhado a arquivos-jornada.js."""
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


def stub_lab(n):
    name = lab(n)
    extras = extras_semana(n)
    body = (
        "# {0}\n\n"
        "Salve aqui o output do Lab aula 03.\n"
        "Nao resuma no chat — o arquivo e a entrega.\n"
    ).format(name)
    if extras:
        body += "\nNesta pasta, este lab tambem pede:\n"
        for extra_name, _hint in extras:
            body += "- `{0}`\n".format(extra_name)
        body += "Preencha esses arquivos. Nao crie outro nome.\n"
    return body


def stub_input(n):
    return (
        "Cole aqui o Homework aula 02 da semana {0}.\n"
        "Pode ser o mesmo texto do arquivo {1}.\n"
    ).format(rotulo(n), homework(n))


ALUNO_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "aluno")


def copy_new(src, dest):
    if not os.path.isfile(src) or os.path.exists(dest):
        return False
    parent = os.path.dirname(dest)
    if parent and not os.path.isdir(parent):
        os.makedirs(parent)
    with open(src, "r", encoding="utf-8") as fh:
        body = fh.read()
    with open(dest, "w", encoding="utf-8") as fh:
        fh.write(body)
    return True


def criar_jornada(root):
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

    def copy_from_aluno(rel):
        nonlocal created, skipped
        src = os.path.join(ALUNO_DIR, rel)
        dest = os.path.join(root, rel)
        if copy_new(src, dest):
            created += 1
            print("  +", rel)
        elif os.path.exists(dest):
            skipped += 1
        elif os.path.isfile(src):
            skipped += 1

    os.makedirs(root, exist_ok=True)
    print("Jornada em:", root)

    leia = os.path.join(root, "LEIA-ME.md")
    with open(leia, "w", encoding="utf-8") as fh:
        fh.write(LEIA_ME)
    print("  ~ LEIA-ME.md")
    touch(
        "jornada.manifest.json",
        json.dumps(
            {"slug_parceiro": "agile-school", "oferta": "INI-AFSL-AS", "artefatos": []},
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
    )

    for n in range(1, 17):
        folder = os.path.join(WAVE[n], pasta_semana(n))
        os.makedirs(os.path.join(root, folder), exist_ok=True)
        touch(os.path.join(folder, homework(n)), stub_homework(n))
        touch(os.path.join(folder, lab(n)), stub_lab(n))
        touch(os.path.join(folder, input_name(n)), stub_input(n))
        for extra_name, extra_body in extras_semana(n):
            touch(os.path.join(folder, extra_name), extra_body)
        copy_from_aluno(os.path.join(folder, "Prompt lab aula 03 semana {0}.md".format(rotulo(n))))
        copy_from_aluno(os.path.join(folder, "Prompt exemplo aula 03 semana {0}.md".format(rotulo(n))))
        if n == 2:
            copy_from_aluno(os.path.join(folder, "A3 Report aula 02 semana 02.png"))
            copy_from_aluno(os.path.join(folder, "A3 Report exemplo aula 02 semana 02.png"))

    bonus = os.path.join("04 Times hibridos", "bonus-medida")
    os.makedirs(os.path.join(root, bonus), exist_ok=True)
    touch(os.path.join(bonus, homework(17)), stub_homework(17))
    touch(os.path.join(bonus, lab(17)), stub_lab(17))
    touch(os.path.join(bonus, input_name(17)), stub_input(17))
    copy_from_aluno(os.path.join(bonus, "Prompt lab aula 03 semana bonus.md"))
    copy_from_aluno(os.path.join(bonus, "Prompt exemplo aula 03 semana bonus.md"))
    copy_from_aluno("Setup jornada.md")

    for i in (1, 2, 3):
        name = "AGENT-0{0}.md".format(i)
        touch(os.path.join("agents", name), "# {0}\n\nCole o prompt raiz da autora.\n".format(name.replace(".md", "")))

    print("Novos:", created, "| ja existiam:", skipped)
    print("Pronto. Abra a pasta no Cursor e volte ao jogo.")
    return created, skipped


def main(argv):
    parser = argparse.ArgumentParser(description="Cria a jornada do aluno no Desktop.")
    parser.add_argument(
        "--destino",
        default=None,
        help="Pasta raiz. Padrao: Desktop/" + LEADER_DIR,
    )
    args = parser.parse_args(argv)
    root = os.path.abspath(args.destino) if args.destino else os.path.join(desktop_dir(), LEADER_DIR)
    criar_jornada(root)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
