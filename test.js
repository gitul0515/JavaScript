// 인접 행렬을 사용하여 무방향그래프를 생성하세요
class UndirectedGraph {
  constructor(size = 1) {
    this.size = size;

    // 인접 행렬 생성 및 초기화
    this.matrix = [];
    for (let i = 0; i < this.size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < this.size; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  // 정점 생성 메서드
  addVertex() {
    this.size++;
    this.matrix.push([]);
    for (let i = 0; i < this.size; i++) {
      this.matrix[i][this.size - 1] = 0;
      this.matrix[this.size - 1][i] = 0;
    }
  }

  // 간선 생성 메서드
  addEdge(vertex1, vertex2, weight = 1) {
    if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
      throw new TypeError('invalid vertex');
    } else if (vertex1 === vertex2) {
      throw new TypeError('same vertex');
    } else {
      this.matrix[vertex1][vertex2] = weight;
      this.matrix[vertex2][vertex1] = weight;
    }
  }

  // 간선 삭제 메서드
  removeEdge(vertex1, vertex2) {
    if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
      throw new TypeError('invalid vertex');
    } else {
      this.matrix[vertex1][vertex2] = 0;
      this.matrix[vertex2][vertex1] = 0;
    }
  }

  // 정점 삭제 메서드
  removeVertex(_vertex) {
    let vertex = _vertex;
    if (vertex < 0 || vertex > this.size - 1) {
      throw new TypeError('invalid vertex');
    } else {
      while (vertex < this.size - 1) {
        for (let i = 0; i < this.size; i++) {
          this.matrix[vertex][i] = this.matrix[vertex + 1][i];
        }

        for (let i = 0; i < this.size; i++) {
          this.matrix[i][vertex] = this.matrix[i][vertex + 1];
        }
        vertex++;
      }
      this.matrix.pop();
      this.size--;
    }
  }

  // 인접행렬 출력 함수
  showMatrix() {
    for (let i = 0; i < this.size; i++) {
      let result = '';
      for (let j = 0; j < this.size; j++) {
        result += `${this.matrix[i][j]} `;
      }
      console.log(result);
    }
  }
}

const graph = new UndirectedGraph(5);
graph.addVertex();
graph.addEdge(0, 1, 2);
graph.addEdge(0, 2, 3);
graph.addEdge(0, 4, 1);
graph.addEdge(1, 2, 1);
graph.addEdge(3, 4, 1);
graph.addEdge(2, 3, 1);
graph.addEdge(1, 3, 1);
graph.showMatrix();

graph.removeVertex(1);
graph.removeEdge(0, 1);
graph.showMatrix();
