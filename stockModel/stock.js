const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/stock');

const stockSchema = new mongoose.Schema({
    title: String,
    symbol: String, 
})
const userSchema = new mongoose.Schema({
    name: String,
    symbol: String,
    totalPrice: String,
    coinCount: String,
    image: String,
})


const Stock = mongoose.model("Stock", stockSchema);
const User = mongoose.model("User", userSchema);

module.exports = {Stock, User};