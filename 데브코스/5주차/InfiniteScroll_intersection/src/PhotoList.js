export default function PhotoList({ $target, initialState, onScrollEnded }) {
  const $photoList = document.createElement('div');
  $target.appendChild($photoList);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  /* 
    IntersectionObserver
    : 관찰하는 대상(마지막 li 요소)가 뷰포트에 들어오면 서버에 데이터를 요청한다. 
      로딩 중이거나, 서버의 데이터를 모두 불러왔다면 요청하지 않는다. 
  */
  const observerOption = {
    threshold: 0.5,
  };
  const observer = new IntersectionObserver((entries) => {
    const { photos, isLodaing, totalCount } = this.state;
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLodaing && photos.length < totalCount) {
        console.log('화면 끝!!', entry);
        onScrollEnded();
      }
    });
  }, observerOption);
  let $lastLi = null;

  let isInitialize = false;
  this.render = () => {
    if (!isInitialize) {
      $photoList.innerHTML = `<ul class="PhotoList__photos"></ul>`;
      isInitialize = true;
    }

    const $photos = $photoList.querySelector('.PhotoList__photos');

    /* 
      photo의 id를 기준으로 li 요소가 렌더링 되어있는지 체크한다. 
      렌더링이 안 되었다면, li 요소를 생성하고 $photos에 추가한다. 
    */
    this.state.photos.forEach((photo) => {
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement('li');
        $li.setAttribute('data-id', photo.id);
        $li.innerHTML = `<img width="100%" src="${photo.imagePath}" />`;
        $photos.appendChild($li);
      }
    });

    /* 
      마지막 li 요소를 IntersectionObserver가 관찰하게 한다. 
      이전에 관찰하고 있던 li 요소가 있다면, 그 요소의 관찰을 해제한다. 
    */
    const $nextLi = $photos.querySelector('li:last-child');
    if ($nextLi !== null) {
      if ($lastLi !== null) {
        observer.unobserve($lastLi);
      }
      $lastLi = $nextLi;
      observer.observe($lastLi);
    }
  };
  this.render();
}
