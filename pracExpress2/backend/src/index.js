import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,      
})

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('DB에 연결')
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express.js backend!');
});
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});