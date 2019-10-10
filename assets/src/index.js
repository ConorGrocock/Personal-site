const express = require("express");
const cors = require("cors");

const fs = require("fs");
var im = require("imagemagick");

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(cors());
app.options("*", cors());

app.use((req, res, next) => {
  console.log("[" + new Date() + "] " + req.url);
  next();
});

app.use(express.static("public"));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
