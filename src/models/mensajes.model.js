const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
    },
    type: {
        type:String,
        required: true,
    },
    texto:{
        type:String,
        required: true,
    },
    timestamp:{
        type:String,
        required: true,
    }
});


const messageModel = mongoose.model('Message',messageSchema);

module.exports = messageModel

