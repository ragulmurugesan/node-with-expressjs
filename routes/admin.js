const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add-product", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
})

router.post('/products', (req, res) => {
    const { title } = req.body;
    res.send(`<h1>The new product ${title} has been added successfully`);
})

module.exports = router;