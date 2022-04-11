export default function PostList({ $target, initialState, onPostClick }) {
  const $postList = document.createElement('div');
  $target.appendChild($postList);

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    $postList.innerHTML = `
      <ul>
        ${this.state.map(({ id, title }) => `
          <li data-id=${id}>${title}</li>
        `).join('')}
      </ul>
    `
  }
  this.render();
}