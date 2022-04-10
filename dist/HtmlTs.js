// // 기본적으로 tsconifg에 true로 설정해두면 타입에 unll이 추가됨
// //1 .narrowing 1번째
// let 제목 = document.querySelector('#title')
// if(제목 != null){
//     제목.innerHTML = '반가워'
// }
// // 2. narrowing 2번째 (선호)
// let 제목 = document.querySelector('#title')
// if ( 제목 instanceof HTMLElement){
//     제목.innerHTML = '반가워'
// }
// // 3. assertion (비추)
// let 제목 = document.querySelector('#title') as HTMLElement
// 제목.innerHTML = '반가워'
// // 4. optional chaining 연산자
// // 왼쪽에 있는 object자료안에 .innerHTML이 존재하면 그거 써주고 없으면 undefinec출력
// // 삼항연산자 같은 느낌
// let 제목 = document.querySelector('#title')
// if ( 제목?.innerHTML != undefined){
//     제목.innerHTML = '반가워'
// }
// // 5. a 태그의 속성 변경
// // HTML Element태그에 어울리는 타입을 찾아서 instanceof 키워드로 확인
// let Link = document.querySelector("link")
// if( Link instanceof HTMLAnchorElement){
//     Link.href = 'www.google.com'
// }
// // 6. 이벤트리스너 (optional chaning문법)
// // object에서 자료를 뽑을때 object.속성을 사용했지만
// // object?.속성을 하면 ?뒤에있는 속성을 뽑아주고 존재하지 않으면 undefined를 남겨달라는 뜻
// // narrowing인정이 됨
// let 버튼 = document.getElementById('button')
// 버튼?.addEventListener('click',function(){
//     console.log('안녕')
// })
// // 7. 버튼을 누르면 이미지를 변경
// // <img id="image" src="test.jpg">
// let 이미지변경 = document.getElementById('image')
// if( 이미지변경 instanceof  HTMLImageElement){
//     이미지변경.src = 'change.jpg'
// }
// //8. 여러 html 요소 변경 
// // 전부 google.com으로 변경
// // <a class="naver" href="naver.com">링크</a>
// // <a class="naver" href="naver.com">링크</a>
// // <a class="naver" href="naver.com">링크</a> 
// let 링크 = document.querySelectorAll('.naver');
// 링크.forEach((a)=>{
//   if (a instanceof HTMLAnchorElement){
//     a.href = 'https://kakao.com'
//   }
// })
