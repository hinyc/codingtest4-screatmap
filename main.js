//2018 KAKAO BLIND RECRUITMENT
//[1차] 비밀지도
//programers lv1

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
//=>["######", "# # #", "### #", "#  ##", "######"]
//지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.

const binary1 = [];
const binary2 = [];
const isWall = [];

function getBinary(width, arr1, arr2) {
  const answer = [];
  // array 각각의 인수들을 2진수로 새로운 배열에 반환 한다.
  // 반환된 2진수를 각각 length를 갖는 배열로 변환시키고 length봐 짧으면 앞으로 0을 입력한다.로 변환한다.

  for (let i = 0; i < width; i += 1) {
    binary1.push(Number(arr1[i]).toString(2)); //Number().toString() 2~36진수로변환
    binary2.push(Number(arr2[i]).toString(2));
    binary1[i] = binary1[i].split(''); //split 원본배열을 변경
    binary2[i] = binary2[i].split('');
    for (let n = binary1[i].length; n < width; n++) {
      binary1[i].unshift('0');
    }
    for (let n = binary2[i].length; n < width; n++) {
      binary2[i].unshift('0');
    }
    // 2진수를 나열한 배열을 요소로 갖는 배열 완성.
  }

  // 배열의 인자가 배열이 되는 배열 두개가 만들어진다.
  // 두개의 배열의 인덱스가 같은 인자(배열)의 동일 인덱스 값끼리 합한다.
  for (let i = 0; i < width; i++) {
    for (let n = 0; n < width; n++) {
      let whatIs = 0;
      whatIs = Number(binary1[i][n]) + Number(binary2[i][n]);
      if (whatIs === 0) {
        isWall.push(' ');
      } else {
        isWall.push('#');
      }
      // isWall.push(Number(binary1[i][n]) + Number(binary2[i][n]));
    }
  }

  //배열을 5개씩 나눈다.
  //각 배열을 구분없이 하나의 문자열로 만든다.
  //문자열을 asnwer에 push한다.
  for (let i = 0; i < isWall.length; i += 5) {
    answer.push(isWall.slice(i, i + 5).join(''));
  }

  console.log(binary1);
  console.log(binary2);
  console.log(binary1[0]);
  console.log(isWall);
  console.log(answer);

  return answer;
}

getBinary(n, arr1, arr2);
