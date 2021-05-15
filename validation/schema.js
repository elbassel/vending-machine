module.exports = {
  placeOrderSchema: {
    type: 'object',
    properties: {
      pushedMoney: { type: 'number', minimum: 0, maximum: 200 },
      productCode: { type: 'string', minLength: 3, maxLength: 10 },
    },
    required: ['pushedMoney', 'productCode'],
  },
};
