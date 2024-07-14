import { capitalize, reverseString, calculator } from "./testingPractice.js";

test("capitalizes first letter", () => {
  expect(capitalize("test")).toBe("Test");
});

test("reverses text", () => {
  expect(reverseString("Test")).toBe("tseT");
});

test("Calculate numbers", () => {
  expect(calculator(3, 2).add()).toBe(5);
});
