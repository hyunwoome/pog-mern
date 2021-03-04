const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const Products = require('../../models/Products');

/**
 * @action UPLOAD Products Image
 */
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString() + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: storage,
	limits: { fileSize: 1024 * 1024 * 5 },
	fileFilter: fileFilter,
});

const router = express.Router();

/**
 * @action GET Products
 * @route http://localhost:5000/api/products
 * @method GET
 */
router.get('/', async (req, res) => {
	try {
		const products = await Products.find().populate({
			path: 'commentPublished',
			select: 'author content',
		});
		if (!products) throw Error('No Products');
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

/**
 * @action GET Products from Country
 * @route http://localhost:5000/api/products/:country
 * @method GET
 */
router.get('/:country', async (req, res) => {
	try {
		const products = await Products.findById(req.params.country);
		if (!products) throw Error('No Items');
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

/**
 * @action GET Product from ID
 * @route http://localhost:5000/api/products/:id
 * @method GET
 */
router.get('/:id', async (req, res) => {
	try {
		const product = await Products.findById(req.params.id);
		if (!product) throw Error('No Items');
		res.status(200).json(product);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

/**
 * @action ADD New Product
 * @route http://localhost:5000/api/products
 * @method POST
 */
router.post('/', upload.single('image'), async (req, res) => {
	const newProduct = new Products({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		country: req.body.country,
		// image: req.file.path,
	});
	try {
		const product = await newProduct.save();
		if (!product) throw Error('Something went wrong while saving the products');
		res.status(200).json(product);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

/**
 * @action DELETE Product by ID
 * @route http://localhost:5000/api/products/:id
 * @method DELETE
 */
router.delete('/:id', async (req, res) => {
	try {
		const product = await Products.findByIdAndDelete(req.params.id);
		if (!product) throw Error('No post found');
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

/**
 * @action UPDATE Product by ID
 * @route http://localhost:5000/api/products/:id
 * @method UPDATE
 */
router.patch('/:id', async (req, res) => {
	try {
		const product = await product.findByIdAndUpdate(req.params.id, req.body);
		if (!product)
			throw Error('Something went wrong while updating the product!');
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

module.exports = router;
