import express from 'express';
import methodOverride from 'method-override';
import { getPosts, getPostById, createPost, deletePost, updatePost } from '../models/posts.js';

const router = express.Router();

router.use(methodOverride('_method'));

router.get('/', async (req, res) => {
  const posts = await getPosts();
  res.render('index', { posts });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/post/:id', async (req, res) => {
  const post = await getPostById(req.params.id);
  res.render('post', { post });
});

// 게시글 수정 요청을 처리하는 POST 라우트
router.post('/edit/:id', async (req, res) => {
    const { title, content } = req.body;
    await updatePost(req.params.id, title, content);
    res.redirect(`/post/${req.params.id}`);
});
  
router.put('/edit/:id', async (req, res) => {
    const { title, content } = req.body;
    await updatePost(req.params.id, title, content);
    res.redirect(`/post/${req.params.id}`);
});

router.get('/edit/:id', async (req, res) => {
    const post = await getPostById(req.params.id);
    if (post) {
      res.render('edit', { post });
    } else {
      res.status(404).send('Post not found');
    }
});
  

router.post('/create', async (req, res) => {
    console.log(`Received Create request`);
    const { title, content } = req.body;
    await createPost(title, content);
    res.redirect('/');
});

router.delete('/delete/:id', async (req, res) => {
    console.log(`Received DELETE request for ID: ${req.params.id}`);
    await deletePost(req.params.id);
    res.redirect('/');
});

export default router;