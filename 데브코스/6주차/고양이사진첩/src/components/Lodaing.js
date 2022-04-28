import { checkTypeOfLodaing as checkType } from '../utils/validation.js';
import { GIF_IMG_URL } from '../utils/urls.js';

export default class Loading {
  constructor({ $target, initialState }) {
    checkType(initialState);
    this.$target = $target;
    this.state = initialState;
    this.init();
  }

  init() {
    this.$loading = document.createElement('div');
    this.$loading.className = 'modal modal--loading ';
    this.render();
    this.$target.appendChild(this.$loading);
  }

  render() {
    this.$loading.innerHTML = `
      <div class="content">
        <img class="content__img--loading" src="${GIF_IMG_URL}" alt="Lodaing..." /> 
      </div>
    `;

    this.$loading.style.display = this.state.isLoading ? 'block' : 'none';
  }

  setState(nextState) {
    checkType(nextState);
    if (this.state.isLoading !== nextState.isLoading) {
      this.state = nextState;
      this.render();
    }
  }
}
