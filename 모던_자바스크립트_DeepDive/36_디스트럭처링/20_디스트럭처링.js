// 배열 디스트럭처링과 객체 디스트럭처링 할당을 혼용할 수 있다. 
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];
// todos 배열의 두 번째 객체로부터 id 프로퍼티만 추출한다.
const [, {content}] = todos;
console.log(content); // 'CSS'

// 중첩 객체의 경우 다음과 같이 사용한다.
const user = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul'
  }
};
// address 프로퍼티로 객체를 추출하고, 이 객체의 city 프로퍼티로 값을 추출한다.
const { address: {city} } = user;
console.log(city); // 'Seoul'
