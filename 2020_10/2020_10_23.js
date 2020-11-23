// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// 입출력 예
// s	return
// try hello world	TrY HeLlO WoRlD

// 입출력 예 설명
// try hello world는 세 단어 try, hello, world로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 TrY, HeLlO, WoRlD입니다. 따라서 TrY HeLlO WoRlD 를 리턴합니다.

function solution(s) {
    let answer = '';
    let each = '';
    const division = s.split(' ');
    for(let w = 0; w < division.length; w++) {
          
      let word = division[w].split('');
      for(let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
          word[i] = word[i].toUpperCase();
        }
        if (i % 2 === 1) {
          word[i] = word[i].toLowerCase();
        }
      }
      each = word.join('');
      answer = answer + each + ' ';
    }
    return answer.trim();
}

solution('try hello world');

// 문자열을 공백을 기준으로 나눈 배열을 2중 반복문 안에서 짝수인 인덱스와 홀수인 인덱스를 판단하여 각각의 로직을 처리하였습니다.


























