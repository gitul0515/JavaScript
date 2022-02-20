{
  // Discriminated

  // function: login => success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    const response = false;
    if (response) {
      return {
        result: 'success',
        response: {
          body: 'logged in!'
        }
      }
    } else {
      return {
        result: 'fail',
        reason: 'fail: syntax error'
      }
    }
  }

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(state.response.body)
    } else {
      console.log(state.result);
    }
  }
  printLoginState(login());
}