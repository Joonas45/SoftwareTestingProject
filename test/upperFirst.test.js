import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst", () => {
  it("should convert the first character to uppercase", () => {
    expect(upperFirst("fred")).to.equal("Fred");
  });

  it("should leave the remaining characters unchanged", () => {
    expect(upperFirst("fRED")).to.equal("FRED");
  });

  it("should return an uppercase string unchanged", () => {
    expect(upperFirst("FRED")).to.equal("FRED");
  });

  it("should handle a lowercase string", () => {
    expect(upperFirst("hello world")).to.equal("Hello world");
  });

  it("should handle an empty string", () => {
    expect(upperFirst("")).to.equal("");
  });

  it("should handle a single lowercase character", () => {
    expect(upperFirst("a")).to.equal("A");
  });

  it("should handle a single uppercase character", () => {
    expect(upperFirst("A")).to.equal("A");
  });

  it("should handle strings with leading spaces", () => {
    expect(upperFirst(" hello")).to.equal(" hello");
  });

  it("should handle null", () => {
    expect(upperFirst(null)).to.equal("");
  });

  it("should handle undefined", () => {
    expect(upperFirst(undefined)).to.equal("");
  });

  it("should handle numbers", () => {
    expect(upperFirst(123)).to.equal("123");
  });
});
