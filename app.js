const express = require('express')
const app = express()
const path = require("path");
const methodoverride = require("method-override");
const Stock = require("./campgroundmoel/stock");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/stock');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render("stockmarket/home");
})
app.get('/stock', async (req, res)=>{
    const data = await Stock.find({})
    res.render("stockmarket/stock", {data});
})
app.get('/stock/new', (req, res)=>{
    res.render("stockmarket/new");
})
app.post('/stock', async (req, res)=>{
    const data = await new Stock({...req.body.stock});
    await data.save();
    res.redirect(`/stockmarket/${data._id}`);
})
app.get('/stock/:id', async (req, res)=>{
    const {id} = req.params;
    const data = await Stock.findById(id);
    res.render("stockmarket/show", {data});
})
app.get('/stock/:id/edit', async (req, res)=>{
    const {id} = req.params;
    const data = await Stock.findById(id);
    res.render("stockmarket/edit", {data});
})
app.patch('/stock/:id', async (req, res)=>{
    const {id} = req.params;
    const data = await Stock.findByIdAndUpdate(id, {...req.body.stock});
    res.redirect(`/stockmarket/${data._id}`);
})
app.delete('/stock/:id', async (req, res)=>{
    const {id} = req.params;
    await Stock.findByIdAndDelete(id);
    res.redirect('/stock');
})

app.listen(3000, ()=>{
    console.log("LISTENING ON PORT 3000");
})