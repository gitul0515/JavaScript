import PostEditPage from "./PostEditPage.js";

const $target = document.querySelector('#app');

// new App({ $target, initialState: '테스트' });

const postEditPage = new PostEditPage({
  $target,
  initialState: {
    postId: 'new'
  }
});

postEditPage.setState({
  postId: 2
});
