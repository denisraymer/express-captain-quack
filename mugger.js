const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MuggerSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    color: String,
    status: String,
    price: Number
})

const Mugger = mongoose.model('product', MuggerSchema);

module.exports = Mugger;
