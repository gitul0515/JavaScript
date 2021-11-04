// 주민번호 뒷자리 숫자를 *로 변환
const juminNum = '940517-2288020';

const result = juminNum.replace(juminNum.slice(-7), '*******');
console.log(result);

// 주민번호를 통해 성별 판정하기
const sex = juminNum[7] === '1' ? '남성' : '여성';
console.log('성별:', sex);

// 핸드폰 번호에서 '-' 문자 삭제
let phoneNum = '010-3772-4920';
phoneNum = phoneNum.replace(/-/g, ''); // 정규표현식 사용
console.log(phoneNum); // 01037724920

// 특수문자 제거
let names = 'ab&sdnc*&sd?cd^d';
names = names.replace(/&||*||?||^/g, '');
console.log(names);