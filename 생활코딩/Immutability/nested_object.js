// 중첩된 객체 obj1.score
const obj1 = {name: 'lee', score: [1, 2, 3]};
const obj2 = Object.assign({}, obj1);
// obj2.score = [...obj2.score];
// obj2.score = obj2.score.slice();
obj2.score.push(4);
console.log(obj1, obj2, obj1 === obj2, obj1.score === obj2.score); // ... false true

// 깊은 복사
const obj3 = {name: 'lee', score: [1, 2, 3]};
const obj4 = JSON.parse(JSON.stringify(obj3));
console.log(obj3, obj4, obj3 === obj4, obj3.score === obj4.score); // ... false false