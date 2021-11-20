// Map 객체는 이터러블이다.
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

// Map 객체는 for...of 문으로 순회할 수 있다.
for (const elem of map) {
  console.log(elem); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
}

// Map 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...map]); // [ [ { name: 'Lee' }, 'developer' ], [ { name: 'Kim' }, 'designer' ] ]

// Map 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a, b] = map;
console.log(a, b); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
