// 계수 정렬 알고리즘 (시간 복잡도: O(n + k))
// 초기 배열
const preArray = [];
for (let i = 0; i < 30; i++) { // 30개의 난수 생성
  preArray[i] = Math.floor(Math.random()*100 + 1); // 난수 범위: 1 ~ 100;
}
const numMax = 100; // 난수 범위의 최대값
console.log('초기 배열: ', preArray);

// count 배열
const count = [ null ]; // 인덱스 0은 사용하지 않는다.
for (let i = 1; i <= numMax; i++) {
  count[i] = 0;  // 인덱스 1부터 0으로 초기화
}
for (let i = 0; i < 30; i++) {
  count[preArray[i]]++;  // 예: preArray[3]의 값이 5일 때, count[5]의 값을 1 증가시킨다.
}
console.log('count 배열: ', count);

// 정렬 후 배열
const postArray = [];
let k = 0;
for (let i = 1; i <= numMax; i++) {
  for (let j = 0; j < count[i]; j++) {
    postArray[k++] = i; // 예: count[5]의 값이 2라면, postArray 배열에 5를 2번 삽입한다. 
  }
}
console.log('정렬 후 배열: ', postArray);
