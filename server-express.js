const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const routeDir = require("./utils/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/admin', adminRoutes); // route starts with /admin
app.use(shopRoutes);

// Error catching route. 

app.use((req, res) => {
    res.status(404).sendFile(path.join(routeDir, "views", "404.html"));
})

// App listen...
app.listen(3000);