const express = require('express');
const router = express.Router();
// Posts Model
const Posts = require('../../models/Posts');

// @routes GET api/posts
// @desc Get all posts
router.get('/', async (req, res) => {
	try {
		const posts = await Posts.find();
		if (!posts) throw Error('No Items');
		res.status(200).json(posts);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

// @routes GET api/posts/:id
// @desc Get specific post
router.get('/:id', async (req, res) => {
	try {
		const post = await Posts.findById(req.params.id);
		if (!post) throw Error('No Items');
		res.status(200).json(post);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

// @routes POST api/posts
// @desc Create An post
router.post('/', async (req, res) => {
	const newPost = new Posts(req.body);

	try {
		const post = await newPost.save();
		if (!post) throw Error('Something went wrong while saving the post');
		res.status(200).json(post);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

// @routes DELETE api/posts/:id
// @desc Delete an post
router.delete('/:id', async (req, res) => {
	try {
		const post = await Posts.findByIdAndDelete(req.params.id);
		if (!post) throw Error('No post found');
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

// @routes UPDATE api/posts/:id
// @desc Update an post
router.patch('/:id', async (req, res) => {
	try {
		const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
		if (!post) throw Error('Something went wrong while updating the post!');
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

module.exports = router;
