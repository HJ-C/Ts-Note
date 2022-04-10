"use strict";
// 1. Narrowing
// function 함수(x: number | string){
//     if(typeof x === 'number'){
//         return x + 1
//     }else{
//         return x + '1' 
//     }
// }
// console.log(함수('123'))
// 2. Assertion
// function 함수(x : number | string){
//     let array : number[] = []
//     array[0] = x as number
// }
// 함수(123)
//as = assertion(타입덮어쓰기)
// assertion 문법 쓰는경우 
// 1. 타입을 확정하고 싶을 때(유니온) , 2. Narrowing할때, 3. 무슨 타입이 들어올지 100% 확신할 때 4.웬만하면 사용 x
// let 이름 : string = "kim"
// 이름 as number // 에러 
// 3. 활용1
// function 함수(a:(number|string)[]){
//     let 클리닝 : number[] = []
//     a.forEach( (b)=> {
//       if(typeof b === 'string'){
//           클리닝.push(parseFloat(b))
//       }else{
//           클리닝.push(b)
//       }
//     }) 
//     return 클리닝
// }
// console.log(함수([1,2,3,'4']))
// 4. 활용 2
// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }
// function 함수(x: { subject : string | string[]}){
//     if(typeof x.subject === 'string'){
//         return x.subject
//     }else if (Array.isArray(x.subject)){
//         return x.subject[x.subject.length-1]
//     }else{
//         return '존재하지 않음'
//     }
// }
// console.log( 함수( { subject : ['english', 'art'] }  ) )
