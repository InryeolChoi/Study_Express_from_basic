import { initDatabase } from '../db.js';

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

// 게시글 업데이트
export async function updatePost(id, title, content) {
    const db = await initDatabase();
    return db.run('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id]);
}

// 게시글 삭제
export async function deletePost(id) {
    const db = await initDatabase();
    await db.run('DELETE FROM posts WHERE id = ?', id);
}