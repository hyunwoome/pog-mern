const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const CommentSchema = new Schema(
	{
		author: { type: String, required: true },
		content: { type: String, required: true },
		products: {
			type: Schema.Types.ObjectId,
			ref: 'Products',
			required: true,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Comment', CommentSchema);
