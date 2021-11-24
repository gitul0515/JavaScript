// JSON.stringify 메서드는
// 객체를 JSON 포맷의 문자열로 변환한다. (직렬화. serializing)
const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
};

const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

// replacer 함수. 값의 타입이 Number이면 필터링하여 반환되지 않는다.
function filter(key, value) {
  return typeof value === 'number' ? undefined : value;
}

// JSON.stringify에 두 번째 인수로 replacer 함수를 전달한다.
const setFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof setFilteredObject, setFilteredObject);
