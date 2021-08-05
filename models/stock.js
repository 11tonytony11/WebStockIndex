const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    name: String,
    InstOwn: String,
    ShortFloat: String,
    Range: String,
    PE: String,
    Revenue: String,
    Gross: String,
    Operating: String,
    net: String
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
