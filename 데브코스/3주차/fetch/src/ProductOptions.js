export default function ProductOptions({ $target, initialState, onSelect }) {
  const $select = document.createElement('select');
  $target.appendChild($select);

  /*
   * 상품 옵션 이름 렌더링 시 "상품명 + 옵션명 + 재고: n개"
   * 재고가 0인 상품은 옵션 선택 불가
   */
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  const createOptionFullName = ({ optionName, optionPrice, stock }) => {
    return `${optionName} ${optionPrice > 0 ? `(옵션가 ${optionPrice}` : ''} | ${stock > 0 ? `재고 ${stock}` : '재고 없음'})`
  };

  $select.addEventListener('change', e => {
    const id = parseInt(e.target.value, 10);
    console.log(this.state);
    const option = this.state.find(option => option.optionId === id);
    
    if(option) {
      onSelect(option);
    }
  })

  this.render = () => {
    if (this.state && Array.isArray(this.state)) {
      $select.innerHTML = `
        <option>선택하세요</option>
        ${this.state.map(option => `<option ${option.stock === 0 ? 'disabled' : ''} value="${option.optionId}">${createOptionFullName(option)}</option>`).join('')}
      `;
    }
  }
  this.render();
}