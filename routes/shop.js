const express = require("express");
const path = require("path");
const routeDir = require("../utils/path");
const router = express.Router();

router.get( "/", (req, res) => {
    res.sendFile(path.join(routeDir, "views", "shop.html"));
})

module.exports = router;