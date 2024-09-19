import { add, subtract, multiply } from '../src/math';  // Using ES module syntax

describe("Simple arithmetic", () => {
  describe("addition", () => {
    test("expect 2 + 3 = 5", () => {
      expect(add(2, 3)).toEqual(5);
    });
    test("expect -2 + 3 = 1", () => {
      expect(add(-2, 3)).toEqual(1);
    });
  });

  describe("subtract", () => {
    test("expect 5 - 2 = 3", () => {
      expect(subtract(5, 2)).toEqual(3);
    });
    test("expect 2.5 - 5 = -2.5", () => {
      expect(subtract(2.5, 5)).toEqual(-2.5);
    });
  });

  describe("multiply", () => {
    test("expect 2 * 3 = 6", () => {
      expect(multiply(2, 3)).toEqual(6);
    });
    test("expect 6 * 7 = 42", () => {
      expect(multiply(6, 7)).toEqual(42);
    });
  });
});