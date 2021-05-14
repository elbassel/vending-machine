const chai = require('chai');
const { expect } = chai;
const OrderPriceComparator = require('../services/OrderPriceComparator');
const { wrongPushedAmount, rightPushedMoney, availableProduct } = require('./sample-data');

describe('It tests pushed amount is enough for the order', () => {
	it('should return true as the pushed money is enough for the product', () => {
		const result = OrderPriceComparator.compare(rightPushedMoney, availableProduct);
		expect(result)
			.to.be.equals(true);
	});

	it('should throw Error as the pushed money is not enough for the product', () => {
		try{
			OrderPriceComparator.compare(wrongPushedAmount, availableProduct);
		} catch (e) {
			expect(e)
				.to.be.instanceOf(Error);
		}
	});
});
