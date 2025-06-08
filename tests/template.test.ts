// tests/template.test.ts
import { describe, it, expect } from "vitest";
import { getTemplate } from "../lib/template";

describe("getTemplate", () => {
  it("includes INSTRUCTIONS STATUS section", () => {
    const content = getTemplate();
    expect(content).toContain("INSTRUCTIONS STATUS: PENDING");
  });

  it("includes OUTCOME SUMMARY section", () => {
    const content = getTemplate();
    expect(content).toContain("⸻ OUTCOME SUMMARY ---");
  });
});
