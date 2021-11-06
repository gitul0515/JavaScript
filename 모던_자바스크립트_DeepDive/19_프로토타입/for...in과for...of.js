// for...in은 객체를 순환한다.
const object = {
  a: 1,
  b: 2,
  c: 3
};

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    console.log(key); // a b c 객체의 키 값이 순환된다.
  }
}

// for...of는 배열을 순환한다.
const array = [1, 2, 3];

for (const iterator of array) {
  console.log(iterator); // 1 2 3 배열의 값이 순환된다.
}

// for...in으로도 배열을 순환할 수 있다.
for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    console.log(key); // 0 1 2 배열의 인덱스가 순환된다.
  }
}
