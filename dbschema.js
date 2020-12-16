const mongoose = require('mongoose');

const schema = mongoose.Schema({
    src:String,
    handleName:String,
    description:String,
    song:String,
    likes:Number,
    shares:Number,
    messages:Number,
});

module.exports = mongoose.model('tiktokvideos', schema);