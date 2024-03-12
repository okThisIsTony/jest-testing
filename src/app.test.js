import { add, subtract, multiply, divide, fizzbuzz } from "./app";

describe("my test suite", () => {
  it("adds 1 + 1", () => {
    expect(add(1, 1)).toEqual(2);
  });
  it("subtracts 2 - 1", () => {
    expect(subtract(2, 1)).toEqual(1);
  });
  it("multiplies 2 * 2", () => {
    expect(multiply(2, 2)).toEqual(4);
  });
  it("divide 6 / 2", () => {
    expect(divide(6, 2)).toEqual(3);
  });
  it("fizzbuzz returns 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
});
