import { trie } from "./trie.js";

trie.insert('string');
trie.insert('str');
trie.insert('stress');
trie.insert('star');
trie.insert('singer');
trie.insert('sign');
trie.insert('starcraft');
trie.insert('southkorea');
trie.insert('south korea');

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


