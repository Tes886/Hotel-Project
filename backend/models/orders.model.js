const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        username: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }, products: [
        {
            product: { type: Object, required: true },
            quantity: { type: Number, required: true }
        }
    ]
},
    {
        timestamps: true,

    });
   
module.exports = mongoose.model('Order', orderSchema);
