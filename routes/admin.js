const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
    res.send("<form action='/admin/products' method='POST'><input name='title' /><button type='submit'>Add product</button></div>");
})

router.post('/products', (req, res) => {
    const { title } = req.body;
    res.send(`<h1>The new product ${title} has been added successfully`);
})

module.exports = router;