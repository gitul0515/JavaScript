import { trie } from "./trie.js";

const words = [
  'string', 'str', 'stress', 'star', 'singer', 'sign', 'starcraft', 'starwars', 'starbucks', 'southkorea', 'south korea'
];

words.forEach(word => {
  trie.insert(word);
});

const searchField = document.querySelector('.input');
const wordWrapper = document.querySelector('.word-wrapper');
const wordList = document.querySelector('.word-list');

searchField.addEventListener('input', e => {
  const { value } = e.target;
  wordList.innerHTML = '';

  wordWrapper.classList.add('show');
  if (value === '') {
    wordWrapper.classList.remove('show');
  } else {
    const words = trie.autoComplete(value).slice(0, 5);
    words.forEach(word => {
      wordList.innerHTML += `<li class="word-item">${word}</li>`;
    });
  }
});

wordList.addEventListener('click', e => {
  searchField.value = e.target.textContent;
  wordWrapper.classList.remove('show');
})

searchField.addEventListener('change', () => {

});


