const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

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

//app.use(express.static("public"));

app.get("/:image/", (req, res) => {
  //res.send("Test");
  res.header("Cache-Control", "max-age=86400, public");
  res.sendFile("public/" + req.params.image, { root: "." });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
