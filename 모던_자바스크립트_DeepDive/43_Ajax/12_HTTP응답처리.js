// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// HTTP 요청 전송
xhr.send();

// load 이벤트는 HTTP 요청이 성공적으로 완료된 경우 발생한다.
xhr.onload = () => {
  if (xhr.status === 200) { // 정상적으로 응답된 상태
    console.log(JSON.parse(xhr.response));
  } else { // 에러가 발생한 상태
    console.error('Error', xhr.status, xhr.statusText);
  }
};
