# Prompt lab aula 03 semana 02.md

Duas fases. Não misture.

Insumo: `Homework aula 02 semana 02.md` (jornada) + LinkedIn + vaga.

---

## FASE 1 — Gerar o currículo em PDF no Enhancv

1) Abra https://app.enhancv.com e entre com o seu LinkedIn.  
2) Cole o bloco abaixo na ferramenta (ou no campo de pedido da IA do Enhancv).  
3) Exporte o PDF (texto legível, não imagem).  
4) Salve o PDF no Drive.

```
Purpose:
Ajustar meu currículo para a vaga que eu sonho, lendo meu LinkedIn e minha jornada profissional (Homework aula 02).

Ação:
Reescreva minhas experiências profissionais usando palavras-chave da vaga
e focando em resultados quantificáveis que estejam no meu Homework / LinkedIn.

Tool:
Enhancv

Input:
- Upload / login do meu perfil LinkedIn
- Homework aula 02 semana 02.md (jornada + evidências)
- Anúncio da vaga-alvo
[cole a URL do LinkedIn]
[cole trechos do Homework — só linhas com evidência]
[cole ou anexe o anúncio da vaga]

Output Ideal:
Keywords da vaga, senioridade correta, resultado/impacto,
linguagem mais executiva e moderna — em layout ATS (uma coluna).

Não invente número, cargo nem data: se o resultado não estiver no meu perfil ou Homework,
marque como [FALTA EVIDÊNCIA] em vez de preencher.
```

---

## FASE 2 — Ativar a esteira agêntica Loop Vitae

1) Abra https://github.com/MylenaSN/Loop_Vitae  
2) Code → Download ZIP  
3) Copie a pasta para o **seu** Drive pessoal  

   **Licença:** artefatos com licença individual do aluno matriculado na formação  
   AI-First Operations Leadership. **Não redistribuir.**  
   Quem tem conta GitHub: baixa pelo repositório.  
   Quem não tem: baixe o pacote pela plataforma da Agile School (mesmo conteúdo).

4) Ative a esteira num **Notebook Gemini**: suba a pasta + o PDF/currículo da Fase 1 e rode o setup inicial (comando do README da esteira — só linguagem natural / markdown, sem script).  
5) Rode um loop com o **Curriculum-advisor** numa vaga hipotética. Cole o bloco abaixo para gerar a vaga e depois peça o fit:  
6) Analise o output do Curriculum-advisor e feche com **md-2-pdf** (currículo atualizado para essa vaga).

### Bloco — vaga hipotética (cole no Notebook Gemini)

```
Gere UMA vaga fictícia (não use empresa real de mercado):

Empresa: Agile School
Cargo: AI-Orchestrator Manager
Nível: sênior / liderança de operações com IA
Contexto: formação e operação de times que orquestram humanos + agentes
Responsabilidades: 6 bullets concretos (orquestração, gates humanos, métricas de fluxo, currículo de papéis, esteiras NL)
Requisitos: 6 bullets alinhados a liderança AI-first (não peça PhD em ML)

Formato: anúncio pronto para colar (título, empresa, sobre a vaga, responsabilidades, requisitos).
Não invente salários nem benefícios irreais. Não use nomes de empresas de IA reais.
```

Depois: anexe sua jornada (Homework) + PDF da Fase 1 e peça ao Curriculum-advisor o fit contra esse anúncio.  
Gate do fato: sem evidência no Homework/LinkedIn → `[FALTA EVIDÊNCIA]`.

---

## Auditoria

- `Curriculo aula 03 semana 02.md`
- `Lab aula 03 semana 02.md`
- `Link Project aula 03 semana 02.txt`
