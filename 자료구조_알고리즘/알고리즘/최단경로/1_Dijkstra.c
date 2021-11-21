#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define TURE 1
#define FALSE 0
#define MAX_VERTICES 100
#define INF 1000000 // 무한대 (연결이 없는 경우)

typedef struct GraphType {
  int n; // 정점의 개수
  int weight[MAX_VERTICES][MAX_VERTICES];
} GraphType;

// ========== Dijkstra algorithm 시작 ==========
int distance[MAX_VERTICES]; // 시작정점으로부터의 최단경로 거리
int visited[MAX_VERTICES]; // 방문한 정점 표시
int route[MAX_VERTICES]; // 경로를 순서대로 저장

// 방문하지 않은 정점 중, 
// distance 값이 가장 작은 정점을 반환한다
int choose(int distance[], int n, int visited[])
{
  int i, min, minpos;
  min = INT_MAX; // int 형식 변수의 최대값
  minpos = -1;
  for (i = 0; i < n; i++)
    if (distance[i] < min && !visited[i]) {
      min = distance[i];
      minpos = i;
    }
  return minpos;
}

// 첫 번째 문제의 답을 출력한다
void print_answer1(GraphType* g, int start)
{
  int i; 

  printf("\n");
  for (i = 0; i < g->n; i++)
    printf("정점 %d에서 정점 %d까지의 최단 경로: %d \n", start, i, distance[i]);
  
  printf("경로: ");
  for (i = 0; i < g->n; i++)
    printf("%d ", route[i]);
  printf("\n\n");
}

// Dijkstra algorithm
// 정점 start로부터 모든 다른 정점까지의 최단 경로를 찾는다
void Dijkstra(GraphType* g, int start)
{
  int i, u, w;
  int v = 0;

  // 초기화
  for (i = 0; i < g->n; i++)
  {
    distance[i] = g->weight[start][i];
    visited[i] = FALSE;
  }
  visited[start] = 1; // 시작 정점 방문 표시
  distance[start] = 0;
  route[v++] = start; // 경로를 저장한다

  for (i = 0; i < g->n-1; i++) {
    u = choose(distance, g->n, visited); // distance 값이 가장 작은 정점을 선택
    visited[u] = 1; //
    route[v++] = u;
    for (w = 0; w < g->n; w++) // distance를 새롭게 수정한다
      if (!visited[w])
        if (distance[u] + g->weight[u][w] < distance[w])
          distance[w] = distance[u] + g->weight[u][w];
  }
  print_answer1(g, start);
}
// ========== Dijkstra algorithm 끝 ==========
// ========== Floyd Warshall Algorithm 시작 ==========
int A[MAX_VERTICES][MAX_VERTICES]; // 최단경로 저장 배열

// 두 번째 문제의 답을 출력한다
void print_answer2(GraphType* g)
{
  int i, j;
  // 초기화
  int max = A[0][0];
  int max_i = 0, max_j = 0;
  
  printf("\n");
  for (i = 0; i < g->n; i++) {
    for (j = 0; j < g->n; j++) {
      if (A[i][j] == INF) // INF는 제외한다
        continue;
      if (A[i][j] > max) { // 경로가 가장 먼 노드를 찾는다
        max = A[i][j];
        max_i = i; 
        max_j = j;
      }
    }
  }
  printf("모든 정점 간 최단 경로 중 가장 먼 노드(INF 제외)\n");
  printf("<%d, %d> : %d \n", max_i, max_j, max);
  printf("\n");
}

void floyd(GraphType* g)
{
  int i, j, k;
  for (i = 0; i < g->n; i++) // 초기화 단계
    for (j = 0; j < g->n; j++)
      A[i][j] = g->weight[i][j];

  for (k = 0; k < g->n; k++) {
    for (i = 0; i < g->n; i++)
      for (j = 0; j < g->n; j++)
        if (A[i][k] + A[k][j] < A[i][j])
          A[i][j] = A[i][k] + A[k][j];
  }
  print_answer2(g);
}

int main() 
{
  GraphType g = { 6,
    {
      { 0, 50, 45, 10, INF, INF },
      { INF, 0, 10, 15, INF, INF },
      { INF, INF, 0, INF, 30, INF },
      { 20, INF, INF, 0, 15, INF },
      { INF, 20, 35, INF, 0, 3 },
      { INF, INF, INF, INF, INF, 0}
    }
  };
  printf("첫 번째 문제 결과 \n");
  printf("============================================");
  Dijkstra(&g, 0); // Dijkstra algorithm

  printf("두 번째 문제 결과 \n");
  printf("============================================");
  floyd(&g); // Floyd Warshall Algorithm
  
  return 0;
}
