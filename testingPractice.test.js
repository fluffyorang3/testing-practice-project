import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from "./testingPractice.js";

test("capitalizes first letter", () => {
  expect(capitalize("test")).toBe("Test");
});

test("reverses text", () => {
  expect(reverseString("Test")).toBe("tseT");
});

test("Calculate numbers", () => {
  expect(calculator(3, 2).add()).toBe(5);
});

test("Cypher", () => {
  expect(caesarCipher("This is a message", 4)).toBe("Tlmw mw e qiwweki");
});
