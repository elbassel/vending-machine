const chai = require('chai');
const sinon = require('sinon');
const Product = require('../db/product');
const ProductLoader = require('../services/ProductLoader');
const { products } = require('./sample-data');

const { expect } = chai;
let productStub;


describe('It tests loading products', () => {
	beforeEach(() => {
		productStub = sinon.stub(Product, 'find').returns(products);
	});

	afterEach(() => {
		if (productStub) productStub.restore();
	});

	it('should loading products', async () => {
		const result = await ProductLoader.load();
		expect(result)
			.to.be.an('array');
	});
});
