#!/bin/sh
set -e
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  python3 ./setup-jornada.py
elif command -v python >/dev/null 2>&1; then
  python ./setup-jornada.py
else
  echo "Nao achei Python neste computador."
  echo "Instale Python 3 e rode: python3 setup-jornada.py"
  exit 1
fi
echo
echo "Pasta: \$HOME/Desktop/AI-First-Operations-Leadership-Jornada"
