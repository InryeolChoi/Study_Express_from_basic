import express from 'express';
import {
    getAllPosts,
    createPost,
    updatePost,
    deletePost,
    getPostById
} from '../controllers/postController.js';

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/:id', getPostById);

export default router;