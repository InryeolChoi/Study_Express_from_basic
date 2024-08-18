# pracExpress
* Express.js를 이용한 CRUD 구현
* 게시판 기능을 구현하는 것이 목표

## 상세 
* 서버 사이드 렌더링(SSR) 기반
* 템플릿 엔진 : pug
* 데이터베이스 : sqlite3
* 도커 위에서 구동하기

## 데이터베이스 깔기
1. 데이터베이스 파일 생성: database.db 파일을 생성.
```{bash}
sqlite3 data/database.db
```

2. 테이블 생성: 데이터베이스 파일 안에 테이블을 생성.
```{bash}
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. 데이터베이스 종료: 데이터베이스 파일을 닫는다.
```{bash}
.exit
```

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