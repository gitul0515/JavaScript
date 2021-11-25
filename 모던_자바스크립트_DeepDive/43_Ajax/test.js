// JSON.parse 메서드는 JSON 포맷의 문자열을 객체로 변환한다.
// 이를 역직렬화(deserializing)라고 한다.
const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
};

const json = JSON.stringify(obj); // 직렬화
const parsed = JSON.parse(json); // 역직렬화
console.log(parsed);
