"""Projeta o tema do kit Parceiro para o jogo. HEX não se inventa aqui."""
from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DEST = Path(__file__).resolve().parent / "brand-config.json"


def main() -> int:
    slug = "agile-school"
    if len(sys.argv) > 1 and sys.argv[1].startswith("--slug="):
        slug = sys.argv[1].split("=", 1)[1]
    src = ROOT / "domain" / "partners" / slug / "brand-config.json"
    if not src.is_file():
        print(f"sem projeção no kit: {src}", file=sys.stderr)
        return 1
    shutil.copyfile(src, DEST)
    print("ok", slug, "->", DEST.relative_to(ROOT))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
