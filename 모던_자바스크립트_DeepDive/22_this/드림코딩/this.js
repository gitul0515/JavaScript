console.log(this);
function func() {
  console.log(this); // window
}
func(); // window.func()와 동일!

class Counter {
  count = 0;
  increase = function() {
    console.log(this);
  }
}

const counter = new Counter();
counter.increase(); // counter

const caller = counter.increase;
caller(); // undefined (window가 아니다)
/* 
  let과 const로 선언한 변수는
  window에 등록되어져 있지 않으므로 
  caller를 호출하는 변수는 window가 아니며, 그 어떤 오브젝트도 아니다. 
*/

const caller2 = counter.increase.bind(counter);
caller2(); // counter

