const Product = require('../db/product');

const ProductAvailability = require('./ProductAvailability')
const OrderMachine = require('./OrderMachine');
const MoneyChecker = require('./MoneyChecker');
const ProductLoader = require('./ProductLoader');

class Machine {
	static async placeOrder({ pushedMoney, productCode}) {
		const product = await Product.findOne({ code: productCode });
		if (!product) throw new Error('Product not found');
		MoneyChecker.checkPushedMoney(pushedMoney);
		ProductAvailability.isAvailable(product);
		return OrderMachine.placeOrder({ pushedMoney, productCode, product});
	}

	static async loadProducts() {
		return ProductLoader.load();
	}
}

module.exports = Machine;
