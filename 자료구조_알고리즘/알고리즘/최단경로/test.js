// 배열의 길이를 지정하면서 초기화
const array = Array.from({ length: 7 }, () => 1);
console.log(array);

const array2 = array;
console.log(array2);

array2.fill(-1);
console.log(array);
console.log(array2);
