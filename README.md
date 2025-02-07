# JS Frameworks Library Kit

[![GitHub issues](https://img.shields.io/github/issues/ThePositree/js-frameworks-lib-kit)](https://github.com/ThePositree/js-frameworks-lib-kit/issues)
[![GitHub license](https://img.shields.io/github/license/ThePositree/js-frameworks-lib-kit)](https://github.com/ThePositree/js-frameworks-lib-kit/blob/main/LICENSE)

JS Frameworks Library Kit is a universal template project for creating libraries compatible with various JavaScript frameworks. Built on npm workspaces and Rollup, it allows easy extensibility and support for multiple frameworks.

## Key Features

- **Multi-Framework Support**: Initial support for React, with plans to add Vue, Angular, and Svelte.
- **TypeScript**: All components are written in TypeScript for type safety.
- **Playgrounds**: Built-in test environments for verifying library functionality across different frameworks.
- **Modular Structure**: Utilizes npm workspaces for a modular project structure.

## Project Structure

```
js-frameworks-lib-kit/
├── react/               # Source code for the React library
├── playground-next/     # Test application using Next.js
├── playground-react/    # Test application using React
└── package.json         # Root configuration file
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ThePositree/js-frameworks-lib-kit.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Commands

### Build

To build all parts of the project:

```bash
npm run build
```

Specific commands:

- `npm run build:react` - Build only the React components
- `npm run build:playground-next` - Build only the Next.js playground
- `npm run build:playground-react` - Build only the React playground

### Development

To start development in all environments simultaneously:

```bash
npm run dev
```

Specific commands:

- `npm run dev:react` - Start development only for React components
- `npm run dev:playground-next` - Start development only for the Next.js playground
- `npm run dev:playground-react` - Start development only for the React playground

Combined commands:

- `npm run run:playground-next` - Start development for React components and the Next.js playground
- `npm run run:playground-react` - Start development for React components and the React playground

## Roadmap

- Add support for Vue
- Add support for Angular
- Add support for Svelte
- Create playgrounds for new frameworks
- Add unit tests
- Add integration tests

---

If you have any questions or suggestions, please create an issue in the [GitHub repository](https://github.com/ThePositree/js-frameworks-lib-kit/issues).
