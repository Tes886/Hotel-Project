// const router = require('express').Router();
// let Product = require('../models/product.model');
// let User = require('../models/user.model');
// let Order = require('../models/orders.model');

// router.route('/').get((req, res) => {
//     Product.find()
//         .then(products => res.json(products))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//     Product.findById(req.params.id)
//         .then(product => res.json(product))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/orders').get ((req, res) => {
//     user = User.findById({ _id: req.user._id })
//     user
//     .populate('cart.items.productId')
//         .execPopulate()
//         .then(user => {
//             const products = user.cart.items;
//             res.json(products)
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// })

// router.route('/orders').post ((req, res) => {
//     const prodId = req.body._id;
//     Product.findById(prodId)
//     .then(product => {
//         user = User.findById({ _id: req.user._id })

//         return user.addToCart(product);
//     })
//         .catch(err => res.status(400).json('Error: ' + err));
// })
