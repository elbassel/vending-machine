const chai = require('chai');

const ProductAvailability = require('../services/ProductAvailability');
const { availableProduct, unavailableProduct } = require('./sample-data');

const { expect } = chai;

describe('It tests Product availability', () => {

	it('should test product available', () => {
		const result = ProductAvailability.isAvailable(availableProduct);
		expect(result)
			.to.be.equals(true);
	});

	it('should test product unavailable', () => {
		try{
			ProductAvailability.isAvailable(unavailableProduct);
		} catch (e) {
			expect(e)
				.to.be.instanceOf(Error);
		}
	});
});
