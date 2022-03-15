// var는 함수 레벨 스코프
var arr1 = [];
for(var i = 0; i < 5; i++) { // i는 전역 변수
  arr1[i] = function() {
    return i;
  }
}
for (const index in arr1) {
  console.log(arr1[index]()); // 5 5 5 5 5
}

// let은 블록 레벨 스코프
var arr2 = [];
for (let i = 0; i < 5; i++) { // i는 지역 변수
  arr2[i] = function() {
    return i;
  }
}
for (const index in arr2) {
  console.log(arr2[index]()); // 0 1 2 3 4
}

// 클로저의 활용
var arr3 = [];
for(var i = 0; i < 5; i++) {
  arr3[i] = function(id) {
    return function() {
      return id;
    }
  }(i);
}
for (var index in arr3) {
  console.log(arr3[index]()); // 0 1 2 3 4
}