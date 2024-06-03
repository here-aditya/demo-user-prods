const express = require('express');
const productController = require('../controllers/product-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
