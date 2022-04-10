// function 함수(x? : string) {
//     if(x){
//         console.log('안녕하세요' + x)
//     }else{
//         console.log('입력안하나요')
//     }
// }
// 함수('홍길동입니다')

// function 글자(x : number | string) : number{
//     return x.toString().length
// }
// console.log(글자(234))

function 결혼(money:number, house:boolean, charm: string) : string|void{
    let score:number = 0
    score += money

    if(house === true){
        score += 500
    }else {
        score += 0
    }
    if(charm === '상'){
        score += 100
    }else{
        score += 0
    }
    if( score >= 600) {
        return '결혼가능'
    }else{
        return '결혼불가능'
    }
}
console.log(결혼(0,true,'중'))