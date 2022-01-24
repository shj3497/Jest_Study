const ProductService = require("../product_service");
const StubProductClient = require("./stub_product_client");

//? productService의 클래스를 수정해주었다.
//? Service 클래스 안에서 client 클래스를 만들지 않고 주입받는 식으로..
// >> 코드를 처음 짤 때부터 하나의 함수안에서 선언하는 행동을 하지 말라는거네.. 주입받는식으로 짜라는 느낌
describe("ProductService - Stub", () => {
  let productService;

  beforeEach(() => {
    const stubProductClient = new StubProductClient();
    productService = new ProductService(stubProductClient);
  });

  it("available test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
