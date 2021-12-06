// Prim의 최소비용 신장트리 알고리즘
const visited = [];
const distance = [];

function getMinVertex(g) {
  let min = Infinity;
  let minPos;

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
    distance[i] = Infinity;
    visited[i] = false;
  }
  distance[start] = 0;
  visited[start] = true;
  process.stdout.write(`시작 정점 ${start} 방문\n`);

  for (let i = 0; i < g.length; i++) {
    if (g[start][i] !== Infinity) {
      distance[i] = g[start][i];
    }
  }

  for (let i = 0; i < g.length; i++) {
    const u = getMinVertex(g);
    if (u === undefined) return;
    visited[u] = true;
    process.stdout.write(`정점 ${u} 방문, 가중치는 ${distance[u]}\n`);

    // distance 값을 갱신
    for (let v = 0; v < g.length; v++) {
      if (g[u][v] !== Infinity && !visited[v]) {
        if (g[u][v] < distance[v]) {
          distance[v] = g[u][v];
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
}());
