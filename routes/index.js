const express = require('express');
const router = express.Router();

const Machine = require('../services/Machine')

/* GET home page. */
router.post('/orders', async (req, res, next) => {
  try {
    const data = req.body;
    const result = await Machine.placeOrder(data);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.get('/products', async (req, res, next) => {
  try {
    const products = await Machine.loadProducts();
    res.json(products);
  } catch (e) {
    next(e);
  }
});



module.exports = router;
