export const WAVE_DIR = {
  1: "01 Pre-voo",
  2: "02 Produto",
  3: "03 Delivery",
  4: "04 Times hibridos",
  5: "05 Normalizacao evolutiva",
};

const WEEK_WAVE = { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5 };

export function rotuloSemana(n) {
  return String(n).padStart(2, "0");
}
export function arquivoHomework(n) {
  return "Homework aula 02 semana " + rotuloSemana(n) + ".md";
}
export function arquivoLab(n) {
  return "Lab aula 03 semana " + rotuloSemana(n) + ".md";
}
const HOMEWORK_EXTRAS = {};
const LAB_EXTRAS = {
  2: ["Lab aula 03 semana 02.md"],
  8: ["steering.md", "skill.md", "eval.md"],
  10: ["Inventario-Agentico-AS-IS.md", "Workflow-Agentico-Humans-AI-TO-BE.html"],
};
export function arquivosHomeworkExtras(n) { return HOMEWORK_EXTRAS[n] || []; }
export function arquivosLabExtras(n) { return LAB_EXTRAS[n] || []; }
export function pastaSemana(n) { return "semana-" + rotuloSemana(n); }
export function pastaWave(n) { return WAVE_DIR[WEEK_WAVE[n] || 1]; }
export function pastaBonus() { return WAVE_DIR[5]; }
export const FILES = Object.fromEntries(
  Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    return [n, { a2: arquivoHomework(n), a3: arquivoLab(n), extras: arquivosHomeworkExtras(n).concat(arquivosLabExtras(n)) }];
  })
);
