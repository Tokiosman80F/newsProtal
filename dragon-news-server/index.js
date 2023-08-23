const express = require("express");
const app = express();
const port = process.env.PORT ||3000;
const categories=require('./data/categories.json') 
var cors = require("cors");

app.use(cors())
app.get("/", (req, res) => {
  res.send("Newsss is runnung");
});

app.get('/categories',(req,res)=>{
    console.log(categories);
    res.send(categories)

})

app.listen(port, () => {
  console.log(`News app listening on port ${port}`);
});
