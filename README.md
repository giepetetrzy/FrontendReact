# Empty React Project Template

This repository is an empty react project template made using vite, typescript, yarn. Eslint and prettier are also configured. The styling is set up to use TailwindCSS. There is react-router-dom added with example configuration. For Icons I use react-icons.

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

