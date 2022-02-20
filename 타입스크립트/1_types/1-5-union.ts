{
  // Union Types: OR
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('up');

  type TileSize = 8 | 16 | 32;
  const tite: TileSize = 16;

  // function: login => success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    const response = false;
    if (response) {
      return {
        response: {
          body: 'logged in!'
        }
      }
    } else {
      return {
        reason: 'fail: syntax error'
      }
    }
  }

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
  printLoginState(login());
}