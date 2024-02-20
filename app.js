const express = require("express");
const path = require ("path");
const app = express()
const port = 3030;

/* Config */
app.set("view engine", "ejs");
app.set ("views",path.join(__dirname, "./views"))

/* middleware */
app.use (express.static('public'));

/* routers */
const otherRoutes= require ('./routes/other.routes')

/* Routes */
app.use("/",otherRoutes)


app.listen(port, () => console.log(`http://localhost:${port}`))