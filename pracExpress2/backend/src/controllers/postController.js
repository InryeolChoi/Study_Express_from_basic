import Post from '../models/postModel.js';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts', error: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newPost = await Post.create({ title, content, author });
        res.status(201).json({ message: 'Post created successfully', postId: newPost.id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const post = await Post.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.title = title;
        post.content = content;
        await post.save();

        res.json({ message: 'Post updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        await post.destroy();

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving post', error: error.message });
    }
};