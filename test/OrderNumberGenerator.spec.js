const chai = require('chai');

const OrderNumberGenerator = require('../services/OrderNumberGenerator');

const { expect } = chai;

describe('It tests generating unique random number ', () => {
	it('should return a unique string', async () => {
		const result = await OrderNumberGenerator.generateUniqueNumber();
		expect(result.toString())
			.to.be.an('string');
	});
});
