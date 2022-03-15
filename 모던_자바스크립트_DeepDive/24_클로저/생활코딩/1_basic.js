// 클로저: 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가리킨다. 
function outter() {
  const text = 'This is closure';
  return function() {
    console.log(text);
  }
}

const inner = outter();
inner(); // 'This is closure'
// 내부함수는 외부함수의 지역변수에 접근할 수 있는데,
// 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근할 수 있다. 