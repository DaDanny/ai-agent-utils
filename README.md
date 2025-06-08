# 🧠 ai-agent-utils

[![npm version](https://img.shields.io/npm/v/ai-agent-utils.svg)](https://www.npmjs.com/package/ai-agent-utils)
[![npm downloads](https://img.shields.io/npm/dt/ai-agent-utils.svg)](https://www.npmjs.com/package/ai-agent-utils)

**CLI utilities for generating instruction templates for AI coding agents.**

This tool helps you create structured instruction files for your AI workflows. It automatically creates a dated Markdown file with a helpful template that includes:

- Status tracking (`PENDING`, `COMPLETE`, `FAILURE`, `PARTIAL`)
- Before/during/after instructions for AI agents
- An outcome summary section for audit and traceability

---

## 📦 Installation

### Option 1: Global install (recommended)

```bash
npm install -g ai-agent-utils
```

Then run:

```bash
generate-instructions my-task-name
```

### Option 2: Use via npx (no install)

```bash
npx ai-agent-utils generate-instructions my-task-name
```

This creates a file at:

```
./agent-instructions/YYYY-MM-DD/my-task-name.md
```

###  Option 3: Add to an existing project (local dev dependency)
```bash
npm install --save-dev ai-agent-utils
```
Then add a script to your package.json:
```json
{
  "scripts": {
    "generate-instructions": "generate-instructions"
  }
}
```
Now run:
```bash
npm run generate-instructions my-task-name
```
> 💡 You can also run it directly with `npx` from your local `node_modules/.bin`:
```bash
npx ai-agent-utils generate-instructions my-task-name
```
---

## 🛠 Usage

```bash
generate-instructions "refactor-api-tests"
```
Creates:

```
agent-instructions/
└── YYYY-MM-DD/
    └── refactor-api-tests.md
```
---

## 🧪 Tests

Install dev dependencies and run tests with:

```bash
npm install
npm run test
```

---

## 📁 Project Structure

```
ai-agent-utils/
├── bin/                    # CLI entry point
│   └── generate-instructions.ts
├── lib/                    # Template logic
│   └── template.ts
├── dist/                   # Compiled output (after build)
├── tests/                  # Vitest test files
├── package.json
├── tsup.config.ts
├── tsconfig.json
└── README.md
```

---

## 🧼 License

MIT — do whatever, just don’t say you wrote it.

---

🧑‍💻 Created by @dadanny
