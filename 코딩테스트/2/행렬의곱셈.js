function solution(arr1, arr2) {
  const answer = [[]];
  const row = arr1.length;
  const column = arr2[0].length;
  const multiple = arr2.length;
  
  for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
          answer[i][j] = 0;
          for (let k = 0; k < multiple; k++) {
              answer[i][j] += arr1[i][k] * arr2[k][j];
          }
      }
  }
  return answer;
}