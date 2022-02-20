{
  // enum
  // 서로 연관있는 상수들을 묶을 때 사용
  enum Days {
    Monday = 1, 
    Thuesday, // 2
    Wednesday, // 3
    Thursday,  // 4
    Friday,  // 5
    Saturday, 
    Sunday
  };
  console.log(Days.Monday);
  const day = Days.Friday;
  console.log(day);

  // 그러나, enum의 사용을 권장하지 않음 (타입이 정확하게 보장되지 않음)
  // union 타입으로 대체할 수 있음
  type DaysOfWeek = 'Monday' | 'Thuesday' | 'Wednesday';
  const daysOfWeek: DaysOfWeek = 'Monday';

}