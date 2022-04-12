// // interface 특징
// // object 자료형의 타입을 보다 편리하게 지정가능
// // type alias 와 용도와 기능은 동일
// // 1. 기본 형태
// interface Square{
//     color : string,
//     width : number,
// }
// let a : Square = { color : 'red', width : 100}
// // 2. interface의 extends
// interface Student {
//     name : string,
// }
// // interface Teacher {
// //     name : string,
// //     age : number,
// // } 
// interface Teacher extends Student{
//     age : number
// }
// // 3. type alias 차이
// // extends 문법이 약간 다르다
// //  interface -v
// interface Animal {
//     name : string,
// }
// interface Cat extends Animal{
//     legs : number
// }
// // type -v
// type Animal = {
//     name : string
// }
// type Cat = Animal & {legs : number} //extends가 아닌 object두개를 합침
// // interface &-v
// interface Student {
//     name :string,
//   }
//   interface Teacher {
//     age :number
//   }
//   let 변수 :Student & Teacher = { name : 'kim', age : 90 }
// // 4. 타입이름 중복선언시
// // interface
// // interface의 경우 타입이름 중복선언을 허용해주며 중복시 extends한 것(덮어쓰기)이랑 동일하게 동작
// // type선언을 자주 쓰는 외부 라이브러리 이용시 type선언을 내가 덮어쓰기, override하기 편함
// //type
// // 중복선언을 허용하지 않음
// // 일반적인 상황에선 type 키워드를 자주 활용하지만 다른 사람이 내 코드를 이용하는 상황이라면
// // interface로 타입을 정해놓는 경우가 많음
// //5. extend 할 때 object안의 속성이 중복될 경우
// interface Animal {
//     name : string
// }
// interface Dog extends Animal{
//     name : number // name이 Animal 속성과 중복
// }
// // 에러 발생, 만약 속성과 타입이 값이 같고 재할당 된거면 에러 안뜸
// // 5. 활용1
// // interface를 활용하라
// // let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
// interface Product{
//     brand : string,
//     sn : number,
//     model : string[],
// }
// let 상품:Product = {brand: 'Samsung',sn:1360, model:['TV', 'phone'] }
// // 6. 활용2
// // array 안에 object 여러개 필요
// // let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
// // 타입을 지정하시오
// interface Basket {
//     product : string,
//     price : number
// }
// let cart : Basket[] = [{product : '청소기', price:7000}, {product:'삼다수',price:800}]
// // 6.5 활용3 
// // 위에서 만든 타입을 extends
// // { product : '청소기', price : 7000, card : false }
// interface Basket1 extends Basket{
//     card : boolean
// }
// // 7. 활용 4 
// // 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
// // 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
// // 이 object 자료를 어떻게 만들면 될까요? 
// // interface를 이용해서 object에 타입지정도 해보십시오. 
// interface Math{
//     plus: (a:number,b:number)=>number
//     minus : (a:number,b:number)=>number
// }
// let obj:Math = {
//     plus(a,b){
//         return a+b 
//     },
//     minus(a,b){
//         return a-b
//     }
// }
