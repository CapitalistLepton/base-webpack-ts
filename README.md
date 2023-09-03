# Overview

This is meant to provide an easy starting template for webpack and TypeScript.

## Building the bundle

This repository can be initialized using `yarn`. The command is simply:

```bash
yarn
```

## Building the bundle

Once the TypeScript source code has been written, the `dist/bundle.js` file will
be compiled from the `ts-loader` module by running:

```bash
yarn build
```

From there, the `dist/index.html` can be opened or refreshed in a browser to
view the new code.

## Building the bundle for production

The optimized version of `dist/bundle.js` file will be compiled from the
`ts-loader` module by running:

```bash
yarn prod
```

From there, the `dist/index.html` can be opened or refreshed in a browser to
view the new code.

## Prettier

Prettier is used for formatting the source files properly. Its configuration can
be altered in the file `.prettierrc`.
