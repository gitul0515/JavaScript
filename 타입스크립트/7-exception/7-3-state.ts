{
  // 타입을 활용한 에러 처리
  type SuccessState = {
    result: 'success';
  }

  type ErrorState = {
    result: 'fail';
    reason: 'no network' | 'down' | 'timeout';
  }

  type ResultState = SuccessState | ErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: 'fail',
        reason: 'no network'
      }
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login(): ResultState {
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private service: UserService) {}
    run() {
      const state = this.service.login();
      if (state.result === 'success') {
        console.log('로그인 성공!');
      } else {
        console.log(`로그인 실패! (${state.reason})`);
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}