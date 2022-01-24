const UserService = require("../user_service");
// const UserClient = require("../user_client");
const StubUserClient = require("./stub_user_client");

describe("UserService - Stub", () => {
  let userService;
  let stubUserClient;
  beforeEach(() => {
    stubUserClient = new StubUserClient();
    userService = new UserService(stubUserClient);
  });

  it("login Success", async () => {
    await userService.login("hyeokjin", "gkgk");
    expect(userService.isLogedIn).toBe(true);
  });

  it("login Fail", async () => {
    await userService.login("hyeokjin", "fkfk");
    expect(userService.isLogedIn).toBe(false);
  });
});
