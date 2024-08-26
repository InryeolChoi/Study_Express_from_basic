## 백엔드 구조

```bash
backend/src
├── config
│   ├── db.js          # 데이터베이스 연결 설정
│   └── auth.js        # 인증 관련 설정 (예: JWT 비밀키 등)
├── controllers
│   ├── userController.js  # 사용자 관련 로직
│   └── postController.js  # 게시글 관련 로직
├── models
│   ├── userModel.js   # 사용자 데이터 모델
│   └── postModel.js   # 게시글 데이터 모델
├── routes
│   ├── userRoutes.js  # 사용자 관련 라우트
│   └── postRoutes.js  # 게시글 관련 라우트
├── middleware
│   └── authMiddleware.js  # 인증 미들웨어
├── utils
│   └── helper.js      # 유틸리티 함수 (예: 비밀번호 해싱, JWT 생성 등)
└── app.js             # Express 서버 설정 및 실행
```