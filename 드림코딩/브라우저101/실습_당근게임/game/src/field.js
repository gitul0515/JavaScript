export default class Field {
  constructor(carrotSize, carrotCount, bugCount) {
    this.carrotSize = carrotSize;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', e => {
      this.onClick && this.onClick(e);
    });
  }

  setClickListener = onClick => {
    this.onClick = onClick;
  }

  init = () => {
    this.field.innerHTML = '';
    // 벌레와 당근을 생성한뒤 field에 추가해줌
    this.addItem('carrot', this.carrotCount, 'img/carrot.png');
    this.addItem('bug', this.bugCount, 'img/bug.png');
  }

  addItem = (className, count, imgPath) => {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - this.carrotSize;
    const y2 = this.fieldRect.height - this.carrotSize;
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      const x = Field.randomNumber(x1, x2);
      const y = Field.randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }

  static randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
