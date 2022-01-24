const CalculatorClass = require("../calculator");

const calculator = new CalculatorClass();

test("calculator set test", () => {
  calculator.set(10);
  expect(calculator.value).toBe(10);
});

test("calculator clear test", () => {
  calculator.set(10);
  calculator.clear();
  expect(calculator.value).toBe(0);
});

test("calculator add test", () => {
  calculator.set(10);
  calculator.add(5);
  expect(calculator.value).toBe(15);
});

test("calculator subtract test", () => {
  calculator.set(10);
  calculator.subtract(3);
  expect(calculator.value).toBe(7);
});

test("calculator multiply test", () => {
  calculator.set(10);
  calculator.multiply(4);
  expect(calculator.value).toBe(40);
});

test("calculator divide test", () => {
  calculator.set(10);
  calculator.divide(5);
  expect(calculator.value).toBe(2);
});

test("calculator class test", () => {
  calculator.set(10);
  calculator.divide(5);
  expect(calculator.value).toBe(2);
  calculator.multiply(50);
  expect(calculator.value).toBe(100);
  calculator.clear(0);
  expect(calculator.value).toBe(0);
});
