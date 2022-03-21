function counting() {
  let i = 0;
  for (i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 100);
  }
}
counting(); // 5 5 5 5 5

function counting2() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 100);
  }
}
counting2(); // 0 1 2 3 4

function counting3() {
  let i;
  for (i = 0; i < 5; i++) {
    (function(id) {
      setTimeout(function () {
        console.log(id);
      }, i * 100);
    })(i);
  }
}
counting3(); // 0 1 2 3 4