//Body 객체 생성
var Body = {
  //글자색 변경 메소드
  color : function(color){
    document.querySelector('body').style.color = color;
  },
  //배경색 변경 메소드
  backgroundColor: function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
//Links 객체 생성
var Links = {
  //링크 텍스트 색깔 변경 메소드
  setcolor: function(color){
    var alist = document.querySelectorAll('a');
    var j = 0;
    while (j < alist.length)
    {
      alist[j].style.color = color;
      j++;
    }
  }
}
//Synch 객체 생성
var Synch = {
  //버튼 동기화 메소드(value값을 일치시킨다)
  ButtonValue: function(value){
    var list = document.querySelectorAll('.night_day');
    var i = 0;
    while (i < list.length)
    {
      list[i].value = value;
      i++;
    }
  }
}
//야간 및 주간 모드로 변경 함수
function NightDayHandler(self){
  //야간 모드로 변경
  if (self.value === 'night') {
    Body.color('white');              //글자색 변경
    Body.backgroundColor('black');    //배경색 변경
    //링크 텍스트의 색깔 변경
    Links.setcolor('powderblue');
    //버튼 동기화(value값을 일치시킨다)
    Synch.ButtonValue('day');
  }
  else { //주간 모드로 변환
    Body.color('black');             //글자색 변경
    Body.backgroundColor('white');    //배경색 변경
    //링크 텍스트의 색깔 변경
    Links.setcolor('blue');
    //버튼 동기화(value값을 일치시킨다)
    Synch.ButtonValue('night');
  }
}
