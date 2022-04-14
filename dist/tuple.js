// // 기본적인 구조분해할당
// let Dog : (string | boolean)[] = ['dog', true]
// //첫번짼는 string 두번째는 무조건 boolean, 위치까지 고려한 타입지정
// let Dog : [string,boolean] = ['dog',true]
// // tuple 옵셔널
// // tuple에서의 옵셔널은 맨뒤에만 기입 가능
// let Dog : [string, boolean?] = ['dog'] 
// let Dog : [string, boolean?, number] = ['dog',true] //number의 값은 true가 될 수없음
// // 함수에서 쓰는 tuple (rest parameter)
// let Dog : [string, boolean?] = ['dog'] 
// function Def(...x:[number,string]){
//     console.log(x)
// }
// Def(1,'2')
// // Array 합칠 때(spread operator)
// let arr = [1,2,3]
// let arr2 : [number, number,...number[]] = [4,5, ...arr] //4,5,1,2,3
// //tuple 활용1
// let arr : [string, boolean, number] = ['apple',true,4000]
// //tuple 활용2
// function Def(...rest: [string,number,...boolean[]]){
//     console.log(rest)
// }
// Def('동서녹차', 4000, true, false, true, true, false, true)
// // tuple 활용3
// function Def(...c : [string, boolean,...(number|string)[] ]){
//     console.log(c)
// }
// Def('a',true,'안녕')
// //tuple 활용4
function Def() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = [[], []];
    a.forEach(function (x) {
        if (typeof x === 'string') {
            return result[0].push(x); //result 0번째 index []에 저장
        }
        else {
            return result[1].push(x);
        }
    });
    return result;
}
console.log(Def('b', 5, 6, 'a'));
