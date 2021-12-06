// Prim의 최소비용 신장트리 알고리즘
const distance = []; // 현재의 신장 트리 집합에서 방문할 수 있는 최단 거리
const visited = []; // 정점의 방문 여부
const path = []; // 신장 트리 경로. path[도착점] = 출발점

// distance 값이 가장 작은 정점을 반환한다
function getMinVertex(g) {
  let min = Infinity;
  let minPos = null;

  for (let i = 0; i < g.length; i++) {
    if (!visited[i] && distance[i] < min) {
      min = distance[i];
      minPos = i;
    }
  }
  return minPos;
}

function prim(g, start) {
  // 초기화
  for (let i = 0; i < g.length; i++) {
    distance[i] = g[start][i];
    visited[i] = false;
    path[i] = -1;
  }
  visited[start] = true;
  console.log(`시작 정점 ${start} 방문`);

  for (let i = 0; i < g.length - 1; i++) {
    // distance가 가장 작은 정점 u를 방문한다
    const u = getMinVertex(g);
    if (distance[u] === g[start][u]) path[u] = start;
    visited[u] = true;
    console.log(`정점 ${u} 방문, 간선은 (${path[u]}, ${u}) : ${distance[u]}`);

    // 정점 u와 인접한 정점 v의 distance 값을 갱신한다
    for (let v = 0; v < g.length; v++) {
      if (g[u][v] !== Infinity && !visited[v]) {
        if (g[u][v] < distance[v]) {
          distance[v] = g[u][v];
          path[v] = u; // path[도착점] = 출발점
        }
      }
    }
  }
}

(function main() {
  const graph = [
    [0, 29, Infinity, Infinity, Infinity, 10, Infinity],
    [29, 0, 16, Infinity, Infinity, Infinity, 15],
    [Infinity, 16, 0, 12, Infinity, Infinity, Infinity],
    [Infinity, Infinity, 12, 0, 22, Infinity, 18],
    [Infinity, Infinity, Infinity, 22, 0, 27, 25],
    [10, Infinity, Infinity, Infinity, 27, 0, Infinity],
    [Infinity, 15, Infinity, 18, 25, Infinity, 0]
  ];
  prim(graph, 0);
  /*
    시작 정점 0 방문
    정점 5 방문, 간선은 (0, 5) : 10
    정점 4 방문, 간선은 (5, 4) : 27
    정점 3 방문, 간선은 (4, 3) : 22
    정점 2 방문, 간선은 (3, 2) : 12
    정점 1 방문, 간선은 (2, 1) : 16
    정점 6 방문, 간선은 (1, 6) : 15
  */
}());
