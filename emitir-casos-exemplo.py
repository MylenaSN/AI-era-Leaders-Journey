# -*- coding: utf-8 -*-
"""Espelha casos-exemplo.js nos Prompt exemplo do aluno e da emissao V.2."""
from __future__ import print_function

import os
import re
from datetime import date

ROOT = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(ROOT, "game", "content", "casos-exemplo.js")
ALUNO = os.path.join(ROOT, "aluno")
V2 = os.path.normpath(os.path.join(ROOT, "..", "..", "outer-layers", "outputs", "ini-afsl-as V.2", "aulas"))
TODAY = date.today().isoformat()

WAVE_V2 = {
    1: "wave-01-pre-voo",
    2: "wave-01-pre-voo",
    3: "wave-02-product-management",
    4: "wave-02-product-management",
    5: "wave-02-product-management",
    6: "wave-02-product-management",
    7: "wave-03-tech-delivery",
    8: "wave-03-tech-delivery",
    9: "wave-03-tech-delivery",
    10: "wave-03-tech-delivery",
    11: "wave-04-human-ai-teams",
    12: "wave-04-human-ai-teams",
    13: "wave-04-human-ai-teams",
    14: "wave-04-human-ai-teams",
    15: "wave-05-homeostase",
    16: "wave-05-homeostase",
    17: "wave-04-human-ai-teams",
}

ALUNO_DIR = {
    1: os.path.join("01 Pre-voo", "semana-01"),
    2: os.path.join("01 Pre-voo", "semana-02"),
    3: os.path.join("02 Produto", "semana-03"),
    4: os.path.join("02 Produto", "semana-04"),
    5: os.path.join("02 Produto", "semana-05"),
    6: os.path.join("02 Produto", "semana-06"),
    7: os.path.join("03 Delivery", "semana-07"),
    8: os.path.join("03 Delivery", "semana-08"),
    9: os.path.join("03 Delivery", "semana-09"),
    10: os.path.join("03 Delivery", "semana-10"),
    11: os.path.join("04 Times hibridos", "semana-11"),
    12: os.path.join("04 Times hibridos", "semana-12"),
    13: os.path.join("04 Times hibridos", "semana-13"),
    14: os.path.join("04 Times hibridos", "semana-14"),
    15: os.path.join("05 Homeostase", "semana-15"),
    16: os.path.join("05 Homeostase", "semana-16"),
    17: os.path.join("04 Times hibridos", "bonus-medida"),
}


def unescape(raw):
    return raw.replace("\\n", "\n").replace('\\"', '"').replace("\\\\", "\\")


def parse_js(text):
    casos = {}
    for m in re.finditer(
        r'(\w+): \{\s*id: "[^"]+",\s*marca: "([^"]+)",\s*banner: "([^"]+)",\s*linha: "([^"]+)"',
        text,
    ):
        casos[m.group(1)] = {"marca": m.group(2), "banner": m.group(3), "linha": m.group(4)}
    por = {}
    block = re.search(r"const CASO_POR_SEMANA = \{([^}]+)\}", text)
    if not block:
        raise SystemExit("CASO_POR_SEMANA nao encontrado")
    for m in re.finditer(r"(\d+):\s*\"(\w+)\"", block.group(1)):
        por[int(m.group(1))] = m.group(2)
    ex = {}
    for m in re.finditer(r"\n  (\d+): \{", text):
        n = int(m.group(1))
        rest = text[m.end():]
        k = rest.find('a2: "')
        if k < 0:
            continue
        i = k + 5
        chars = []
        while i < len(rest):
            c = rest[i]
            if c == "\\":
                chars.append(rest[i : i + 2])
                i += 2
                continue
            if c == '"':
                break
            chars.append(c)
            i += 1
        ex[n] = unescape("".join(chars))
    return casos, por, ex


def rotulo(n):
    return "bonus" if n == 17 else "{0:02d}".format(n)


def write(path, body):
    folder = os.path.dirname(path)
    if folder and not os.path.isdir(folder):
        os.makedirs(folder)
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(body)
    print("wrote", path)


def aluno_md(n, banner, a2):
    name = "Prompt exemplo aula 03 semana {0}.md".format(rotulo(n))
    return (
        "# {0}\n\n"
        "{1} — so para ver o tipo de evidencia. Nao copie o conteudo no lugar do seu Homework.\n\n"
        "```\n{2}\n```\n"
    ).format(name, banner, a2.strip())


def v2_md(n, marca, a2):
    sid = "sbonus" if n == 17 else "s{0:02d}".format(n)
    titulo = marca.split(" · ")[0].title() if " · " in marca else marca
    # marca is already uppercase with accents
    short = marca.replace(" · ", " · ")
    label = "Semana bonus" if n == 17 else "Semana {0:02d}".format(n)
    return (
        "---\n"
        "id: {sid}-prompt-exemplo\n"
        "aula: 3\n"
        "fonte: domain/game/game/content/casos-exemplo.js (EX[{n}].a2)\n"
        "atualizado_em: \"{today}\"\n"
        "---\n\n"
        "# Prompt exemplo — {short} · {label}\n\n"
        "Insumo da Aula 2 da turma (nao e o seu homework). Serve para ver o tipo de evidencia, nao para copiar o conteudo.\n\n"
        "```\n{a2}\n```\n"
    ).format(sid=sid, n=n, today=TODAY, short=short, label=label, a2=a2.strip())


def v2_exemplo_path(n):
    wave = WAVE_V2[n]
    if n == 17:
        return os.path.join(V2, wave, "bonus-medida", "prompts", "sbonus-prompt-exemplo.md")
    return os.path.join(V2, wave, "semana-{0:02d}".format(n), "prompts", "s{0:02d}-prompt-exemplo.md".format(n))


def patch_nexo(path):
    if not os.path.isfile(path):
        return False
    with open(path, encoding="utf-8") as fh:
        old = fh.read()
    new = old
    new = new.replace(
        "Siga a logica do Caso Nexo (arquivo Prompt exemplo desta pasta)",
        "Siga a logica do exemplo desta pasta (Prompt exemplo)",
    )
    new = new.replace(
        "Siga a lógica do Caso Nexo (arquivo Prompt exemplo desta pasta)",
        "Siga a lógica do exemplo desta pasta (Prompt exemplo)",
    )
    new = new.replace("| Caso Nexo — tipo de evidência |", "| Exemplo da semana — tipo de evidência |")
    new = new.replace("| Caso Nexo — tipo de evidencia |", "| Exemplo da semana — tipo de evidencia |")
    new = new.replace(
        "`Prompt exemplo aula 03 semana XX.md` e o Caso Nexo — so para ver o tipo de evidencia.",
        "`Prompt exemplo aula 03 semana XX.md` e o exemplo da wave — so para ver o tipo de evidencia.",
    )
    if new == old:
        return False
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(new)
    print("patched", path)
    return True


def walk_patch(folder):
    n = 0
    for dirpath, _, files in os.walk(folder):
        for name in files:
            if name.endswith((".md", ".txt")):
                if patch_nexo(os.path.join(dirpath, name)):
                    n += 1
    return n


def main():
    with open(JS, encoding="utf-8") as fh:
        text = fh.read()
    casos, por, ex = parse_js(text)
    if len(ex) < 17:
        raise SystemExit("EX incompleto: " + str(sorted(ex)))
    for n in range(1, 18):
        caso = casos[por[n]]
        a2 = ex[n]
        write(
            os.path.join(ALUNO, ALUNO_DIR[n], "Prompt exemplo aula 03 semana {0}.md".format(rotulo(n))),
            aluno_md(n, caso["banner"], a2),
        )
        dest = v2_exemplo_path(n)
        if os.path.isdir(os.path.dirname(dest)):
            write(dest, v2_md(n, caso["marca"], a2))
        else:
            print("skip V.2 (pasta ausente)", dest)
    print("patched V.2 files:", walk_patch(V2))


if __name__ == "__main__":
    main()
