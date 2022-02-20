{
  // Array
  const fruits: string[] = ['apple', 'orange'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    console.log(fruits);
  }
  printArray(fruits);

  // Tuple
  // 사용을 권장하지 않음. 가독성이 부족하다.
  // interface, type alias, class로 대체
  let student: [string, number];
  student = ['name', 123];
  student[0]; // 'name'
  student[1]; // 123
}