
function solution(value, projects) {
  const treeValue = {};
  const treeRelation = {};
  for (let i = 0; i < value.length; i++) {
    treeValue[i + 1] = value[i];
    treeRelation[i + 1] = {};
  }

  for (let i = 0; i < projects.length; i++) {
    treeRelation[projects[i][0]]
  }

  return treeRelation;
}

console.log(solution([10, 11, 8, 5, 9, 15, 17], [[1, 2], [1, 3], [1, 4], [3, 5], [3, 6], [4, 7]]));

