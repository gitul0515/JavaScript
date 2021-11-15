// forEach는 for 문을 대체할 수 있는 고차 함수다.
const arr = [1, 2, 3];

arr.forEach((elem, index) => { arr[index] = elem ** 2; });
console.log(arr); // [1, 4, 9]
