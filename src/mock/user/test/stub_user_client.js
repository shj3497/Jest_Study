class UserClient {
  async login(id, password) {
    if (id === "hyeokjin" && password === "gkgk") {
      return {
        name: "hyoekjin",
        age: "29",
      };
    }
    return;
  }
}

module.exports = UserClient;
