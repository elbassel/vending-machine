const Product = require('./product');

module.exports = async () => {
	const products = await Product.find({}).lean();
	if (products.length === 0) {
		// eslint-disable-next-line no-console
		console.log('Add sample products to db');
		const sampleProducts = [];
		for (let i = 0; i < 20; i++) {
			sampleProducts.push({
				title: `Product ${i}`,
				code: `code${i}`,
				price: Math.floor(Math.random() * 20),
				stock: Math.floor(Math.random() * 100)
			});
		}
		Product.insertMany(sampleProducts);
	}
};
