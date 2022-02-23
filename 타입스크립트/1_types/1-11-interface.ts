{
  // 인터페이스
  interface User {
    name: string;
    age: number;
  }

  // 함수에 인터페이스 활용 (중요)
  function printUser(user: User): void {
    console.log(user);
  }

  const seho = {
    name: '세호',
    age: 29
  };

  printUser(seho);

  // 함수의 구조에 인터페이스 활용
  interface sumFunction {
    (a:number, b:number): number
  }

  const sum:sumFunction = function (a, b) {
    return a + b;
  };

  sum(1, 2);

  // 인덱싱
  interface StringArray {
    [index: number]: string;
  }

  const arr:StringArray = ['a', 'b', 'c'];
  arr[0] = 'd';

  // 딕셔너리 패턴 (중요)
  interface stringRegexpDictionary {
    [key: string]: RegExp;
  }

  const obj:stringRegexpDictionary = {
    htmlFile: /\.html$/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
  };

  obj.htmlFile = /.xml$/;

  // 인터페이스 확장
  interface Person {
    name: string,
    age: number
  }

  interface developer extends Person {
    language: string
  }

  const captain:developer = {
    name: 'capt',
    age: 20,
    language: 'ts'
  };

  captain.name = 'gihong';
}