// type aliases(별칭)

//1
// type Animal = string | number | undefined
// let 동물 : Animal = 123

//2
// type Animal = { name : string, age : number}
// let 동물: Animal = {name : "Kim", age : 20}

//3  변수변경,readonly
// const Girl = {
//     name : "Kim"
// }
// Girl.name = 'Choi'

// const 지만 재할당은 불가능이지만 안에 속성은 변경이 가능하다
// 속성도 변경을 막을려면 readonly 이용
// type Girlfriend = {
//     readonly name : string
// }
// const Girl : Girlfriend = {
//     name : 'Kim'
// }
// Girl.name ='Choi' // 수정불가

//4 type 합치기
type Name = string
type Age = number

type Person = Name | Age

// 4.5 & 연산자로 object 속성 타입 합치기
type PositionX= { x : number}
type PositionY= { y : number}

type NewType = PositionX & PositionY

let position : NewType = { x: 10, y : 20}