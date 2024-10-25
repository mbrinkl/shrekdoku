import { computeNextIndex } from "./util";

it("should return -1 if input is -1", () => {
  const result = computeNextIndex(-1, "down");
  expect(result).toBe(-1);
});

it("should wrap next index on top left corner", () => {
  const leftResult = computeNextIndex(0, "left");
  const upResult = computeNextIndex(0, "up");
  const rightResult = computeNextIndex(0, "right");
  const downResult = computeNextIndex(0, "down");
  expect(leftResult).toBe(8);
  expect(upResult).toBe(72);
  expect(rightResult).toBe(1);
  expect(downResult).toBe(9);
});
