// // 1. 필드값 타입지정
// class Person{
//     name;
//     age;
//     constructor(a: string){
//         this.name = 'kim'
//         this.age = 20
//     }
// }
// let john = new Person('존')
// let kim = new Person('김')
// // constructor 함수는 return 타입을 지정하면 안된다
// // constructor에 의해서 항상 object자료가 생산되기 때문에 의미 없음
// // 2. 클래스 활용 예제 
// // 1. { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class 생성.
// // 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
// // 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입포함 
// class Car {
//     model : string
//     price : number
//     constructor(a: string, b:number){
//         this.model = a
//         this.price = b
//     }
//     tax(): number{
//         return (this.price / 10)
//     } 
// }
// let car1 = new Car('소나타', 3000)
// console.log(car1)
// //3. 클래스 활용 예제 2
// // 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
// // 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
// // 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// // 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 
// class Obj{
//     num;
//     str;
//     constructor(...i){
//         let 문자 : string[] = []
//         let 숫자 : number[] = []
//         i.forEach((a)=>{
//             if(typeof a === 'number'){
//                 숫자.push(a)
//             }else{
//                 문자.push(a)
//             }
//         })
//         this.num = 숫자
//         this.str = 문자
//     }
// }
// let obj1 = new Obj('kim',3)
// console.log(obj1)
