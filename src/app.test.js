import { add, subtract, multiply, divide, fizzbuzz, fizzbuzzTo } from "./app";

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
  it("fizzbuzz returns 2", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });
  it("fizzbuzz returns 3", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
    console.log(fizzbuzz(3));
  });
  it("fizzbuzz returns 4", () => {
    expect(fizzbuzz(4)).toEqual(4);
  });
  it("fizzbuzz returns 5", () => {
    expect(fizzbuzz(5)).toEqual("buzz");
  });
  it("fizzbuzz returns 15", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });
  it("for loop exercise", () => {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  });
  it("fizzbuzzTo", () => {
    const result = fizzbuzzTo(1);
    expect(result).toEqual([1]);
  });
});
