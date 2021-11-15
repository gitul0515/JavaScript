// Rest 파라미터와 형태가 동일하므로 주의가 필요하다.
// 형태는 동일하나, 개념은 서로 반대이다.

// Rest 파라미터는 인수들의 목록을 배열로 전달받는다.
function foo(...rest) {
  console.log(rest); // [1, 2, 3]
}

// 스프레드 문법은 이터러블을 펼쳐서
// 개별적인 값들의 목록으로 만든다.
foo(...[1, 2, 3]); // 1, 2, 3을 전달한다
