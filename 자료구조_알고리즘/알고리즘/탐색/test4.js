const arr = []
for (let i = 0; i < 13; i++) {
  arr[i] = Math.floor(Math.random()*10 + 1); // 1부터 10까지의 난수 생성
}
console.log(arr);

const arr2 = arr.slice(0, 5);
arr2.sort((a,b) => a - b); // 오름차순 정렬
console.log(arr2);

const arr3 = arr.slice(5, 10);
arr3.sort((a,b) => a - b); // 오름차순 정렬
console.log(arr3);

const arr4 = arr.slice(10);
arr4.sort((a,b) => a - b); // 오름차순 정렬
console.log(arr4);
