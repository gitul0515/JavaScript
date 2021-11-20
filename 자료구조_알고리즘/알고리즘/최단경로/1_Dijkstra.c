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

int distance[MAX_VERTICES]; // 시작정점으로부터의 최단경로 거리
int found[MAX_VERTICES]; // 방문한 정점 표시

// 방문하지 않은 정점 중, 
// distance 값이 가장 작은 정점을 반환한다
int choose(int distance[], int n, int found[])
{
  int i, min, minpos;
  min = INT_MAX; // int 형식 변수의 최대값
  minpos = -1;
  for (i = 0; i < n; i++)
    if (distance[i] < min && !found[i]) {
      min = distance[i];
      minpos = i;
    }
  return minpos;
}

void shortest_path(GraphType* g, int start)
{
  int i, u, w;
  int visited[g->n];
  int v = 0;

  // 초기화
  for (i = 0; i < g->n; i++)
  {
    distance[i] = g->weight[start][i];
    found[i] = FALSE;
  }
  found[start] = 1; // 시작 정점 방문 표시 // 
  distance[start] = 0;
  visited[v++] = start; // 방문한 정점을 저장한다

  for (i = 0; i < g->n-1; i++) {
    u = choose(distance, g->n, found); // distance 값이 가장 작은 정점을 선택
    found[u] = 1; //
    visited[v++] = u;
    for (w = 0; w < g->n; w++) // distance를 새롭게 수정한다
      if (!found[w])
        if (distance[u] + g->weight[u][w] < distance[w])
          distance[w] = distance[u] + g->weight[u][w];
  }
  printf("\n");

  for (i = 0; i < g->n; i++)
    printf("정점 %d에서 정점 %d까지의 최단 경로: %d \n", start, i, distance[i]);

  printf("경로: ");
  for (v = 0; v < g->n; v++)
    printf("%d ", visited[v]);
  printf("\n");
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
  shortest_path(&g, 0);
  printf("\n");

  printf("두 번째 문제 결과: \n");
  return 0;
}
