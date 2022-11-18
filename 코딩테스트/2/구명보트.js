/* 
  구명 보트 (프로그래머스)
  나의 풀이
*/
function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => b - a);
    const remains = new Array(people.length).fill(true);
    
    for (let i = 0; i < people.length && answer <= people.length; i++) {
        if (!remains[i]) {
            continue;
        }
        const person = people[i];
        for (let j = i + 1; j < people.length; j++) {
            if (!remains[j]) {
                continue;
            }
            const withPerson = people[j];
            if (person + withPerson <= limit) {
                remains[j] = false;  
                break;
            }
        }
        remains[i] = false;
        answer += 1;
    }
    return answer;
}