const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PoemSchema = new Schema({
    title:String,
    content:String
}, {
    timestamps: true,
});


const PoemModel = model('Poem', PoemSchema);
module.exports = PoemModel;
