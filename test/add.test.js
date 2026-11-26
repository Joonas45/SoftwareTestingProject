import { expect } from "chai";
import add from "../src/add.js";

describe("add", () => {
  it("should add two positive numbers", () => {
    expect(add(6, 4)).to.equal(10);
  });

  it("should add two negative numbers", () => {
    expect(add(-6, -4)).to.equal(-10);
  });

  it("should add a positive and a negative number", () => {
    expect(add(6, -4)).to.equal(2);
  });

  it("should return the same number when adding zero", () => {
    expect(add(5, 0)).to.equal(5);
    expect(add(0, 5)).to.equal(5);
  });

  it("should return zero when adding two zeros", () => {
    expect(add(0, 0)).to.equal(0);
  });

  it("should support decimal numbers", () => {
    expect(add(1.5, 2.5)).to.equal(4);
  });

  it("should support large numbers", () => {
    expect(add(1e10, 2e10)).to.equal(3e10);
  });
});
