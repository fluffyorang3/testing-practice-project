import { capitalize } from "./testingPractice.js";

test("capitalizes text", () => {
  expect(capitalize("0test")).toBe("0test");
});
