# React Learning Projects

A collection of small React projects and exercises built while learning React,
React Router, hooks, and JavaScript fundamentals.

## Projects

| Project | Description | Start command |
| --- | --- | --- |
| [Bg-changer](./Bg-changer) | Change the page background with color controls | `npm run dev` |
| [PasswordGenerator](./PasswordGenerator) | Generate configurable random passwords | `npm run dev` |
| [ReactRouter](./ReactRouter) | Multi-page navigation with React Router | `npm run dev` |
| [currencyConverter](./currencyConverter) | Currency conversion using live exchange-rate data | `npm run dev` |
| [firstReact](./firstReact) | Introductory React counter and component exercise | `npm run dev` |
| [CustomReact](./CustomReact) | Minimal custom-rendering JavaScript exercise | Open `index.html` |
| [newbasic](./newbasic) | Create React App counter exercise | `npm start` |

## Running a project

Each Vite project is independent:

```bash
cd Bg-changer
npm install
npm run dev
```

Use the same commands from the relevant project directory. Production builds
can be checked with `npm run build`, and the Vite projects also provide
`npm run lint`.

## Notes

- Do not commit `node_modules` or generated build folders; the root
  `.gitignore` covers all projects.
- `currencyConverter` reads exchange rates from the public
  [currency API](https://github.com/fawazahmed0/exchange-api).
