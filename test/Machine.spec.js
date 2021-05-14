const chai = require('chai');
const sinon = require('sinon');
const Product = require('../db/product');
const Order = require('../db/order');
const Machine = require('../services/Machine');
const ProductLoader = require('../services/ProductLoader');
const { availableProduct, newOrder, rightPushedMoney, productCode, products } = require('./sample-data');

const { expect } = chai;
let productStubUpdate;
let productStubFind;
let orderStub;
let productLoaderStub;


describe('It tests machine placing order', () => {
	beforeEach(() => {
		productStubUpdate = sinon.stub(Product, 'updateOne').returns(availableProduct);
		productStubFind = sinon.stub(Product, 'findOne').returns(availableProduct);
		orderStub = sinon.stub(Order, 'create').returns(newOrder);
		productLoaderStub = sinon.stub(ProductLoader, 'load').returns(products)
	});

	afterEach(() => {
		if (productStubUpdate) productStubUpdate.restore();
		if (productStubFind) productStubFind.restore();
		if (orderStub) orderStub.restore();
		if (productLoaderStub) productLoaderStub.restore();
	});

	it('should loading products', async () => {
		const result = await Machine
			.placeOrder({pushedMoney: rightPushedMoney, productCode});
		expect(result).equals(newOrder);
	});

	it('throw error if product not exist', async () => {
		productStubFind.restore();
		productStubFind = sinon.stub(Product, 'findOne').returns(undefined);
		try{
			await Machine
				.placeOrder({pushedMoney: rightPushedMoney, productCode});
		} catch (e) {
			expect(e)
				.to.be.instanceOf(Error);
		}
	});

	it('should loading products', async () => {
		const result = await Machine.loadProducts();
		expect(result)
			.to.be.an('array');
	});


});
