import { describe, it, expect } from "vitest";
import { FigmaUxAudit } from "../src";

describe("FigmaUxAudit", () => {
  it("should create an instance with default options", () => {
    const instance = new FigmaUxAudit();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new FigmaUxAudit({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new FigmaUxAudit();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
