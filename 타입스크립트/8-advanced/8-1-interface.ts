{
  // type vs interface
  type PositionType = {
    x: number;
    y: number;
  }
  interface PositionInterface {
    x: number;
    y: number;
  }

  // 공통점: 객체에 사용할 수 있다. 
  const obj1: PositionType = {
    x: 1,
    y: 1
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  }

  // 공통점: 클래스에 사용할 수 있다. 
  class Pos1 implements PositionType {
    x: 1;
    y: 2;
  }
  class Pos2 implements PositionInterface {
    x: 1;
    y: 2;
  }

  // 공통점: Extends(확장)할 수 있다. 
  type ZPositionType = PositionType & { z: number };
  interface ZPositionInterface extends PositionInterface {
    z: number;
  };
  const obj3: ZPositionType = {
    x: 1, y: 2, z: 3
  }
  const obj4: ZPositionInterface = {
    x: 1, y: 2, z: 3
  }

  // 차이점: interface만 '합성'할 수 있다. 
  interface PositionInterface {
    z: number;
  }

  // 차이점: 타입만 computed properties를 사용할 수 있다. 
  type Person = {
    name: string;
    age: number;
  }
  type Name = Person['name']; // string

  // 차이점: 타입만 Union 연산자를 사용할 수 있다. 
  type Direction1 = 'left' | 'right';
}