function solution(genres, plays) {
  const result = [];
  const data = [];
  for (let i = 0; i < genres.length; i++) {
    data.push([i, genres[i], plays[i]]) // [고유번호, 장르, 재생횟수]
  }

  const total = {};
  const set = new Set(genres);
  for (const genre of set) {
    total[genre] = 0;
  }
  for (let i = 0; i < data.length; i++) {
    total[data[i][1]] += data[i][2];
  }

  let max = 0;
  for (const key in total) {
    if (total[key] > max)
  }

  console.log(total);

  return result;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]); // [4, 1, 3, 0]

// 정답 코드
function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2)
      })
    })

    return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap(item => item[1].songs)
    .map(song => song.index)
}