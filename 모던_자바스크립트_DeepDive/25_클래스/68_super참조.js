// super를 참조하면 수퍼클래스의 메서드를 참조할 수 있다.
// 수퍼 클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

// 서브 클래스
class Derived extends Base {
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived = new Derived('Kwon');
console.log(derived.sayHi()); // 'Hi! Kwon. how are you doing?'
