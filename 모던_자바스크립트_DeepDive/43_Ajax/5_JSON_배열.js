// JSON.stringify는 배열도 JSON 포맷의 문자열로 변환한다.
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JavaScript', completed: false },
];

const jsonTodos = JSON.stringify(todos, null, 2);
console.log(typeof jsonTodos, jsonTodos);

// 배열이 JSON 포맷의 문자열로 변환되어 있다면,
// JSON.parse는 문자열을 배열 객체로 변환한다.
const parsedTodos = JSON.parse(jsonTodos);
console.log(typeof parsedTodos, parsedTodos);

// 일반 배열도 JSON 포맷의 문자열로 직렬화 & 역직렬화한다.
const array = [0, 1, 2, 3, 4, 5];

const jsonArray = JSON.stringify(array);
console.log(typeof jsonArray, jsonArray); // string [0,1,2,3,4,5]

const parsedArray = JSON.parse(jsonArray);
console.log(typeof parsedArray, parsedArray); // object [ 0, 1, 2, 3, 4, 5 ]
