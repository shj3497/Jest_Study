const add = require("../add");

test("adds 1+2 to equal 3", () => {
  //? 테스트 코드 작성
  expect(add(1, 2)).toBe(3);
});

test("null", () => {
  const n = null;
  expect(n).toBeNull(); // True
  expect(n).toBeDefined(); // True
  expect(n).not.toBeUndefined(); // True
  expect(n).not.toBeTruthy(); // True
  expect(n).toBeFalsy(); // True
});

test("Object assignment", () => {
  //? Object의 경우 toEqual()을 사용하여 확인한다.
  const data = { one: 1 };
  expect(data).toEqual({ one: 1 });
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

const compileAndroidCode = () => {
  throw new Error("you are using the wrong JDK");
};

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  expect(compileAndroidCode).toThrow("you are using the wrong JDK");
  expect(compileAndroidCode).toThrow(/JDK/);
});
