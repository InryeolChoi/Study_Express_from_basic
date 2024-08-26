# 게시판 만들기

## backend
* src 안에 코드가 있다. 코드를 크게 4부분으로 쪼개보면...
1. Models : 데이터베이스와 직접 연결하는 부분
2. Controllers : 전달된 요청을 실제로 처리하는 로직
3. Routes : 요청 URL이 들어오면, Controller로 보내주는 통로
4. Middleware : Routes, Controllers에 들어오기 전 요청을 가로채 무언가를 하는 용도
