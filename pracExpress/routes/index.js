import express from "express";
import * as postModel from "../models/posts.js"

const router = express.Router();

// 게시글 목록
router.get('/', (req, res) => {
    const posts = postModel.getPosts();
    res.render('index', { posts });
});

// 새 게시글 작성
router.get('/new', (req, res) => {
    res.render('new');
})

// 게시글 생성
router.post('/create', (req, res) => {
    postModel.createPost(req.body);
    res.redirect('/');
})

// 게시글 수정 폼
router.get('/edit/:id', (req, res) => {
    const post = postModel.getPostById(req.params.id);
    if (post) {
        res.render('edit', { post });
    } else {
        res.status(404).send('Post not found');
    }
})

// 게시글 수정
router.put('/edit/:id', (req, res) => {
    postModel.updatePost(req.params.id, req.body);
    res.redirect('/');
})

// 게시글 삭제
router.delete('/delete/:id', (res, req) => {
    postModel.deletePost(req.params.id);
    res.redirect('/');
})

export default router;