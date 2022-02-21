{
  // Type Inference
  // 변수나 함수를 선언할 때 타입을 항상 명시할 필요x
  let text = 'hello';
  text = '1';

  function add(a:number, b:number) {
    return a + b;
  }
  const result = add(1, 2);
  // 그러나 왠만하면 타입을 명시하는 것이 좋다
}