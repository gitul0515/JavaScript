// 클로저 응용1
function getMovieInfo(title) {
  return {
    getTitle: function() {
      return title;
    },
    setTitle: function(newTitle) {
      if (typeof newTitle === 'string') {
        title = newTitle;
      } else {
        throw new Error('title은 문자열이어야 합니다.');
      }
    }
  }
}

const movie1 = getMovieInfo('바람과 함께 사라지다');
const movie2 = getMovieInfo('구르믈 버서난 달처럼');
console.log(movie1.getTitle());
console.log(movie2.getTitle());

movie1.setTitle(1);
console.log(movie1.getTitle());
console.log(movie2.getTitle());
