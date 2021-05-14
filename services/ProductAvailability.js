class ProductAvailability {
	static isAvailable(product) {
		if (product.stock <= 0) throw new Error('Product out of stock');
		return true;
	}
}

module.exports = ProductAvailability
