// 일반 배열도 JSON 포맷의 문자열로 변환할 수 있다.
const array = [0, 1, 2, 3, 4, 5];

const json = JSON.stringify(array);
console.log(typeof json, json); // string [0,1,2,3,4,5]

const parsed = JSON.parse(json);
console.log(typeof parsed, parsed); // object [ 0, 1, 2, 3, 4, 5 ]
