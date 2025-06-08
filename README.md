# 🧠 ai-agent-utils

**CLI utilities for generating instruction templates for AI coding agents.**

This tool helps you create structured instruction files for your AI workflows. It automatically creates a dated Markdown file with a helpful template that includes:

- Status tracking (`PENDING`, `COMPLETE`, `FAILURE`, `PARTIAL`)
- Before/during/after instructions for AI agents
- An outcome summary section for audit and traceability

---

## 📦 Installation

### Global install (recommended)

```bash
npm install -g @dadanny/ai-agent-utils
```

Then run:

```bash
generate-instructions my-task-name
```

⸻

Or use via npx (no install)

```bash
npx @dadanny/ai-agent-utils generate-instructions my-task-name
```

This creates a file at:

```
./agent-instructions/06-07-2025/my-task-name.md
```

⸻

🛠 Usage

```bash
generate-instructions "refactor-api-tests"
```
Creates:

```
agent-instructions/
└── 06-07-2025/
    └── refactor-api-tests.md
```
⸻

## 🧪 Tests

Install dev dependencies and run tests with:

```bash
npm install
npm run test
```

⸻

📁 Project Structure
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

⸻

## 🧼 License

MIT — do whatever, just don’t say you wrote it.

⸻

🧑‍💻 Created by @dadanny
