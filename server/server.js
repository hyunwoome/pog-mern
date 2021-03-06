// Import Module
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

require('dotenv').config();
const { MONGO_URI } = require('./config');

const app = express();

// Routes
const productsRoutes = require('./routes/api/products');
const commentRoutes = require('./routes/api/comment');

// Middleware

app.use(cors()); // CORS
app.use(express.json()); // BodyParser
// app.use('/uploads', express.static('uploads')); // Static
app.use('/uploads', express.static('uploads'));

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
app.use('/api/products', productsRoutes);
app.use('/api/comment', commentRoutes);

// Connect to Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server run at port ${PORT}`);
});
