import { expect } from "chai";
import drop from "../src/drop.js";

describe("drop", () => {
  it("should drop the first element by default", () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
  });

  it("should drop the specified number of elements", () => {
    expect(drop([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
  });

  it("should return an empty array when n is greater than the array length", () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
  });

  it("should return the original elements when n is zero", () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });

  it("should return the original elements when n is negative", () => {
    expect(drop([1, 2, 3], -2)).to.deep.equal([1, 2, 3]);
  });

  it("should return an empty array when the input array is empty", () => {
    expect(drop([])).to.deep.equal([]);
  });

  it("should return an empty array when the input is null", () => {
    expect(drop(null)).to.deep.equal([]);
  });

  it("should return an empty array when the input is undefined", () => {
    expect(drop(undefined)).to.deep.equal([]);
  });

  it("should drop all elements when n equals the array length", () => {
    expect(drop([1, 2, 3], 3)).to.deep.equal([]);
  });

  it("should handle a single-element array", () => {
    expect(drop([1])).to.deep.equal([]);
  });

  it("should handle decimal values of n", () => {
    expect(drop([1, 2, 3, 4], 2.8)).to.deep.equal([3, 4]);
  });

  it("should handle numeric strings for n", () => {
    expect(drop([1, 2, 3, 4], "2")).to.deep.equal([3, 4]);
  });

  it("should not modify the original array", () => {
    const array = [1, 2, 3];

    drop(array, 2);

    expect(array).to.deep.equal([1, 2, 3]);
  });
});
