class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      //? 네트워크 로직이 이 클래스 안에 있으면 테스트코드를 작성하기 힘들어진다.
      //? 고로 네트워크 통신 로직을 바깥으로(다른 클래스로) 빼주었다.
      //return fetch('http://example.com/login/id+password') //
      // .then((response) => response.json());
      return this.userClient
        .login(id, password) //
        .then((data) => {
          if (!data) return;
          return (this.isLogedIn = true);
        });
    }
  }
}

module.exports = UserService;
