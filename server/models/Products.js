const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ProductsSchema = new Schema(
	{
		country: { type: String, required: true }, // 국가
		region: { type: String, required: true }, // 지역
		sale: { type: Boolean, required: true }, // 초특가 유무
		title: { type: String, required: true }, // 제목 (CC)
		price: { type: Number, required: true }, // 가격
		desc: { type: String, required: true }, // 설명
		image: { type: String, required: true }, // 이미지
		period: { type: String, required: true }, // 기간
		personnel: { type: Number, required: true }, // 인원
		manager: { type: String, required: true }, // 담당자
		phone: { type: String, required: true }, // 연락처
		include: { type: String, required: true }, // 포함
		notInclude: { type: String, required: true }, // 불포함
		etcItem: { type: String }, // 그 외
		// 후기댓글
		comment: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Products', ProductsSchema);
