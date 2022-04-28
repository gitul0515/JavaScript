import { checkTypeOfImageViewer as checkType } from '../utils/validation.js';

const ESCAPE_KEY = 'Escape';

export default class ImageViewer {
  constructor({ $target, initialState, onClose }) {
    checkType(initialState);
    this.$target = $target;
    this.state = initialState;
    this.onClose = onClose;
    this.init();
  }

  init() {
    this.$imageViewer = document.createElement('div');
    this.$imageViewer.className = 'modal modal--image-viewer';
    this.render();
    this.$target.appendChild(this.$imageViewer);
    this.bindEvent();
  }

  setState(nextState) {
    checkType(nextState);
    if (this.state.selectedImageUrl !== nextState.selectedImageUrl) {
      this.state = nextState;
      this.render();
    }
  }

  render = () => {
    const { selectedImageUrl } = this.state;
    if (selectedImageUrl) {
      this.$imageViewer.style.display = 'block';
      this.$imageViewer.innerHTML = `
        <div class="content">
          <img src="${selectedImageUrl}" />
        </div>
      `;
    } else {
      this.$imageViewer.style.display = 'none';
      this.$imageViewer.innerHTML = '';
    }
  };

  bindEvent() {
    this.$imageViewer.addEventListener('click', (e) => {
      if (e.target.matches('.modal--image-viewer')) {
        this.onClose();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === ESCAPE_KEY) {
        this.onClose();
      }
    });
  }
}
