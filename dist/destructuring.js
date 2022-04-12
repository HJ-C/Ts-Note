// // 1. rest parameter 용도 1 (함수 파라미터에 쓸 경우) 
// function 함수(...a : number[]) {
//     console.log(a)
// }
// 함수(1,3,4,2)
// // 2. spread operator 용도  (값에 쓸 경우 괄호 벗기기)
// let arr  = [1,2,3]
// let arr2 = [4,5]
// let arr3 = [...arr, ...arr2] // 1,2,3,4,5
// // 3. destructuring (구조분해할당)
// let [변수1, 변수2]  = ['안녕', 100]
// let {student, age } = {student : true, age :20 } 
// let obj = {student: true, age :20}
// // 3.5 오브젝트 자료를 destructuring
// function 함수( {student,age} ){
//     console.log(student, age)
// }
// 함수({student : true, age : 20})
// 함수(obj) //위와 동일
