# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
todolistusecontext/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoItem.jsx
│   │   ├── ThemeSwitcher.jsx
│   │   ├── TodoList.jsx
│   │   └── AddTodo.jsx
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   ├── ThemeProvider.jsx
│   │   ├── TodoContext.jsx
│   │   └── TodoProvider.jsx
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── ThemeSwitcher.css
│   │   ├── TodoList.css
│   │   ├── TodoItem.css
│   │   └── AddTodo.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

React Oppgave 3: useContext()

I denne oppgaven skal du øve på hvordan man bruker useContext og Context API for å dele data på tvers av flere komponenter. Målet er at du skal forstå hvordan man:

Oppretter en Context
Lager en Provider som gir global tilgang til data
Konsumerer data med useContext i ulike komponenter
Oppdaterer delt state fra flere steder i appen

Oppgaven består av to deler:

TodoApp – global todo-liste der alle komponenter deler samme state.
ThemeSwitcher – global lys/mørk-modus.

Ha det gøy — og husk: ingen prop drilling! 😊

TodoApp med ThemeSwitcher
Lag en liten todo-applikasjon der alle komponenter deler samme state gjennom useContext.
Ingen props skal sendes mellom komponenter.

TodoApp - Context & Provider:
Lag TodoContext med:

todos – en array av objekter:
{ id: number, text: string, done: boolean }
addTodo(text) – legger til en ny todo
toggleTodo(id) – flipper done fra true/false
removeTodo(id) – fjerner en todo
Komponenter:
AddTodo
Et input-felt
En knapp: "Legg til"
Kaller addTodo() fra context

TodoList
Leser todos fra context
Viser alle todos med .map()
For hver todo:
En checkbox som bruker toggleTodo(id)
Tekst som viser todoen
En knapp: "X" som bruker removeTodo(id)

ThemeSwitcher Context + Provider:
Lag en ThemeContext med følgende data i value:

theme – enten "light" eller "dark"
toggleTheme() – funksjon som bytter tema
Starttema kan være "light".

ThemeSwitcher-komponent:
Lag en komponent som:

Leser theme fra context
Viser teksten:
"Gjeldende tema: light" (eller dark)
Har en knapp:
"Bytt tema"
som kaller toggleTheme()

Oppsummering – Krav

Lage tre forskjellige Context Providers
ThemeProvider
TodoProvider
Wrappe appen med dem
Enten alle på en gang, eller hvert prosjekt for seg.

Lage komponenter som konsumere Context
Bruk useContext(SomeContext) for å hente data og funksjoner.

Ingen props for å sende data rundt.
