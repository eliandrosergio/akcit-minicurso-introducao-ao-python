# akcit-minicurso-introducao-ao-python

O meu estudo de Python a partir do minicurso **AKCIT: Introdução ao Python** (UFG/Cegraf, 2024). Juntei aqui o material de estudo original e os meus exercícios resolvidos — notebooks e um site estático — para registar o meu progresso e para ajudar quem está a começar.

## Estrutura do repositório

O repositório está dividido em duas partes, com autoria diferente:

| Pasta | Autoria | O que é |
| --- | --- | --- |
| `material/` | **Não é meu** — dos autores e organizadores do minicurso | Material de referência: o livro em PDF e os notebooks oficiais do curso |
| `my/` | **Meu** | Os meus ficheiros de estudo: exercícios resolvidos em notebooks e um site de exercícios |

```
akcit-minicurso-introducao-ao-python/
├── material/                    # material de referência (autoria AKCIT/UFG)
│   ├── pdf/
│   │   └── Introdução a Python - AKCIT.pdf
│   └── notebooks/               # notebooks oficiais do curso (Google Colab)
│       ├── AKCIT_NLP_M2_Colab_Unidade_2_Finalizado.ipynb
│       ├── AKCIT_NLP_M2_Colab_Unidade_3_Finalizado.ipynb
│       ├── AKCIT_NLP_M2_Colab_Unidade_4_Finalizado.ipynb
│       ├── AKCIT_NLP_M2_Colab_Unidade_5_Finalizado.ipynb
│       └── AKCIT_NLP_M2_Colab_Unidade_6_Finalizado.ipynb
├── my/                          # os meus ficheiros de estudo
│   ├── notebooks/
│   │   ├── capitulo_01.ipynb
│   │   ├── capitulo_02.ipynb
│   │   ├── capitulo_03.ipynb
│   │   ├── capitulo_04.ipynb
│   │   ├── capitulo_05.ipynb
│   │   └── listas_encadeadas.ipynb
│   └── web/exercicios-python/   # site estático: exercícios + respostas
│       ├── index.html
│       ├── capitulo_00{1..5}_exercicios.html
│       ├── capitulo_00{1..5}_respostas.html
│       └── assets/              # style.css, theme.js
├── LICENSE
└── README.md
```

## Material de base

Este repositório é baseado no livro **Introdução ao Python**:

- **Autoria:** Rafael Divino Ferreira Feitosa
- **Organizadores:** Renata Dutra Braga, Deborah Silva Alves Fernandes, Taciana Novo Kudo, Cristiane Bastos Rocha Ferreira, Arlindo Rodrigues Galvão Filho
- **Editora:** Cegraf UFG, 2024 (Coleção Formação no AKCIT)
- **Fonte:** https://doi.org/10.5216/FEI.int.ebook.978-85-495-0977-2/2024
- **Licença do livro:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt-br)

Os notebooks em `material/notebooks/` são os notebooks oficiais do curso, preparados para Google Colab, e estão aqui apenas como referência de estudo.

Os ficheiros em `my/` são trabalhos derivados do livro, escritos e resolvidos por mim, e **não têm qualquer vínculo oficial** com os autores, a UFG ou o AKCIT. Os exercícios foram adaptados por mim.

## `material/` — material de referência (não é meu)

- **`pdf/Introdução a Python - AKCIT.pdf`** — o livro completo, na versão oficial do AKCIT/UFG.
- **`notebooks/`** — os notebooks oficiais do curso (AKCIT/Colab), das Unidades 2 a 6. A correspondência com os capítulos é:

  | Notebook do curso | O que aborda |
  | --- | --- | --- |
  | Unidade 2 | Sintaxe Básica do Python (Variáveis e Tipos de Dados) |
  | Unidade 3 | Estruturas de dados (listas, tuplas, dicionários, conjuntos) |
  | Unidade 4 | Estruturas de controlo de fluxo (`if`, `for`, `while`, `break`, `continue`, `match`, `try-except`) |
  | Unidade 5 | Funções (nomeadas, `lambda`, `*args`, `**kwargs`, escopo) |
  | Unidade 6 | Manipulação de arquivos |

## `my/` — os meus ficheiros de estudo

### `my/notebooks/` — exercícios resolvidos

Um notebook por capítulo, com o enunciado em Markdown e a minha resolução em código:

- `capitulo_01.ipynb` — Sintaxe básica, variáveis e tipos de dados *(comentários, indentação, input/output, `int`/`float`/`str`/`bool`, *casting*, operadores, strings, f-strings e funções *built-in*)*
- `capitulo_02.ipynb` — Estruturas de dados *(criação, acesso, modificação, *slicing*, métodos de lista, tuplas imutáveis, dicionários, conjuntos)*
- `capitulo_03.ipynb` — Estruturas de controlo de fluxo *(`if/elif/else`, `match-case`, `for`, `while`, *comprehensions*, `break`/`continue`/`pass`, `try-except`)*
- `capitulo_04.ipynb` — Funções *(`def`, parâmetros e retorno, múltiplos retornos, `*args`/`**kwargs`, `lambda`, `map()`/`filter()`, escopo local/global)*
- `capitulo_05.ipynb` — Manipulação de arquivos *(modos `r`/`w`/`a`, bloco `with`, leitura e escrita)*
- `listas_encadeadas.ipynb` — listas multidimensionais (1D, 2D e 3D) e indexação aninhada

### `my/web/exercicios-python/` — site de exercícios

Site estático (HTML, CSS e JavaScript, sem dependências) com **45 exercícios** e as respetivas respostas comentadas, organizados por capítulo em três níveis — básico, intermediário e avançado. Tenta resolver antes de abrir as respostas.

- `index.html` — índice com ligação a cada capítulo
- `capitulo_001_exercicios.html` … `capitulo_005_respostas.html` — exercícios e respostas de cada capítulo
- `assets/` — folha de estilos e o script do tema escuro

Para ver no navegador, abre `my/web/exercicios-python/index.html` no ficheiro, ou serve a pasta:

```bash
python3 -m http.server --directory my/web/exercicios-python 8000
```

## Como executar os notebooks

**No Google Colab** (sem instalar nada): abre o notebook e clica em "Open in Colab".
Exemplo: [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/eliandrosergio/akcit-minicurso-introducao-ao-python/blob/main/my/notebooks/capitulo_01.ipynb)

**Localmente:**

```bash
git clone https://github.com/eliandrosergio/akcit-minicurso-introducao-ao-python.git
cd akcit-minicurso-introducao-ao-python
python3 -m venv .venv && source .venv/bin/activate
pip install jupyter
jupyter notebook my/notebooks
```

## Licença

- **`my/`** — o meu conteúdo (exercícios, resoluções e site) está sob a licença do ficheiro [LICENSE](LICENSE).
- **`material/`** — material de terceiros, mantido com a licença original do AKCIT/UFG: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt-br). Reutilização apenas para fins **não comerciais**, citando a fonte.

## Contribuições

Encontraste um erro ou tens uma sugestão? Abre uma issue ou um pull request. Não aceito alterações em `material/`, por ser material de terceiros.

## Autor

**Eliandro Sérgio** — [GitHub](https://github.com/eliandrosergio/akcit-minicurso-introducao-ao-python) | [Portfólio](https://eliandro.ngolabyte.ao) | [eliandrosergio42@gmail.com](mailto:eliandrosergio42@gmail.com)
