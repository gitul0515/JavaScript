// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// HTTP 요청 전송
xhr.send();

// HTTP 요청의 현재 상태를 나타내는
// readyState 프로퍼티가 변경될 때마다 발생한다.
xhr.onreadystatechange = () => {
  // 만약 서버 응답이 완료되지 않았다면 아무런 처리를 하지 않는다.
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  if (xhr.status === 200) { // 정상적으로 응답된 상태
    console.log(JSON.parse(xhr.response));
  } else { // 에러가 발생한 상태
    console.error('Error', xhr.status, xhr.statusText);
  }
};
