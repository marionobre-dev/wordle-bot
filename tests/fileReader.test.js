import { test, expect } from "playwright/test";
import { wordleReader } from "../src/utils/wordleReader";
test("FileReader reads a file", () => {
  const content = wordleReader();
  expect(content).toBeDefined();
  expect(content).not.toBeNull();
  expect(content).toContain("polar");
});

test("FileReader returns only five letters words", () => {
  const file = wordleReader();
  const content = file.split(/\r?\n/);

  expect(content).toBeInstanceOf(Array);
  content.forEach((word) => {
    expect(word).toBeDefined();
    expect(word).not.toBeNull();
    expect(word.length).toBe(5);
  });
});
