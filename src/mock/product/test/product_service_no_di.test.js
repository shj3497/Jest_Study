const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

//! 나쁜 예제!

//TODO 모듈간의 상호작용을 테스트 하면 안된다. >> 딱 그 단위 하나만 테스트 해야한다.
//TODO 네트워크 상태에 의존하는 테스트코드는 좋지 않음.
//TODO 고로 ProductClient에 의존하지 않는 ProductService의 테스트 코드를 작성해야한다.
jest.mock("../product_client");

describe("ProductService no-di", () => {
  const fetchItems = jest.fn(async () => {
    return [
      { item: "Milk", available: true },
      { item: "Banana", available: false },
    ];
  });
  //? mockImplementation() 함수를 통째로 즉석해서 재 구현한다.
  //? >> product_service_no_di 에서 호출하여 사용하는 ProductClient()의 리턴값을 재 정의한다
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});

//? ProductService에서 사용하는 ProductClient를 mock()으로 가짜 클래스를 만들어 주었고,
//? 가짜를 사용하는 ProductService는 기존 ProductClient에서 리턴해주는 fetchItems()이 필요하기에,
//? jest.fn()으로 가짜 fetchItems를 만들어 주었다.
//? 그 가짜 fetchItems를 .mockImplementation()을 사용하여 가짜클래스 ProductClient에 주입(?) 해주었다.
