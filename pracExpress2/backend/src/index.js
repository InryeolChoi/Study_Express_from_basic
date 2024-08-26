import express from 'express';
import dotenv from 'dotenv';
import sequelize from './models/index.js'; // Sequelize 인스턴스를 가져옵니다
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';

// 환경변수 설정
dotenv.config();

const app = express();
app.use(express.json());

// API 라우트 설정
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// AdminJS 설정
AdminJS.registerAdapter(AdminJSSequelize);
const adminJs = new AdminJS({
    databases: [sequelize], // AdminJS에서 사용할 데이터베이스 모델들
    rootPath: '/admin',     // AdminJS 대시보드 접근 경로
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, adminRouter);

// 서버 포트 및 데이터베이스 연결 설정
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate(); // 데이터베이스 연결 테스트
        console.log('Database connected');
        await sequelize.sync(); // 데이터베이스 동기화 (모델 생성/업데이트)
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});