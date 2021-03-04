const express = require('express');
const mongoose = require('mongoose');
const Comment = require('../../models/Comment');
const Products = require('../../models/Products');

const router = express.Router();

/**
 * @action GET Comments
 * @route http://localhost:5000/api/comment
 * @method GET
 */
router.get('/', async (req, res) => {
	try {
		const comment = await Comment.find();
		res.status(200).json(comment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

/**
 * @action ADD New Comment
 * @route http://localhost:5000/api/comment
 * @method POST
 */
router.post('/', async (req, res) => {
	try {
		const comment = new Comment(req.body);
		await comment.save();
		const products = await Products.findById({ _id: comment.products });
		products.comment.push(comment);
		await products.save();
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
