import App from './App.js';
import Editor from './Editor.js';

const $target = document.querySelector('#app');

// new App({ $target, initialState: '테스트' });

new Editor({ 
  $target, 
  initialState: {
    title: '오늘의 학습일지',
    content: '헬로우 월드'
  },
  onEditing: post => {
    console.log(post);
  }
});