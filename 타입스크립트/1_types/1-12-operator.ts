{
  // 연산자
  // 유니온 타입 (중요)
  function logMessage(value: string | number) {
    console.log(value);
  }
  logMessage('hello');
  logMessage(1);

  const taeho: string | number | boolean = 'taeho';
  console.log(taeho);

  function convertMessage(value: string | number) {
    if (typeof value === 'number') {
      value.toLocaleString();
    } else if (typeof value === 'string') {
      value.toString();
    } else {
      throw new TypeError('type of value must be string or number');
    }
  }
  convertMessage('hello');
  convertMessage(1);

  interface Person {
    name: string;
    age: number;
  }

  interface Developer {
    name: string;
    skill: string;
  }

  // 유니온 타입
  // 두 개 인터페이스의 공통 속성만을 사용할 수 있다.
  function askSomeone1(someone: Person | Developer) {
    someone.name = 'gihong';
    // someone.age = 29;
    // someone.skill = 'html';
  }
  askSomeone1({ name: 'gihong', age: 29 }); // Person
  askSomeone1({ name: 'gihong', skill: 'html' }); // Developer

  // 인터섹션 타입
  // 두 개 인터페이스의 모든 속성을 사용할 수 있다.
  function askSomeone2(someone: Person & Developer) {
    someone.name = 'gihong';
    someone.age = 29;
    someone.skill = 'html';
  }
  askSomeone2({ name: 'gihong', age: 29, skill: 'html' }); // Person & Developer
}