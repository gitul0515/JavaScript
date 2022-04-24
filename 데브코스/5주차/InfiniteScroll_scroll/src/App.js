import PhotoList from './PhotoList.js';
import { request } from './Api.js';

export default function App({ $target }) {
  const $h1 = document.createElement('h1');
  $h1.innerText = 'Cat Photos';
  $h1.style.textAlign = 'center';

  $target.appendChild($h1);

  this.state = {
    limit: 5,
    nextStart: 0, // limit 개수만큼 계속 더해짐
    photos: [],
    isLodaing: false,
    totalCount: 0,
  };

  const photoList = new PhotoList({
    $target,
    initialState: {
      photos: this.state.photos,
      isLodaing: this.state.isLodaing,
      totalCount: this.state.totalCount,
    },
    onScrollEnded: async () => {
      await fetchPhotos();
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    photoList.setState({
      photos: this.state.photos,
      isLodaing: this.state.isLodaing,
      totalCount: this.state.totalCount
    });
  };

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLodaing: true,
    });

    const { limit, nextStart } = this.state;
    const photos = await request(
      `/cat-photos?_limit=${limit}&_start=${nextStart}`
    );

    this.setState({
      ...this.state,
      nextStart: nextStart + limit,
      photos: [...this.state.photos, ...photos],
      isLodaing: false,
    });
  };

  const initialize = async () => {
    const totalCount = await request('/cat-photos/count');
    this.setState({
      ...this.state,
      totalCount,
    });
    await fetchPhotos();
  };
  initialize();
}
