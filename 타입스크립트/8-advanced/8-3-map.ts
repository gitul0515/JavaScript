{
  // mapped type 기초
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOptional:VideoOptional = {
    title: '아바타',
    author: '제임스 카메론'
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoReadOnly = ReadOnly<Video>;
  const videoReadOnly: VideoReadOnly = {
    title: '사랑은 비를 타고',
    author: '진 켈리'
  };
  // videoReadOnly.title = '고질라'; // error

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  type VideoNullable = Nullable<Video>;
  const videoNullable: VideoNullable = {
    title: '신세계2',
    author: null
  };

}