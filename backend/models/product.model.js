const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    image: String,
    description: String,
},
    {
        timestamps: true,
    });

//model name will be used to turn into collection name
//'Product' -> lower case 'product' + 's'
module.exports = mongoose.model('Product', productSchema);