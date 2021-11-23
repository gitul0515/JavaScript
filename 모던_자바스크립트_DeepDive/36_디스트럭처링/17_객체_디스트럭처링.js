// 객체 디스트럭처링 할당은
// 객체에서 필요한 프로퍼티 값만 추출하여 변수에 할당하고 싶을 때 유용하다.
const str = 'Hello';
const { length: strLength } = str;
console.log(strLength); // 5

const todo = { id: 1, content: 'HTML', completed: true };
const { id: todoId } = todo;
console.log(todoId); // 1

// 매개변수에 객체 디스트럭처링 할당을 사용할 수 있다.
function printTodo({ content, completed }) {
  console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'} 상태입니다.`);
}

printTodo({ id: 'kwon', content: 'HTML', completed: true });
