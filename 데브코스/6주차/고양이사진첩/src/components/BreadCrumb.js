import { checkTypeOfBreadCrumb as checkType } from '../utils/validation.js';

export default class Breadcrumb {
  constructor({ $target, initialState, onClick }) {
    checkType(initialState);
    this.$target = $target;
    this.state = initialState;
    this.onClick = onClick;
    this.init();
  }

  init() {
    this.$breadcrumb = document.createElement('nav');
    this.$breadcrumb.className = 'breadcrumb';
    this.render();
    this.bindEvent();
    this.$target.appendChild(this.$breadcrumb);
  }

  render() {
    this.$breadcrumb.innerHTML = `
      <div class="breadcrumb__item">Root</div>
      ${this.state.paths
        .map(({ id, name }) => `<div class="breadcrumb__item" data-id="${id}">${name}</div>`)
        .join('')}
    `;
  }

  setState(nextState) {
    checkType(nextState);
    if (this.state.paths.length !== nextState.paths.length) {
      this.state = nextState;
      this.render();
    }
  }

  bindEvent() {
    this.$breadcrumb.addEventListener('click', (e) => {
      const $breadcrumbItem = e.target.closest('.breadcrumb__item');
      if ($breadcrumbItem) {
        const { id } = $breadcrumbItem.dataset;
        this.onClick(id);
      }
    });
  }
}
