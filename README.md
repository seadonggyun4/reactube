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



## description
- jsconfig.json: 절대경로 src로 설정
- tawind & scss 기반 스타일 처리
- 글로벌 컴포넌트 등록
- react-query 로 API통신된 데이터 상태관리
- reducer로 global 상태관리 (구 방식)


## context
- commonContext : 공용 상태 관리Context
- componentContext : 글로벌 Component 등록Context
- youtubeContext : YoutubeAPI 통신메서드Context