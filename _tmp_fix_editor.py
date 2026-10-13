# -*- coding: utf-8 -*-
from pathlib import Path

path = Path("domain/game/game/js/mentor-editor.js")
text = path.read_text(encoding="utf-8")

old_boot = '''export function bootMentorEditor() {
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

new_boot = '''export function bootMentorEditor() {
  ensureBar();
  refreshBar();
  document.addEventListener("dblclick", onShiftDblClick, true);
  document.addEventListener("keydown", onKeydown, true);
  document.addEventListener("keydown", onEditKeyGuard, true);
  document.addEventListener("keyup", onEditKeyGuard, true);

  // Aguarda app.js expor a API; com sessao valida, entra em edicao automaticamente
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

if old_boot not in text and 'tryAutoEdit' not in text:
    # try with the current content
    print('OLD BOOT NOT FOUND')
    print('--- tail ---')
    print(text[-800:])
else:
    if 'tryAutoEdit' in text:
        print('already has tryAutoEdit')
    else:
        text = text.replace(old_boot if False else '''export function bootMentorEditor() {
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
}''', '''export function bootMentorEditor() {
  ensureBar();
  refreshBar();
  document.addEventListener("dblclick", onShiftDblClick, true);
  document.addEventListener("keydown", onKeydown, true);
  document.addEventListener("keydown", onEditKeyGuard, true);
  document.addEventListener("keyup", onEditKeyGuard, true);

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
}''')
    print('boot updated')
    path.write_text(text, encoding='utf-8')
