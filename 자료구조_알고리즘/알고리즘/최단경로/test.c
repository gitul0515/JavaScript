// Floyd 최단 경로 알고리즘 의사 코드
floyd(G):
  for k <- 0 to n - 1
    for i <- 0 to n - 1
      for j <- 0 to n - 1
        A[i][j] = min(A[i][j], A[i][k] + A[k][j])
