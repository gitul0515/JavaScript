연습문제 6번
1-1. 순환식 작성
L[i, j]: 행렬 m의 원소 (1, 1)에서 (i, j)로 이동하는 
         모든 경로의 점수 중 가장 높은 점수

L[i, j]:
  m[i][j] -------------- if i = 1 && j = 1
  // 첫 번째 원소이므로 자기 점수인 m[i][j]가 최대합이다.
  
  L[i-1][j] + m[i][j] -------------- if j = 1
  // m[i][j]로 진입하는 경로는 m[i-1][j]를 거치는 것만이 유일하다. 
  // 즉 L[i][j]가 최대가 되려면 L[i-1][j]가 최대여야 한다.
  // 이를 구하고 자기 점수인 m[i][j]를 더한다.
  
  L[i][j-1] + m[i][j] -------------- if i = 1
  // m[i][j]로 진입하는 경로는 m[i][j-1]를 거치는 것만이 유일하다. 
  // 즉 L[i][j]가 최대가 되려면 L[i][j-1]가 최대여야 한다.
  // 이를 구하고 자기 점수인 m[i][j]를 더한다.
  
  max(L[i-1][j], L[i][j-1], L[i-1][j-1]) + m[i][j] ----- Otherwise
  // m[i][j]로 진입하는 경로는 세 경로(아래쪽, 오른쪽, 오른쪽 대각선)이다. 
  // 즉 L[i][j]가 최대가 되려면 L[i-1][j], L[i][j-1], L[i-1][j-1] 중에서
  // 최대 경로를 거쳐야 한다. 그리고 자기 점수인 m[i][j]를 더한다.

1-2. 행렬 경로 문제 알고리즘 수정
matrixPath(n) // (n, n)에 이르는 최고 점수
{
  for i <- 0 to n
    c[i, o] <- 0;
  for j <- 1 to n
    c[0, j] <- 0;
  for i <- 1 to n
    for j <- 1 to n
      c[i, j] <- m[i, j] + max(c[i-1, j], c[i, j-1], c[i-1, j-1]); // 수정한 부분
  return c[n, n];
}

연습문제 11번
순환식 (수기로 작성)


// 1. 문자열의 길이가 0인 경우다. 가장 긴 회문의 길이는 0이다.

// 2. 문자열의 길이가 1인 경우다. 가장 긴 회문의 길이는 1이다.

// 3. 문자열의 길이가 2 이상이고, 첫 문자와 마지막 문자가 같은 경우다.
//    첫 문자와 마지막 문자는 가장 긴 회문에 포함된다. 그러므로 2를 더한다.
//    이 문자들을 제외한 안쪽의 문자열을 재귀적으로 탐색한다.

// 4. 문자열의 길이가 2 이상이고, 첫 문자와 마지막 문자가 다른 경우다.
//    첫 문자와 마지막 문자는 회문에 동시에 포함되지 않는다. 이를 분리한다.
//    i에서 j - 1까지의 문자열(마지막 문자 제외)과
//    i + 1에서 j까지의 문자열(첫 문자 제외)을 재귀적으로 탐색한다.
//    두 문자열의 가장 긴 회문의 길이 중 큰 쪽을 선택한다.

결과 확인