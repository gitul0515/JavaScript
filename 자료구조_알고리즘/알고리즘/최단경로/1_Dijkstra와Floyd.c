// 작성자: 2014044120 권기홍
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

#define TURE 1
#define FALSE 0
#define MAX_VERTICES 100
#define INF 1000000 // 무한대 (연결이 없는 경우)

typedef struct GraphType {
    int n; // 정점의 개수
    int weight[MAX_VERTICES][MAX_VERTICES];
} GraphType;

// ======== 첫 번째 문제: Dijkstra algorithm 사용 ========
int distance[MAX_VERTICES]; // 시작정점으로부터의 최단경로 거리
int visited[MAX_VERTICES]; // 방문한 정점 표시
char* route[MAX_VERTICES]; // 경로를 저장하는 배열

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

    for (i = 0; i < g->n; i++)
        printf("정점 %d에서 정점 %d까지의 최단경로 길이: %d \n", start, i, distance[i]);

    printf("경로(경유한 노드들): ");
    for (i = 0; i < g->n; i++)
        printf("%d ", route[i]); // 경로(경유한 정점들)을 순서대로 출력한다.
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
        sprintf(route[i], "%d", start);
    }
    visited[start] = 1; // 시작 정점 방문 표시
    distance[start] = 0;
    printf("%s \n", route);

    for (i = 0; i < g->n - 1; i++) {
        u = choose(distance, g->n, visited); // distance 값이 가장 작은 정점을 선택
        visited[u] = 1; // 방문 표시
        for (w = 0; w < g->n; w++) { // distance를 갱신
            // 시작 정점에서 w로 갈 때, u를 거치는 경우와 거치지 않는 경우를 비교한다
            if (!visited[w])
                if (distance[u] + g->weight[u][w] < distance[w]) // 작은 쪽을 선택한다
                    distance[w] = distance[u] + g->weight[u][w];
        }
    }
    print_answer1(g, start);
}

// ======== 두 번째 문제: Floyd Warshall Algorithm 사용 ========
int A[MAX_VERTICES][MAX_VERTICES]; // 최단경로 저장 배열

// 두 번째 문제의 답을 출력한다
void print_answer2(GraphType* g)
{
    int i, j;

    // 모든 정점간 최단경로 출력
    printf("모든 정점간 최단경로 \n");
    for (i = 0; i < g->n; i++) {
        for (j = 0; j < g->n; j++) {
            if (A[i][j] == INF)
                printf("  * ");
            else printf("%3d ", A[i][j]);
        }
        printf("\n");
    }
    printf("\n");

    // 모든 정점간 최단경로 중 가장 먼 노드를 찾는다
    int max = A[0][0]; // 초기화
    int max_i = 0, max_j = 0;
    for (i = 0; i < g->n; i++) {
        for (j = 0; j < g->n; j++) {
            if (A[i][j] > max) {
                max = A[i][j];
                max_i = i;
                max_j = j;
            }
        }
    }
    printf("모든 정점 간 최단경로 중 가장 먼 노드(INF 제외)\n");
    printf("(%d, %d) (길이 %d)\n", max_i, max_j, max);
}

void floyd(GraphType* g)
{
    int i, j, k;
    for (i = 0; i < g->n; i++) // 초기화 단계
        for (j = 0; j < g->n; j++)
            A[i][j] = g->weight[i][j];

    // 정점 i에서 j로 갈 때, 
    // k를 거치는 경로와 거치지 않는 경로를 비교한다. (작은 쪽을 선택)
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
        { 50, 0, 10, 15, 20, INF },
        { 45, 10, 0, INF, 30, INF },
        { 10, 15, INF, 0, 15, INF },
        { INF, 20, 30, 15, 0, 3 },
        { INF, INF, INF, INF, 3, 0}
      }
    };
    printf("첫 번째 문제 결과 \n");
    printf("============================================\n");
    Dijkstra(&g, 0); // Dijkstra algorithm

    printf("두 번째 문제 결과 \n");
    printf("============================================\n");
    floyd(&g); // Floyd Warshall Algorithm

    return 0;
}
