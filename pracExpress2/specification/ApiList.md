# API 리스트

## 사용자 인증 관련 API
1. 로그인
* Endpoint: POST /api/login
* Request: { "username": "user", "password": "pass" }
* Response: { "token": "jwt_token" } (성공 시)
2. 회원가입
* Endpoint: POST /api/register
* Request: { "name": "name", "username": "user", "password": "pass", "email": "email@example.com" }
* Response: { "message": "User registered successfully" }

## 게시글 관련 API
1. 게시글 목록 조회
* Endpoint: GET /api/posts
* Response: [ { "id": 1, "title": "Title", "content": "Content", "author": "Author", "created_at": "2024-08-21T12:00:00Z" }, ... ]

2. 게시글 작성
* Endpoint: POST /api/posts
* Request: { "title": "Title", "content": "Content", "author": "Author" }
* Response: { "message": "Post created successfully", "postId": 1 }

3. 게시글 수정
* Endpoint: PUT /api/posts/:id
* Request: { "title": "New Title", "content": "New Content" }
* Response: { "message": "Post updated successfully" }

4. 게시글 삭제
* Endpoint: DELETE /api/posts/:id
* Response: { "message": "Post deleted successfully" }

5. 게시글 조회
* Endpoint: GET /api/posts/:id
* Response: { "id": 1, "title": "Title", "content": "Content", "author": "Author", "created_at": "2024-08-21T12:00:00Z" }

## 사용자 관련 API (선택 사항)
1. 사용자 정보 조회
* Endpoint: GET /api/users/:id
* Response: { "id": 1, "name": "Name", "username": "user", "email": "email@example.com" }

2. 사용자 정보 수정
* Endpoint: PUT /api/users/:id
* Request: { "name": "New Name", "email": "new_email@example.com" }
* Response: { "message": "User info updated successfully" }

## 인증 관련 API
1. 토큰 확인 (검증)
* Endpoint: GET /api/verify
* Headers: Authorization: Bearer <token>
* Response: { "valid": true, "user": { "id": 1, "username": "user" } } (성공 시)
