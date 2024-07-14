import { capitalize, reverseString } from "./testingPractice.js";

test("capitalizes first letter", () => {
  expect(capitalize("test")).toBe("Test");
});

test("reverses text", () => {
  expect(reverseString("Test")).toBe("tseT");
});
