// class User {
//     public name;
//     constructor(){
//         this.name = "kim"
//     }
// }

// constructor()는 안써도 상관없지만 오브젝트 생성후 파라미터를 넣을때 유용하기 때문

//1. private 
// class{ } 안에서만 사용 가능
// private는 속성값을 변경할 수 없지만 프로토타입 함수를 추가하면 변경가능
// 자식들 사용 불가능

// class User {
//     name : string;
//     private familyName : string = 'kim'
//     constructor(a){
//         this.name  = a + this.familyName 
//     }
//     modify(){
//         this.familyName = 'Park'
//     }
// }
// let user1 = new User('현준')
// user1.modify()

//2 publlic의 this.값 생략하기
// class Person {
//     constructor( public name : string ){
//         // this.name 생략 가능
//     }
// }
// let a = new Person('kim')
// console.log(a)


//3 protected 
// extends된 class는 사용가능, 자식들 사용 불가능
// class를 여러개 만들때 클래스끼리 공유할때 사용

// class User {
//     protected x = 10
// }
// class NewUser extends User{
//     doThis(){
//         this.x = 20
//     }
// }

//4. static
// 부모 class에 직접 부여됨(+자식에게 안물려줌)
// 원본의 데이터를 수정하는 느낌

// class User {
//     x = 10
//     y = 20
// }

// let jone = new User()
// jone.x // 변경가능
// User.x // 불가능

// class User {
//     static x = 10;
//     y = 20;
//   }
  
//   let john = new User();
//   john.x //불가능
//   User.x //가능



// 활용1
// x,y,z의 속성을 말하시오.
// class User {
//     private static x = 10;
//     public static y = 20;
//     protected z = 30;
// }

// x : class{} 안에서만 사용이 가능하고, 값을 변경하고 싶다면 프로토타입함수에 추가
// y : 부모class에 직접 부여가능, 자식에겐 부여 안됨
// z : extends를 한 class끼리만 속성 부여 가능,여러 class를 공유하고 싶을때 사용, 자식에겐 부여 안됨

// 활용2 
// x 속성에 숫자를 더해주는 함수가 필요합니다.
// class User {
//     private static x = 10;
//     public static y = 20;
//   }
//   User.addOne(3) //이렇게 하면 x가 3 더해져야함
//   User.addOne(4) //이렇게 하면 x가 4 더해져야함
//   User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

// class User{
//     private static x = 10
//     public static y = 20

//     static addOne(a:number){
//         User.x += a
//     }
//     static printX(){
//         console.log(User.x)
//     }
// }
// User.addOne(3)


//4     
// 이렇게 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가 무작위로 배치되어야합니다.

// class Square{
//     constructor(public width, public height, public color){
//         let a = Math.random()
//         let Square = `<div style = "position:relative;
//         top:${a*400}px;
//         left${a*400}px
//         width:${this.width}px;
//         height:${this.height}px
//         background : ${this.color}"
//         >
//         </div>`
//         document.body.insertAdjacentElement9('beforeend',Square)
//     }
// }
// let 네모 = new Square(30,30,'red')
// 네모.draw()

