import { expect } from "chai";
import countBy from "../src/countBy.js";

describe("countBy", () => {
  it("should count elements by a property", () => {
    const users = [
      { user: "barney", active: true },
      { user: "betty", active: true },
      { user: "fred", active: false },
    ];

    const result = countBy(users, (value) => value.active);

    expect(result).to.deep.equal({
      true: 2,
      false: 1,
    });
  });

  it("should count repeated values in an array", () => {
    const result = countBy([1, 2, 3, 4, 5, 6], (value) => value % 2);

    expect(result).to.deep.equal({
      0: 3,
      1: 3,
    });
  });

  it("should count strings by their first character", () => {
    const result = countBy(
      ["apple", "banana", "avocado", "blueberry"],
      (value) => value[0],
    );

    expect(result).to.deep.equal({
      a: 2,
      b: 2,
    });
  });

  it("should return an empty object for an empty array", () => {
    const result = countBy([], (value) => value);

    expect(result).to.deep.equal({});
  });

  it("should count all elements under the same key", () => {
    const result = countBy([1, 2, 3, 4], () => "all");

    expect(result).to.deep.equal({
      all: 4,
    });
  });

  it("should work with an object collection", () => {
    const collection = {
      first: 1,
      second: 2,
      third: 1,
      fourth: 2,
    };

    const result = countBy(collection, (value) => value);

    expect(result).to.deep.equal({
      1: 2,
      2: 2,
    });
  });

  it("should group values returned as strings", () => {
    const result = countBy([1, 2, 3, 4, 5], (value) =>
      value > 2 ? "large" : "small",
    );

    expect(result).to.deep.equal({
      small: 2,
      large: 3,
    });
  });

  it("should count null values returned by the iteratee", () => {
    const result = countBy([1, 2, 3], () => null);

    expect(result).to.deep.equal({
      null: 3,
    });
  });
});
