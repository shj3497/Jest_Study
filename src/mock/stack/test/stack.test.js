const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push item", () => {
    stack.push("1");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("stack length is zero");
    });

    it("returns the last pushed item and return", () => {
      stack.push("1");
      stack.push("2");

      expect(stack.pop()).toBe("2");
    });
  });

  describe("peek", () => {
    it("view last item in Stack", () => {
      stack.push("1");
      stack.push("3");
      expect(stack.peek()).toBe("3");
      expect(stack.size()).toBe(2);
    });
  });
});
