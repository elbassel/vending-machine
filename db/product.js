const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
	title:  String,
	code: String,
	stock: Number,
	price: Number
});

module.exports = mongoose.model('Product', schema);

