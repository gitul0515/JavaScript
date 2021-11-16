class Person {
  constructor(name) {
    this.name = name;
  }

  // 정적 메서드
  static sayHi() {
    console.log('Hi~');
  }

  // 프로토타입 메서드
  sayName() {
    console.log(this.name);
  }
}

// 정적 메서드는 클래스로 호출한다.
Person.sayHi(); // Hi~

// 정적 메서드는 인스턴스로 호출할 수 없다.
const me = new Person('kwon');
me.sayHi(); // TypeError: me.sayHi is not a function
