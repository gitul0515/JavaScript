export default function PhotoList({ $target, initialState, onScrollEnded }) {
  const $photoList = document.createElement('div');
  $target.appendChild($photoList);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $photoList.innerHTML = `
      <ul>
        ${this.state
          .map(
            (photo) =>
              `
              <li>
                <img width="100%" src="${photo.imagePath}" />
              </li>
              `
          )
          .join('')}
      </ul>
      <button class="PhotoList__loadMore">Load More</button>
    `;
  };

  this.render();
}
