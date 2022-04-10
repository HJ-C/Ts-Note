// // function type 
// type 함수타입 = (x: number, y : number) => number
// let a:함수타입 = function(x,y){
//     return x+y
// }
// //methods 안에 타입지정
// type Member = {
//     name : string
//     age : number
//     plusOne : (x:number) => number
//     changeName : ()=> void
// }
// let 회원정보:Member ={
//     name : 'kim',
//     age : 30,
//     plusOne(x){
//         return x + 1
//     },
//     changeName : ()=>{
//         console.log('안녕')
//     }   
// }
// //
// type CutType =(x : string) => string
// let cutZero : CutType = function(x){
//     let result = x.replace(/^0+/,"")
//     return result
// }
// function removeDash(x:string):number{
//     let result = x.replace(/-/g,"")
//     return parseFloat(result)
// }
// type type1 = (a:string) => string
// type type2 = (a:string) => number
// function 만들함수(a:string ,b:type1, c:type2){
//     let res = b(a)
//     let res1 = c(res)
//     return console.log(res1) 
// }
