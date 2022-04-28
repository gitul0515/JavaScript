import { checkTypeOfNodes as checkType } from '../utils/validation.js';
import { NODE_IMG_URL } from '../utils/urls.js';

const PREV_IMG_URL = `${NODE_IMG_URL}/prev.png`;
const DIRECTORY_IMG_URL = `${NODE_IMG_URL}/directory.png`;
const FILE_IMG_URL = `${NODE_IMG_URL}/file.png`;
const DIRECTORY = 'DIRECTORY';
const BACKSPACE_KEY = 'Backspace';

export default class Nodes {
  constructor({ $target, initialState, onClick, onPrevClick }) {
    checkType(initialState);
    this.$target = $target;
    this.state = initialState;
    this.onClick = onClick;
    this.onPrevClick = onPrevClick;
    this.init();
  }

  init() {
    this.$nodes = document.createElement('div'); // TODO: 요소를 생성하는 함수 만들기
    this.$nodes.className = 'nodes';
    this.render();
    this.bindEvent();
    this.$target.appendChild(this.$nodes);
  }

  render() {
    const { isRoot, nodes } = this.state;
    this.$nodes.innerHTML = `
      ${
        isRoot
          ? ''
          : `
        <div class="node">
          <img src="${PREV_IMG_URL}">
        </div>
        `
      }
      ${nodes
        .map(
          (node) => `
        <div class="node" data-id="${node.id}">
          <img src="${node.type === DIRECTORY ? `${DIRECTORY_IMG_URL}` : `${FILE_IMG_URL}`}">
          ${node.name}
        </div>
      `,
        )
        .join('')}
    `;
  }

  setState(nextState) {
    checkType(nextState);
    if (this.state.nodes !== nextState.nodes) {
      this.state = nextState;
      this.render();
    }
  }

  bindEvent() {
    this.$nodes.addEventListener('click', (e) => {
      const $node = e.target.closest('.node');
      if ($node) {
        const { id } = $node.dataset;
        if (id) {
          const node = this.state.nodes.find((node) => node.id === id);
          this.onClick(node);
        } else {
          this.onPrevClick();
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === BACKSPACE_KEY && !this.state.isRoot) {
        this.onPrevClick();
      }
    });
  }
}
