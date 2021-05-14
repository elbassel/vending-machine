class OrderPriceComparator {
	static compare(pushedMoney, product) {
		if (pushedMoney < product.price) {
			throw new Error('The inserted amount of Money is less than of the price');
		}
		return true;
	}
}

module.exports = OrderPriceComparator;
