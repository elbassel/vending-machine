const Product = require('../db/product');

class ProductLoader {
	static async load() {
		return Product.find({}, {}, {lean: true});
	}
}

module.exports = ProductLoader;
