{
  // 제네릭을 함수에서 사용할 때는 
  // 항상 괄호(()) 앞에다가 제네릭(<>)을 정의한다. 
  // 1. 함수 선언문
  function func1<T>(value: T): T {
    return value;
  }
  console.log(func1('a')); 

  // 2. 함수 표현식
  const func2 = function<T>(value: T): T {
    return value;
  };
  console.log(func2('a')); 

  // 3. 화살표 함수
  const func3 = <T>(value: T): T => {
    return value;
  };
  console.log(func3('a')); 
}