const fetchProduct = require("../async");

describe("Async Test1", () => {
  //TODO test, it 콜백함수 선언시 선언한 인자 done으로 비동기함수 마지막에 선언해주면 에러를 정확히 볼 수 있다.
  //* 사용 자제할 것
  it("async then", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  //TODO Done()방식보다는 return방식이 속도가 더 빠름
  it("async return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async Resolve", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async Reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
