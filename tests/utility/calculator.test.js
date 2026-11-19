import { describe, it, expect } from "vitest";
import { add, subtract } from "../../src/utility/calculator.js";

describe("Test add Utility Function", () => {
  it("Should add 5+5 and get 10", () => {
    expect(add(5, 5)).toBe(10);
  });
  it("Should add 3+2 and get 5", () => {
    expect(add(3, 2)).toBe(5);
  });
});

describe("Test subtract Utility Function", () => {
  it("Should subtract 5-5 and get 0", () => {
    expect(subtract(5, 5)).toBe(0);
  });
  it("Should subtract 7-5 and get 2", () => {
    expect(subtract(7, 5)).toBe(2);
  });
});
