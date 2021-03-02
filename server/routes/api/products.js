const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const Products = require('../../models/Products');

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

// @routes GET api/products
// @desc Get all products
router.get('/', async (req, res) => {
	try {
		const products = await Products.find();
		if (!products) throw Error('No Products');
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

// @routes GET api/products/:country
// @desc Get country products
router.get('/:country', async (req, res) => {
	try {
		const products = await Products.findById(req.params.country);
		if (!products) throw Error('No Items');
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

// @routes GET api/products/:id
// @desc Get specific products
router.get('/:id', async (req, res) => {
	try {
		const product = await Products.findById(req.params.id);
		if (!product) throw Error('No Items');
		res.status(200).json(product);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

// @routes POST api/products
// @desc Create An products
router.post('/', upload.single('image'), async (req, res) => {
	console.log(req.file);
	const newProduct = new Products({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		image: req.file.path,
	});
	try {
		const product = await newProduct.save();
		if (!product) throw Error('Something went wrong while saving the products');
		res.status(200).json(product);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

// @routes DELETE api/products/:id
// @desc Delete an post
router.delete('/:id', async (req, res) => {
	try {
		const product = await Products.findByIdAndDelete(req.params.id);
		if (!product) throw Error('No post found');
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

// @routes UPDATE api/products/:id
// @desc Update an product
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
