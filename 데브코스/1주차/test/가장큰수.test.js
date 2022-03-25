const solution = require('../가장큰수.js');

describe('가장 큰 수', () => {
  it('case 1', () => {
    expect(solution([6, 10, 2])).toBe('6210');
  });

  it('case 2', () => {
    expect(solution([3, 30, 34, 5, 9])).toBe('9534330');
  });

  it('case 3', () => {
    expect(solution([0, 0, 0, 0, 0])).toBe('0');
  });
});
