#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { format } from "date-fns";
import { getTemplate } from "../lib/template";

const args = process.argv.slice(2);

if (!args[0]) {
  console.error("Usage: generate-instructions <filename>");
  process.exit(1);
}

const filename = args[0].endsWith(".md") ? args[0] : `${args[0]}.md`;
const today = format(new Date(), "MM-dd-yyyy");
const dir = path.resolve(process.cwd(), "agent-instructions", today);
const fullPath = path.join(dir, filename);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(fullPath, getTemplate(), "utf-8");
console.log(`✅ Created: ${fullPath}`);
