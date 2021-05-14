const products = [
	{
		"_id" : "609beb05fff945d33d82de99",
		"title" : "Product 0",
		"code" : "code0",
		"price" : 11,
		"stock" : 91
	},
	{
		"_id" : "609beb05fff945d33d82de9a",
		"title" : "Product 1",
		"code" : "code1",
		"price" : 9,
		"stock" : 72,
		"__v" : 0
	},
	{
		"_id" : "609beb05fff945d33d82de9b",
		"title" : "Product 2",
		"code" : "code2",
		"price" : 16,
		"stock" : 99,
		"__v" : 0
	}
]

const productCode = 'code0';

const rightPushedMoney = 200;
const wrongPushedAmount = 1;

const newOrder = {
	"_id" : "609c6feedc04115f884d65d9",
	"product" : "609beb05fff945d33d82de99",
	"price" : 11,
	"pushedMoney" : 100,
	"RemainingMoney" : 89
}

module.exports = {
	products,
	availableProduct: products[0],
	unavailableProduct: { ...products[1], stock: 0 },
	rightPushedMoney,
	wrongPushedAmount,
	newOrder,
	productCode
};
