import { initDatabase } from '../db.js';

// 파일에서 데이터 읽어오기
function readData() {
    return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
}

// 파일에 데이터 저장
function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// 모든 게시글 조회
export async function getPosts() {
    const db = await initDatabase();
    return await db.all('SELECT * FROM posts ORDER BY created_at DESC');
}
  
// 특정 게시글 조회
export async function getPostById(id) {
    const db = await initDatabase();
    return await db.get('SELECT * FROM posts WHERE id = ?', id);
}
  


// 게시글 만들기
export async function createPost(title, content) {
    const db = await initDatabase();
    await db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
}
  
// 게시글 수정
export function updatePost(id, updatedPost) {
    const posts = readData();
    const index = posts.findIndex(post => post.id === parseInt(id));
    if (index !== -1) {
        posts[index] = { id: parseInt(id), ...updatedPost };
        writeData(posts);
    }
}

// 게시글 삭제
export async function deletePost(id) {
    const db = await initDatabase();
    await db.run('DELETE FROM posts WHERE id = ?', id);
}