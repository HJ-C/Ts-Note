// type Car = {
//     wheel : '4개'
//     color : string
// }
// type Bike = {
//     wheel : '2개'
//     color : string
// }

// function 함수(x:Car|Bike){
//     if(x.wheel === '4개'){
//         console.log('이차는' + x.color)
//     }else {
//         console.log('이바이크는' + x.color)
//     }
// }

//type 검사는 typeof 사용
// instanceof는 class에서 object를 있을때 사용
// object자료에 속성을 뽑아 올때 (in 사용), 베타적인 속성이 없으면 사용불가
// Car 나 Bike 둘다 wheel이라는 속성을 가지고 있다 = 베타적인 속성이없다

// type Fish = {swim :string}
// type Bird= { fly : string}

// function 함수(animal : Fish|Bird){
//     if("swim" in animal){
//         return animal.swim
//     }
// }



