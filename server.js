const express = require("express");
const app = express()
const os = require("os")

// Routes

app.use("/static",express.static("static"))

const Route = require("./scripts/routes")
new Route(app,__dirname);



app.listen(3000);