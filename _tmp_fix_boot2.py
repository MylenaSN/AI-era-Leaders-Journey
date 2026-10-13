# -*- coding: utf-8 -*-
from pathlib import Path

path = Path("domain/game/game/js/mentor-editor.js")
text = path.read_text(encoding="utf-8")

old = '''export function bootMentorEditor() {
  ensureBar();
  refreshBar();
  document.addEventListener("dblclick", onShiftDblClick, true);
  document.addEventListener("keydown", onKeydown, true);
  document.addEventListener("keydown", onEditKeyGuard, true);
  document.addEventListener("keyup", onEditKeyGuard, true);
  // Re-checa se app terminar de carregar depois
  let n = 0;
  const wait = setInterval(() => {
    n++;
    if (api() || n > 40) {
      clearInterval(wait);
      refreshBar();
    }
  }, 250);
}'''

new = '''export function bootMentorEditor() {
  ensureBar();
  refreshBar();
  document.addEventListener("dblclick", onShiftDblClick, true);
  document.addEventListener("keydown", onKeydown, true);
  document.addEventListener("keydown", onEditKeyGuard, true);
  document.addEventListener("keyup", onEditKeyGuard, true);

  // Aguarda app.js; com sessao mentor valida, entra em edicao automaticamente
  let n = 0;
  const wait = setInterval(() => {
    n++;
    refreshBar();
    if (api()) {
      const q = location.search || "";
      if (/mentor=1|saved=/.test(q) || readSession()) {
        if (tryAutoEdit()) {
          clearInterval(wait);
          return;
        }
      }
    }
    if (n > 48) {
      clearInterval(wait);
      refreshBar();
      const session = readSession();
      if (session && !sessionMatchesPage(session, detectSlugFromLocation())) {
        toast("Sessao mentor nao combina com esta URL — entre de novo em /mentor.html");
      }
    }
  }, 250);
}'''

if old not in text:
    print("OLD BOOT NOT FOUND")
    print(repr(text[-600:]))
else:
    path.write_text(text.replace(old, new), encoding="utf-8")
    print("bootMentorEditor updated")
