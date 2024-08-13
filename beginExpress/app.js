import express from 'express';
import morgan from 'morgan';
import { configDotenv } from 'dotenv';
import indexRouter from './routes/index.js';
import userRouter from './routes/user.js';

configDotenv();
const app = express();

app.set('port', process.env.PORT || 8080);
app.set('view engine')

app.use(morgan('dev')); // 추가적인 요청을 보여줌.
app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not found');
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
})

app.listen(app.get('port'), () => {
    console.log(`서버가 ${app.get('port')} 포트에서 실행 중입니다.`);
})