const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
	{
		// country: {
		// 	type: String,
		// 	required: true,
		// },
		title: { type: String, required: true },
		// price: {
		// 	type: Number,
		// 	required: true,
		// },
		// desc: {
		// 	type: String,
		// 	required: true,
		// },
		image: { type: String, required: true },
		// period: {
		// 	type: String,
		// 	required: true,
		// },
		// personnel: {
		// 	type: Number,
		// 	required: true,
		// },
		// manager: {
		// 	type: String,
		// 	required: true,
		// },
		// phone: {
		// 	type: Number,
		// 	required: true,
		// },
		// inclusionItem: {
		// 	type: String,
		// 	required: true,
		// },
		// notInclusionItem: {
		// 	type: String,
		// 	required: true,
		// },
		// etcItem: {
		// 	type: String,
		// },
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Products', ProductsSchema);
