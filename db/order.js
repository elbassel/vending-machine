const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const schema = new Schema({
	product: { type: ObjectId, ref: 'Product' },
	number: { String },
	price: Number,
	pushedMoney: Number,
	RemainingMoney: Number,
});

module.exports = mongoose.model('Order', schema);

