// 계수 정렬 알고리즘
const preArray = [];
for (let i = 0; i < 30; i++) { // 30개의 난수 생성
  preArray[i] = Math.floor(Math.random() * 10 + 1); // 난수 범위: 1~10
}
console.log('초기 배열: ', preArray);
const maxNum = 10; // 난수의 최대 범위

const count = []; // count 배열 선언
for (let i = 0; i <= maxNum; i++) {
  count[i] = 0; // count 배열 초기화
}
for (let i = 0; i < 30; i++) {
  count[preArray[i]]++;
}
console.log('count: ', count);

const postArray = [];
let k = 0;
for (let i = 1; i <= maxNum; i++) {
  for (let j = 0; j < count[i]; j++) {
    postArray[k++] = i;
  }
}
console.log('정렬 후 배열: ', postArray);
