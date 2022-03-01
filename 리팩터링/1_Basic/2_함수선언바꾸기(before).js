// 함수 선언 바꾸기 (마이그레이션 절차), pp.186-187
function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c));

