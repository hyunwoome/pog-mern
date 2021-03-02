// Import Module
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

require('dotenv').config();
const { MONGO_URI } = require('./config');

const app = express();

// Routes
const postsRoutes = require('./routes/api/posts');
const productsRoutes = require('./routes/api/products');

// Middleware

app.use(express.json()); // BodyParser
app.use('/uploads', express.static('uploads')); // Static

// Connect to MongoDB Atlas
mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB Connected'))
	.catch((error) => console.log(error));

// User routes
app.use('/api/posts', postsRoutes);
app.use('/api/products', productsRoutes);

// Connect to Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server run at port ${PORT}`);
});
