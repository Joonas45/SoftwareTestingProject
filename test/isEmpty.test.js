import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  describe("Planned test cases", () => {
    it("isEmpty_t1: should return true for null", () => {
      expect(isEmpty(null)).to.equal(true);
    });

    it("isEmpty_t2: should return true for undefined", () => {
      expect(isEmpty(undefined)).to.equal(true);
    });

    it("isEmpty_t3: should return true for boolean values", () => {
      expect(isEmpty(true)).to.equal(true);
    });

    it("isEmpty_t4: should return true for numbers", () => {
      expect(isEmpty(1)).to.equal(true);
    });

    it("isEmpty_t5: should return true for an empty string", () => {
      expect(isEmpty("")).to.equal(true);
    });

    it("isEmpty_t6: should return false for a non-empty string", () => {
      expect(isEmpty("koira")).to.equal(false);
    });

    it("isEmpty_t7: should return true for an empty array", () => {
      expect(isEmpty([])).to.equal(true);
    });

    it("isEmpty_t8: should return false for an array with elements", () => {
      expect(isEmpty([12, 35, 62])).to.equal(false);
    });

    it("isEmpty_t9: should return true for an empty object", () => {
      expect(isEmpty({})).to.equal(true);
    });

    it("isEmpty_t10: should return false for an object with properties", () => {
      expect(isEmpty({ pet: "fish" })).to.equal(false);
    });
  });

  describe("AI generated test cases", () => {
    it("should return true for false", () => {
      expect(isEmpty(false)).to.equal(true);
    });

    it("should return true for zero", () => {
      expect(isEmpty(0)).to.equal(true);
    });

    it("should return true for an empty Map", () => {
      expect(isEmpty(new Map())).to.equal(true);
    });

    it("should return false for a Map with entries", () => {
      expect(isEmpty(new Map([["pet", "fish"]]))).to.equal(false);
    });

    it("should return true for an empty Set", () => {
      expect(isEmpty(new Set())).to.equal(true);
    });

    it("should return false for a Set with values", () => {
      expect(isEmpty(new Set([1, 2, 3]))).to.equal(false);
    });

    it("should return true for an empty typed array", () => {
      expect(isEmpty(new Uint8Array([]))).to.equal(true);
    });

    it("should return false for a typed array with elements", () => {
      expect(isEmpty(new Uint8Array([1, 2, 3]))).to.equal(false);
    });

    it("should return true for an empty arguments object", () => {
      const args = (function() {
        return arguments;
      })();

      expect(isEmpty(args)).to.equal(true);
    });

    it("should return false for an arguments object with elements", () => {
      const args = (function() {
        return arguments;
      })(1, 2, 3);

      expect(isEmpty(args)).to.equal(false);
    });

    it("should return true for an empty array-like object", () => {
      expect(isEmpty({ length: 0 })).to.equal(true);
    });

    it("should return false for an array-like object with elements", () => {
      const collection = {
        0: "a",
        1: "b",
        length: 2,
        splice: function() { },
      };

      expect(isEmpty(collection)).to.equal(false);
    });
  });
});
