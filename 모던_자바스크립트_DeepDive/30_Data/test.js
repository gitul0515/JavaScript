(function printNow() {
  const today = new Date();

  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  hour %= 12;
  hour = hour || 12;

  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  const result = `${year}년 ${month}월 ${date}일 (${day}요일) ${hour}:${minute}:${second} ${ampm}`;
  console.log(result);

  setTimeout(printNow, 1000);
}());
