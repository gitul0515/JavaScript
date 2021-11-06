// 집합의 심화 연산
// 교집합: 두 집합의 공통 항목들로 구성된 집합
function intersectSets(setA, setB) {
  const intersection = new Set();
  for (const elem of setB) { // 집합은 iterable이다.
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
console.log(intersectSets(setA, setB)); // Set(2) { 2, 3 }

// 상위집합 확인: 집합 A가 집합 B의 모든 항목들을 포함할 때,
// A는 B의 상위집합이다.
function isSuperSet(setA, setB) {
  for (const elem of setB) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

console.log(isSuperSet(setA, setB)); // true

// 합집합: 두 집합의 항목들을 합친 집합
function unionSets(setE, setF) {
  const unionSection = setE;
  for (const elem of setF) {
    unionSection.add(elem);
  }
  return unionSection;
}

const setE = new Set([1, 2, 3, 4]);
const setF = new Set([3, 4, 5, 6]);
console.log(unionSets(setE, setF)); // Set(6) { 1, 2, 3, 4, 5, 6 }

// 차집합
// setG - setH
function differenceSets(setG, setH) {
  const differenceSection = setG;
  for (const elem of setH) {
    differenceSection.delete(elem);
  }
  return differenceSection;
}

const setG = new Set([1, 2, 3, 4]);
const setH = new Set([2, 3]);
console.log(differenceSets(setG, setH)); // Set(2) { 1, 4 }
