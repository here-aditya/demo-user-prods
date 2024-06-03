const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.register = async (req, res) => {
    try {console.log(req.body);
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } });

        if (!user || !user.validPassword(req.body.password)) {
            return res.status(401).send({ message: 'Invalid username or password.' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.status(200).send({ token });
    } catch (error) {
        res.status(400).send(error);
    }
};
