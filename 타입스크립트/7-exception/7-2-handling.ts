{
  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private service: UserService) {}
    run() {
      try {
        this.service.login();
      } catch(error) {
        console.error('Login failed! Check your network connection.');
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}