export default class Field {
  constructor() {
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', e => {
      this.onClick && this.onClick(e);
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }
}
