// 선택 알고리즘 수도코드
select(A, p, r, i)
{
  if (p = r) then return A[p]; // 원소가 하나뿐이라면 i는 1이다.
  q <- partition(A, p, r); // 퀵 정렬의 partition 함수
  k <- q-p+1; // k: 기준원소가 전체에서 k번째 작은 원소
  
  if (i < k) then return select(A, p, q-1, i); // 왼쪽 그룹으로 범위를 좁힌다
  else if (i = k) then return A[q]; // 기준원소가 바로 찾는 원소다
  else return select(A, q+1, r, i-k); // 오른쪽 그룹으로 범위를 좁힌다
}