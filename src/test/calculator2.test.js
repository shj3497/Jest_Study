const Calculator = require("../calculator");

describe("Calculator", () => {
  let cal;
  //? 각각의 it, test함수가 실행되기 전에 beforeEach가 먼저 실행하고 it, test함수가 실행된다.
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(10);
    expect(cal.value).toBe(10);
  });

  it("clear", () => {
    cal.set(10);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  describe("add", () => {
    it("1 + 2 = 3 ", () => {
      cal.add(1);
      cal.add(2);
      expect(cal.value).toBe(3);
    });

    it("value 100", () => {
      cal.add(50);
      cal.add(50);
      expect(cal.value).toBe(100);
    });

    it("add should throw an error if value is greater than 100", () => {
      // cal.add(50);
      // cal.add(51);
      // expect(cal.value).toThrowError() >> 에러남
      //? 예상하는 에러값을 실행하는 것이기 때문에 expect()안에 콜백함수로 실행시킨다.
      expect(() => {
        cal.add(50);
        cal.add(51);
      }).toThrowError("Value can not be greater than 100");
    });
  });

  it("subtract", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);

    cal.subtract(-2);
    expect(cal.value).toBe(1);
  });

  test("multiply", () => {
    cal.multiply(10);
    expect(cal.value).toBe(0);
    cal.set(10);
    cal.multiply(4);
    expect(cal.value).toBe(40);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN); //* Not a Number
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("40 / 8", () => {
      cal.set(40);
      cal.divide(8);
      expect(cal.value).toBe(5);
    });
  });
});
