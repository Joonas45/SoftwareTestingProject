import { expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  it("should capitalize the first character", () => {
    expect(capitalize("hello")).to.equal("Hello");
  });

  it("should convert the remaining characters to lowercase", () => {
    expect(capitalize("hELLO WORLD")).to.equal("Hello world");
  });

  it("should handle an uppercase string", () => {
    expect(capitalize("FRED")).to.equal("Fred");
  });

  it("should handle a lowercase string", () => {
    expect(capitalize("fred")).to.equal("Fred");
  });

  it("should handle an empty string", () => {
    expect(capitalize("")).to.equal("");
  });

  it("should handle a single character", () => {
    expect(capitalize("a")).to.equal("A");
  });

  it("should handle a string with spaces", () => {
    expect(capitalize("hello world")).to.equal("Hello world");
  });

  it("should handle numbers as input", () => {
    expect(capitalize(123)).to.equal("123");
  });

  it("should handle null as input", () => {
    expect(capitalize(null)).to.equal("");
  });

  it("should handle undefined as input", () => {
    expect(capitalize(undefined)).to.equal("");
  });
});
