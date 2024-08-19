const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes); // route starts with /admin
app.use(shopRoutes);

// Error catching route. 

app.use((req, res) => {
    res.status(404).send("<h1>Error page not found 404!</h1>")
})

// App listen...
app.listen(3000);