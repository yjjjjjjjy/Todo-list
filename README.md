# Todo-List
+ vue.js를 공부하면서 책을 바탕으로 하여 만든 할일 관리 페이지입니다. vue-router를 이용해 로그인/회원가입/할일 관리 페이지로 이동하였고 vuex를 통해 상태관리를 하였습니다. 데이터는 localsotrage를 통해 추가/삭제 하였습니다.   


## 사용 기술
+ 개발환경: Visual Studio Code
+ Vue
  + components를 기능 별로 분리
  + vue-router를 이용한 페이지간 이동
+ Vuex
  + sotre를 이용하여 중앙 데이터 관리


## 페이지 구성
+ Login 
  + 메인페이지
  + 할일 페이지/회원가입 페이지로 이동
+ SignUp 
  + 회원가입 페이지
+ GoLogin
  + 회원가입 완료 페이지, 로그인 화면으로 이동
+ TodoHeader 
  + 간단한 환영 메시지
  + 날짜 표시
+ TodoInput 
  + 할일 추가
  + 할입 입력하지 않을시 modal창 경고
+ TodoList 
  + 추가된 할일 표시 
  + 특정 할일 삭제
+ TodoFooter 
  + 로그아웃 버튼을 통해 메인 페이지로 이동


## URL
+ http://yjy.dothome.co.kr./
