(function printNow() {
  const today = new Date();

  const dayNames = [
    '일',
    '월',
    '화',
    '수',
    '목',
    '금',
    '토',
  ];

  const day = dayNames[today.getDay()]; // 요일: 0 ~ 6

  const year = today.getFullYear(); // 연도: 2021
  const month = today.getMonth() + 1; // 월: 0 ~ 11
  const date = today.getDate(); // 일: 1 ~ 31
  let hour = today.getHours(); // 시: 0 ~ 23
  let minute = today.getMinutes(); // 분: 0 ~ 59
  let second = today.getSeconds(); // 초: 0 ~ 59
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // 12 시간제로 변경
  hour %= 12;
  hour = hour || 12; // hour가 0이면 12을 재할당

  // 10 미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  const result = `${year}년 ${month}월 ${date}일 (${day}요일) ${hour}:${minute}:${second} ${ampm}`;
  console.log(result);

  // 1초마다 printNow 함수를 재귀 호출한다
  setTimeout(printNow, 1000);
}());
