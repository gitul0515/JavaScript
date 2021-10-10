// 계수 정렬 알고리즘 (시간 복잡도: O(n + k))
// 배열 생성 및 초기화
const preArray = []; // 초기 배열
for (let i = 0; i < 30; i++) { // 30개의 난수 생성
  const num = Math.floor(Math.random()*100 + 1); // 난수 범위: 1 ~ 100;
  preArray[i] = num;
}
const numMax = 100; // 난수의 최대값
console.log('초기 배열: ', preArray);

// count 배열 생성 및 초기화
const count = [];
for (let i = 0; i < numMax + 1; i++) { // 인덱스 0은 사용하지 않는다.
  count[i] = 0;
}
// count 배열에 값을 저장
for (let i = 0; i < 30; i++) {
  count[preArray[i]]++; // ex) count[5]++
}
console.log('count 배열: ', count);

const postArray = []; // 정렬 후 배열 생성
let k = 0;
for (let i = 1; i < numMax + 1; i++) {
  for (let j = 0; j < count[i]; j++) {
    postArray[k++] = i;
  }
}
console.log('정렬 후 배열: ', postArray);
