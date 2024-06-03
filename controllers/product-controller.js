const { Product, User } = require('../models');

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create({ ...req.body, UserId: req.userId });
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ where: { UserId: req.userId } });
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ where: { id: req.params.id, UserId: req.userId } });

        if (!product) {
            return res.status(404).send({ message: 'Product not found.' });
        }

        await product.update(req.body);
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ where: { id: req.params.id, UserId: req.userId } });

        if (!product) {
            return res.status(404).send({ message: 'Product not found.' });
        }

        await product.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
};
