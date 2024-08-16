# pracExpress
* Express.js를 이용한 CRUD 구현
* 게시판 기능을 구현하는 것이 목표

## 상세 
* 서버 사이드 렌더링(SSR) 기반
* 템플릿 엔진 : pug
* 데이터베이스 : mariadb
* 도커 위에서 구동하기

## 파일 구조

```{text}
pracExpress/
│
├── views/
│   ├── layout.pug
│   ├── index.pug
│   ├── new.pug
│   └── edit.pug
│
├── public/
│   └── css/
│       └── style.css
│
├── routes/
│   └── index.js
│
├── models/
│   └── posts.js
│
├── data/
│   └── posts.json
│
└── app.js
```