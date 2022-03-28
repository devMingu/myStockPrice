const Stock = require("../stockModel/stock");
const stocks = require("./stock");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/stock');
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


async function seedDB(){
    await Stock.deleteMany({});
    for(i=0 ; i<10 ; i++){
        const data = new Stock({
            title:`${stocks[i].name}`,
            symbol:`${stocks[i].symbol}`,
        })
        await data.save();
    }
}
seedDB().then(()=>{
    mongoose.connection.close();
})