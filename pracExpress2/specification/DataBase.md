# 데이터베이스 모델

## 1. 사용자 모델 (User)
* 테이블 이름: users
* 컬럼:
```
* id: INT, AUTO_INCREMENT, PRIMARY KEY
* name: VARCHAR(100)
* username: VARCHAR(50), UNIQUE
* password: VARCHAR(255) (해시된 비밀번호)
* email: VARCHAR(100), UNIQUE
```


## 2. 게시글 모델 (Post)
* 테이블 이름: posts
* 컬럼:
```
* id: INT, AUTO_INCREMENT, PRIMARY KEY
* title: VARCHAR(255)
* content: TEXT
* author: VARCHAR(50)
* created_at: DATETIME, DEFAULT CURRENT_TIMESTAMP
* updated_at: DATETIME, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
```


