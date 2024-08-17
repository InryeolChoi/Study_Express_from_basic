import express from 'express';
import { getPosts, getPostById, createPost, deletePost } from '../models/posts.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await getPosts();
  res.render('index', { posts });
});

router.get('/post/:id', async (req, res) => {
  const post = await getPostById(req.params.id);
  res.render('post', { post });
});

router.post('/create', async (req, res) => {
  const { title, content } = req.body;
  await createPost(title, content);
  res.redirect('/');
});

router.post('/delete/:id', async (req, res) => {
  await deletePost(req.params.id);
  res.redirect('/');
});

export default router;