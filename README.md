# JEST MIEJSCE App

## About

View on [Github Pages](https://giepetetrzy.github.io/FrontendReact/)

## Features

### React
We use [React](https://reactjs.org/) 18 for this project
- [Docs](https://reactjs.org/docs/getting-started.html)

### Vite
For frontend tooling, serving, building [Vite](https://vitejs.dev/) is used on top of React
- [Guide](https://vitejs.dev/guide/)
- [Config](https://vitejs.dev/config/)

### Yarn

### Typescript
Instead of JS to stay away from errors [TS](https://www.typescriptlang.org/) is choosen
- [Docs](https://www.typescriptlang.org/docs/)
### TailwindCSS
For enchancing visuals and easy styles creation we use Tailwind
### ESLint & Pretier
ESLint is used with airbnb and Prettier configuration for readable and consistent code
### React-icons
### Axios
### Auto Deploy to GHPages


## Usage
To use the repo clone it and cd into its directory, then run yarn to install packages:

```
yarn
```

To run development server use:

```
yarn dev
```

Being in project directory you can also run command below to create directories I use to keep files organised:

```
mkdir src/components src/data src/helpers src/hooks
```

## Linting
Project can be checked with eslint using:

```
yarn lint
```

To automatically correct with eslint use:

```
yarn lint:fix
```

To run both eslint correct and prettier format use:

```
yarn format
```

## Troubleshooting
If using VSC Extension "ESLint" you may need to add this to your settings.json:

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
]
"eslint.packageManager": "yarn",
```

When using VSC Extension "Tailwind CSS IntelliSense" you may need to add this to your settings.json:

```json
"tailwindCSS.includeLanguages": {
    "javascript": "javascriptreact",
    "plaintext": "javascriptreact",
    "plaintext": "typescriptreact",
}
```

## License

