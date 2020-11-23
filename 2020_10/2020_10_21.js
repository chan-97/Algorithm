// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// 01033334444	*******4444
// 027778888  *****8888


function solution(phone_number) {
    let answer = '';
    const nums = phone_number.split('');
    const first = nums.slice(0, -4);
    const last = nums.slice(-4);
    for(let n = 0; n < first.length; n++) {
      first[n] = '*';
    }
    answer = first.join('') + last.join('');
    
    return answer;
}

solution('01076075606')

// 전화번호의 앞부분과 뒷부분을 나눠 앞부분을 일제히 바꿔야하는 문자로 바꿔준 후 뒷부분과 합쳐주었다.