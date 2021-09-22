const obj = {
  name: 'Kwon',
  age: 28,
  address: 'Ansan',
  say_hello() {
    return `Hello, my name is ${this.name}.`;
  }
};

// Object.entries 메서드
// 객체의 [key, value] 쌍의 배열을 반환한다.
console.log(Object.entries(obj));

// Object.keys 메서드
// 객체의 key를 배열로 반환한다.
console.log(Object.keys(obj));

// Object.values 메서드
// 객체의 value를 배열로 반환한다.
console.log(Object.values(obj));

// for...in문
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(key); // 객체의 고유한 key를 출력
  }
}
console.log();

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(obj[key]); // 객체의 고유한 value를 출력
  }
}
