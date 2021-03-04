const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ProductsSchema = new Schema(
	{
		country: { type: String, required: true },
		title: { type: String, required: true },
		// price: { type: Number, required: true },
		// desc: { type: String, required: true },
		// image: { type: String, required: true },
		// period: { type: String, required: true },
		// personnel: { type: Number, required: true },
		// manager: { type: String, required: true },
		// phone: { type: Number, required: true },
		// include: { type: String, required: true },
		// norInclude: { type: String, required: true },
		// etcItem: { type: String },
		comment: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
	},
	{ timestamps: true },
);

ProductsSchema.virtual('commentPublished', {
	ref: 'Comment', // Model
	localField: '_id',
	foreignField: 'products',
});

ProductsSchema.set('toObject', { virtual: true });
ProductsSchema.set('toJSON', { virtual: true });

module.exports = mongoose.model('Products', ProductsSchema);
