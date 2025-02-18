const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('welcome to ecommerce website');
});
app.get('/product/:id', (req, res) => {
    let productid = req.params.id;
    res.send('You requested product ' + productid);
});
app.get("/search", (req, res) => {
    if (req.query.name && req.query.cate)
    {
        res.send("You searched for " + req.query.name + " in " + req.query.cate);
    }
    else 
    res.send('search require both name and category');
}
);
  app.listen(3000, () => {
    console.log('server is running on port 3000!');
});