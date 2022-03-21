function solution(research, n, k) {
  let answer = '';

  // 1. 후보 검색어 추출
  const set = new Set();
  research.map(elem => {
    for (let i = 0; i < elem.length; i++) {
      set.add(elem[i]);
    }
  });
  const candidates = [...set];

  // 2. 검색 기록 정리
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

  // 3. 이슈된 각각의 횟수를 계산
  const issueCount = {};
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

  // 4. 최고의 이슈검색어 계산 및 출력
  let max = 0;
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

console.log(solution(["abaaaa","aaa","abaaaaaa","fzfffffffa"], 2, 2)); // a
console.log(solution(["yxxy","xxyyy"], 2, 1)); // x
console.log(solution(["yxxy","xxyyy","yz"], 2, 1)); // y
console.log(solution(["xy","xy"], 1, 1)); // None