function solution(research, n, k) {
  let answer = '';
  const set = new Set();

  // 1. 후보 검색어 필터링하기
  research.map(elem => {
    for (let i = 0; i < elem.length; i++) {
      set.add(elem[i]);
    }
  });
  const candidates = [...set]


  // 2. 검색 기록 정리하기
  const searchResult = {};
  candidates.forEach(word => {
    searchResult[word] = [];
    const regExp =  new RegExp(`${word}`, 'g');
    research.forEach(day => {
      let daycount = day.match(regExp);
      daycount = daycount === null ? [] : daycount;
      searchResult[word].push(daycount.length);
    });
  });

  const issueCount = {};
  // 3. 이슈된 횟수 계산하기
  for (const key in searchResult) {
    issueCount[key] = 0;

    const array = searchResult[key];
    const subArrays = [];
    for (let i = 0; i <= array.length - n; i++) {
      subArrays.push(array.slice(i, n + i));
    }

    subArrays.forEach(arr => {
      if (arr.every(item => item >= k) && arr.reduce((a, b) => a + b) >= 2 * n * k) {
        issueCount[key]++;
      }
    });
  }

  let max = 0;
  // 4. 최고의 이슈검색어 계산하기
  for (const key in issueCount) {
    if (issueCount[key] > max) {
      max = issueCount[key];
    }
  }
  if (max === 0) return 'None';

  const result = [];
  for (const key in issueCount) {
    if (issueCount[key] === max) {
      result.push(key);
    }
  }

  if (result.length > 1) {
    result.sort((a, b) => a.localeCompare(b));
  }
  return result[0];
}

console.log(solution(["abaaaa","aaa","abaaaaaa","fzfffffffa"], 2, 2));
console.log(solution(["yxxy","xxyyy"], 2, 1));
console.log(solution(["yxxy","xxyyy","yz"], 2, 1));
console.log(solution(["xy","xy"], 1, 1));
