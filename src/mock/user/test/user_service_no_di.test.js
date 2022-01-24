const UserService = require("../user_service");
const UserClient = require("../user_client");

jest.mock("../user_client");

describe("UserService - no DI", () => {
  let userService;
  const login = jest.fn(async (id, password) => {
    if (id === "hyeokjin" && password === "gkgk") {
      return {
        name: "hyoekjin",
        age: "29",
      };
    }
    return;
  });
  UserClient.mockImplementation(() => {
    return { login };
  });

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("loginSuccess test", async () => {
    await userService.login("hyeokjin", "gkgk");
    expect(userService.isLogedIn).toBe(true);
    expect(login).toHaveBeenCalledTimes(1);
  });

  it("loginFail test", async () => {
    await userService.login("hyeokjin", "flfl");
    expect(userService.isLogedIn).toBe(false);
    expect(login).toHaveBeenCalledTimes(1);
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.login("hyeokjin", "gkgk");
    await userService.login("hyeokjin", "gkgk");
    expect(login).toHaveBeenCalledTimes(1);
  });
});
