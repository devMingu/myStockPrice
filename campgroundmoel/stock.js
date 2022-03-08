const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/stock');

const stockSchema = new mongoose.Schema({
    title: String,
    symbol: String, 
})


const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;