// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2 를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution 을 완성해주세요.

// 제한 조건
// - 행렬 arr1, arr2 의 행과 열의 길이는 500을 넘지 않습니다.

// 입출력 예
// arr1             arr2             return
// [[1, 2], [2, 3]] [[3, 4], [5, 6]] [[4, 6], [7, 9]]
// [[1], [2]]       [[3], [4]]       [[4], [6]]



function solution (arr1, arr2) {
    let answer = [[], []];
    const row1 = arr1[0];
    const col1 = arr1[1];
    const row2 = arr2[0];
    const col2 = arr2[1];
    for (let i = 0; i < row1.length; i++) {
      answer[0] = answer[0].concat(row1[i] + row2[i]);
      answer[1] = answer[1].concat(col1[i] + col2[i]);
    }
    return answer;
  }
  
  solution([[5, 3], [3, 4]], [[5, 3], [5, 6]])

  // 행렬이므로 answer 의 length 가 2 인 것으로 판단했다. 미리 answer 에 두개의 빈 배열을 만들어 둔 뒤, 
  // 반복문을 돌며 answer 의 각 배열에 행렬 덧셈의 결과값을 추가시켜 주었다.