// map 객체는 keys, values, entries 메서드를 사용할 수 있다.
// 일반 객체와는 사용문법이 다르므로 주의!
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

// Map.prototype.keys 메서드
for (const key of map.keys()) { // 일반 객체: Object.keys(obj)
  console.log(key); // { name: 'Lee' } { name: 'Kim' }
}

// Map.prototype.values 메서드
for (const value of map.values()) { // 일반 객체: Object.values(obj)
  console.log(value); // developer designer
}

// Map.prototype.entries 메서드
for (const entry of map.entries()) { // 일반 객체: Object.entries(obj)
  console.log(entry); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
}
