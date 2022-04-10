//Literal Type 만드는 법 
// string, number 만 타입이 될 수 있는게 아니다. 일반 글자같은 것도 타입이 될 수 있다
// literal type : 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
//1.
// let Kim: '김'
// let Pack : '박'
//2 .
// '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
// '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.
// 예를 들면 ['가위', '보', '가위'] 이런거 return 가능
// ['가위', '바보'] 이런거 return하면 에러나야함 
// function 함수(a : '가위'| '바위' | '보') : ('가위' | '바위'|'보')[] {
//     return ['가위','보']
// }
//3. 
// 어떻게 보면 const 변수의 업그레이드버전
//4. as const
// var 자료 = {
//     name : 'kim'
//   }
//   function 내함수(a : 'kim') {
//   }
// 내함수(자료.name) //에러
//해결하는 방법 3가지
// 1. object 만들 때 타입을 잘 정하기
// 2. assertion을 쓰기
// as const 애초에 object 자료에 붙일 수 있다
// var 자료 = {
//     name : "kim"
// } as const
// function 내함수( a: 'kim'){
// }
// 내함수(자료.name) //에러해결
