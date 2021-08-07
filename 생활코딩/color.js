//객체 Body 생성
var Body = {
  //글자색 변경 메소드
  SetColor : function(color){
    document.querySelector('body').style.color = color;
  },
  //배경색 변경 메소드
  SetBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
//객체 Links 생성
var Links = {
  //링크 텍스트의 색깔 변경 메소드
  SetColor : function(color){
    var alist = document.querySelectorAll('a');
    var j = 0;
    while (j < alist.length)
    {
      alist[j].style.color = color;
      j++;
    }
    }
}
//객체 Synch 생성 (버튼 동기화의 용도)
var Synch = {
  //모든 버튼의 value 값을 일치시키는 메소드
  ButtonValue : function(value){
    var list = document.querySelectorAll('.night_day');
    var i = 0;
    while (i < list.length)
    {
      list[i].value = value;
      i++;
    }
  }
}
//야간과 주간 모드로 전환하는 함수
function nightDayHandler(self) {
if (self.value === 'night') {
  //야간 모드로 전환
  Body.SetColor('white');             //글자색 변경
  Body.SetBackgroundColor('black');   //배경색 변경
  Links.SetColor('powderblue');       //하이퍼링크 텍스트의 색깔 변경
  Synch.ButtonValue('day');           //버튼 동기화 메소드(value값을 일치시킴)
  }
else {
  //주간 모드로 전환
  Body.SetColor('black');             //글자색 변경
  Body.SetBackgroundColor('white');   //배경색 변경
  Links.SetColor('blue');             //하이퍼링크 텍스트의 색깔 변경
  Synch.ButtonValue('night');         //버튼 동기화 메소드(value값을 일치시킴)
  }
}
