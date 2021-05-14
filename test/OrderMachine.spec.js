const chai = require('chai');
const sinon = require('sinon');
const Product = require('../db/product');
const Order = require('../db/order');
const OrderMachine = require('../services/OrderMachine');
const { availableProduct, newOrder, rightPushedMoney } = require('./sample-data');

const { expect } = chai;
let productStub;
let orderStub;


describe('It tests placing order', () => {
	beforeEach(() => {
		productStub = sinon.stub(Product, 'updateOne').returns(availableProduct);
		orderStub = sinon.stub(Order, 'create').returns(newOrder);
	});

	afterEach(() => {
		if (productStub) productStub.restore();
		if (orderStub) orderStub.restore();
	});

	it('should place order', async () => {
		const result = await OrderMachine
			.placeOrder({pushedMoney: rightPushedMoney, product: availableProduct});
		expect(result).equals(newOrder);
	});
});
