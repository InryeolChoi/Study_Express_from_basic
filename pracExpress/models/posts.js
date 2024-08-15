import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/posts.json');

// 파일에서 데이터 읽어오기
function readData() {
    return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
}

// 파일에 데이터 저장
function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// 모든 게시글 조회
export function getPosts() {
    return readData();
}

// 특정 게시글 조회
export function getPostById(id) {
    const posts = readData();
    return posts.find(post => post.id === parseInt(id))
}



// 게시글 만들기
export function createPost(newPost) {
    const posts = readData();
    newPost.id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    posts.push(newPost);
    writeData(posts);
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
export function deletePost(id) {
    const posts = readData();
    const filteredPosts = posts.filter(post => post.id !== parseInt(id));
    writeData(filteredPosts);
} 