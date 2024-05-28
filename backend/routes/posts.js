import express from 'express';
const postRouter = express.Router();

import Post from '../models/post.js'

// Get all posts
postRouter.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific post by slug
postRouter.get('/slug/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Create a post
postRouter.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

export default postRouter;
