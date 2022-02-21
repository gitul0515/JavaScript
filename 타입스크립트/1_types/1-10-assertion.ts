{
  // Type Assertion (추천하지 않음)
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length); // Type Assertion
  console.log((<string>result).length); // Type Assertion

  const wrong: any = 5;
  (wrong as Array<number>).push(1); // Error

  // 타입을 100% 확신하는 경우가 아니면, 왠만해선 사용하지 말 것
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // Error
  console.log(numbers);

  // button은 null이 아니라고 단언(assertion)
  const button = document.querySelector('class')!;
}