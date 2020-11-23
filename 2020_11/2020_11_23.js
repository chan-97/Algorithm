// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 1 이상인 문자열입니다.
// s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
// 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )
// 입출력 예
// s	                      return
// "3people unFollowed me"	"3people Unfollowed Me"
// "for the last week"     "For The Last Week"


function solution(s) {
    let eachW = s.split(" ")
    let curArr = [];
    let result = [];
    const checkEng = /[a-zA-Z]/;
    eachW.forEach(w => {
      curArr = w.split("")
      if (checkEng.test(curArr[0])) {
        let lowerStr = curArr.map(e => e.toLowerCase()).join("")
        result.push(lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1))
      } 
      else result.push(curArr.join("").toLowerCase())
    })
    return result.join(" ")
  }
  
solution("3people unFollowed me")

// 주어진 문자열을 공백을 기준으로 분할한다.
// 문자열을 분할한 배열을 순회하며 각 문자열의 첫번째 문자가 영문인지 확인하고 맞다면 
// result 에 첫 글자를 대문자로, 나머지는 소문자로 한 JadenCase 를 push 하고
// 그렇지 않다면 문자 자체를 소문자로 하여 result 에 push 하였다.
// 이러한 결과를 공백을 기준으로 join 해주었다.