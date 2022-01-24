const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    //? onSuccess라는 mock함수가 한번 호출?
    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);

    //? onSuccess라는 함수에 같이 전달되어야 할 인자를 확인
    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");

    expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);

    //? predicate가 true이므로 onFail은 실행하지 않는다. 고로 같이 전달할 인자도 없다.
    // expect(onFail).toHaveBeenCalledWith("no");
  });

  it("should call onFail when predicate is false", () => {
    check(() => false, onSuccess, onFail);
    /* 
      TODO 신기하구만.. 
      .toHaveBeenCalledTimes() : 함수가 몇번 호출 되었는지
      .toHaveBeenCalledWith() : 함수가 어떤 인자가 필요한지
    */

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith("no");
  });
});
