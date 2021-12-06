// 논리합(||)과 논리곱(&&) 연산자 표현식은
// 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.

// 논리합 연산자
console.log('cat' || 'dog'); // 'cat'
console.log(false || 'dog'); // 'dog'
console.log('cat' || false); // 'cat'

// 논리곱 연산자
console.log('cat' && 'dog'); // 'dog'
console.log(false && 'dog'); // false
console.log('cat' && false); // false

// 논리합(||)과 논리곱(&&) 연산자는
// 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다.
// 이를 '단축 평가'라 한다.
