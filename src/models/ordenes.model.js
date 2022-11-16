const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
    },
    timestamp: {
        type:String,
        required: true,
    },
    productos:{
        type:Array,
        required: true,
    },
    numberOfOrder:{
        type:Number,
        required: true
    },
    status:{
        type:String,
        required: true, 
        default: 'Generada'},
});


const orderModel = mongoose.model('Order',orderSchema);

module.exports = orderModel