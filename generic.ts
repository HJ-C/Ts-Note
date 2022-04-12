//Generic
// 함수에 불확실한 unknown, any union 타입을 입력하면
// 나오는 값도 unknown,any,union 타입이고 이 때문에 일어나느 문제들이 발생
// 예를 들면 함수가 10을 return하는데 타입이 unknwon이라 마음대로 조작 불가능할 때
// 1 .narrowing을 잘하거나 2. Generic 을 이용

// function 함수<T>(x:T){
//   return x - 1; // x에 들어올 타입이 여러개일 수 있어서 에러 표함
// }

// let a = 함수<number>(100)
// console.log(a)


//Generic 타입 제한(constraints)
// extends문법을 쓰면 넣을 수 있는 타입을 제한할 수 있다
// Generic에서의 extends는 비슷한 속성을 가지고 있는지 if문으로 체크 하는 문법
// extends 자체로 narrowing역할을 해줌

// function 함수<T extends number>(x:T){
//   return x-1
// }
// let a = 함수<number>(100)

// 커스텀 타입도 extends가 가능한 예제
// interface lengthCheck{
//   length : number
// }
// function 함수<T extends lengthCheck>(x:T){
//   return x.length
// }
// let a = 함수<string>('hello')
// let b = 함수<number>(123) // error


// 활용 1

// function 함수<T extends string | string[]>(x : T){
//   console.log(x.length)
// }

// 함수<string>('hello')
// 함수<string[]>(['kim', 'park'])

//활용 2

// interface Animal {
//   name : string;
//   age : number;
// }

// let data = '{"name" : "dog", "age" : 1}'

// function 함수<T>(x:string): T{
//   return JSON.parse(x)
// }
// let res = 함수<Animal>(data)
// console.log(res)


//활용 3
// class Person <T>{
//   name;
//   constructor(a:T){
//     this.name = a
//   }
// }
// let a  = new Person<string>('어쩌구')
// a.name