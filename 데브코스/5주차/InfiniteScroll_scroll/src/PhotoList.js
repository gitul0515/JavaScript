export default function PhotoList({ $target, initialState, onScrollEnded }) {
  const $photoList = document.createElement('div');
  $target.appendChild($photoList);
  this.state = initialState;

  let isInitialize = false;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isInitialize) {
      $photoList.innerHTML = `<ul class="PhotoList__photos"></ul>`;
      isInitialize = true;
    }

    const $photos = $photoList.querySelector('.PhotoList__photos');

    this.state.photos.forEach((photo) => {
      // photo의 id 기준으로 렌더링이 되어있는지 체크
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        // 없으면 li 생성하고 $photos에 appendChild
        const $li = document.createElement('li');
        $li.setAttribute('data-id', photo.id);
        $li.innerHTML = `<img width="100%" src="${photo.imagePath}" />`;
        $photos.appendChild($li);
      }
    });
  };
  this.render();

  /* 
    스크롤이 끝 지점에 도달하면 서버에 데이터를 요청한다. 
    로딩 중이거나, 서버의 데이터를 모두 불러왔다면 요청하지 않는다. 
  */
  window.addEventListener('scroll', () => {
    const { photos, isLodaing, totalCount } = this.state;
    const isScrollEnded =
      window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight;
    if (isScrollEnded && !isLodaing && photos.length < totalCount) {
      onScrollEnded();
    }
  });
}
