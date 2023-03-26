# Reactube
리액트를 활용한 유튜브 클론코딩<br/>
유튜브 오픈API 사용

## library
-  react-router-dom: ^6.8.2
-  @tanstack/react-query: ^4.26.1
-  tailwindcss: ^3.2.7
-  @tailwindcss/line-clamp: ^0.4.2
-  immer: ^9.0.19
-  use-immer: ^0.8.1
-  @testing-library/jest-dom: ^5.16.5
-  node-sass: ^8.0.0
-  axios: ^1.3.4
-  react-icons: ^1.0.0
-  timeago.js: ^4.0.2
-  recoil: ^0.7.7



## description
- jsconfig.json: 절대경로 src로 설정
- tawind & scss 기반 스타일 처리
- 글로벌 컴포넌트 등록
- Boiler 디렉토리에 데이터를 다루는 보일러 플레이트 코드 모듈화
- api 디렉토리에 api통신 모듈화
- action 디렉토리에 API통신 함수 모듈화
- react-query 로 API통신 관리   
- recoil 로 UI 단 데이터 글로벌 상태관리


## 리팩토링 된 것들
- componentContext : 글로벌 컴포넌트 관리Context (구 방식)
- youtubeContext : YoutubeAPI 통신메서드Context (구 방식)
- 글로벌 스테이트 변경로직 reducer & immer (구 방식)

## 리팩토링 사유
![context사용 및 그냥 import](https://user-images.githubusercontent.com/84368302/227770253-c5b1d106-f84a-4606-a914-fa62e453672a.png)
초기에 Context를 통해 컴포넌트와 API호출 함수를 관리하였다.
테스트 결과 js Import 와 둘 간의 UI랜더링, 및 함수 실행에 차이점이 없어 
좀더 직관적인 JS파일 모듈화를 통해 관리하기로 결정
