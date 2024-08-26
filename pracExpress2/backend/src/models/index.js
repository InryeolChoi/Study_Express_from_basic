import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// 데이터베이스 연결 설정
const sequelize = new Sequelize({
    dialect: 'mysql', // 데이터베이스 종류
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'practicedb',
    logging: false, // 로그를 콘솔에 출력하지 않으려면 false로 설정
});

// 모델 임포트
import User from './userModel.js';
import Post from './postModel.js';

// 모델 초기화
const models = { User, Post };

for (const model of Object.values(models)) {
    model.init(sequelize); // 모델을 Sequelize 인스턴스에 등록
}

// 모델 관계 설정 (필요한 경우, 모델 간의 관계 설정을 여기에 추가)

// 모델들을 export
export default { sequelize, models };