const express = require('express');
const router = express.Router();
const userController = require('../controller/product');

// Route definitions link HTTP methods/endpoints to controller handles
router.get('/products', userController.getProducts);
router.post('/products', userController.createProduct);

module.exports = router;
