{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

  function printLoginState(resourceLoadState: ResourceLoadState): void {
    const { state } = resourceLoadState;
    if (state === 'loading') {
      console.log(`👀 ${state}...`);
    } else if (state === 'success') {
      console.log(`😃 ${resourceLoadState.response.body}`);
    } else if (state === 'fail') {
      console.log(`😱 ${resourceLoadState.reason}`);
    } else {
      throw new Error('unexpected error');
    }
  }
}
