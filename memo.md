타입스크립트
1. 자바스크립트를 사용할 때 안정성 있는 프로그래밍을 위한 방법
2. 동적 타입 언어인 자바스크립트의 변수 타입은 런타임시에 결정되기 때문에 타입 오류 또한 런타임시 발견된다.


타입스크립트 설정
(1) npm init // 프로젝트 폴더 생성
(2) npm i typescript -g //타입스크립트 설치
(3) tsconfig.json 설정 //tsc --init 으로 설치가능

1. node로 실행
(1) tsc 파일명 //js파일로 변환 
(2) node 파일명.js //파일 실행

2. ts-node란
기존 자바스크립트를 웹이 아닌 콘솔에서 실행하기 위해서는 NodeJs 설치 후 node(자바스크립트).js를 통하여 실행했다

타입스크립트 문법으로 작성된 .ts 파일은 node를 통해 실행이 되지 않는데 
이유는 node는 타입스크립트를 해석하지 못하기 때문이다

.ts 즉 타입스크립트 파일은 콘솔환경에서 node와 같이 실행하기 위해서는 
(1) npm install -g ts-node
(1.5)npm i ts-node --save-dev
(2) ts-node 파일명.ts

