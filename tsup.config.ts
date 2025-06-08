import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["bin/generate-instructions.ts"],
  outDir: "dist",
  format: ["esm"],
  target: "node18",
  bundle: true,
  noExternal: [/.*/],
  clean: true,
});
