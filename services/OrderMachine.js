const Product = require('../db/product');
const Order = require('../db/order');
const OrderNumberGenerator = require('./OrderNumberGenerator');
const OrderPriceComparator = require('./OrderPriceComparator')
const ONE_ITEM_BOUGHT = -1;

class OrderMachine {
	static async placeOrder({ pushedMoney, productCode, product}) {
		OrderPriceComparator.compare(pushedMoney, product)
		Product
			.updateOne({code: productCode}, { $inc: {stock: ONE_ITEM_BOUGHT} }, { new: true });

		const orderData = {
			product: product._id,
			price: product.price,
			number: OrderNumberGenerator.generateUniqueNumber(),
			pushedMoney,
			RemainingMoney: pushedMoney - product.price
		}
		return Order.create(orderData)
	}
}

module.exports = OrderMachine;
