// 주민번호 뒷자리 숫자를 *로 변환
const juminNum = '940517-2288020';

const result = juminNum.replace(juminNum.slice(-7), '*******');
console.log(result);

// 주민번호를 통해 성별 판정하기
const sex = juminNum[7] === '1' ? '남성' : '여성';
console.log('성별:', sex);