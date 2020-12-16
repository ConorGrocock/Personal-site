const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const rateLimit = require("express-rate-limit");

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

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  skip: (req,res) => {
    req.header("referer").endsWith("grocock.email/")
  }
});

app.use(limiter)

app.get("/:image/", (req, res) => {
  //res.send("Test");
  res.header("Cache-Control", "max-age=86400, public");
  res.sendFile("public/" + req.params.image, { root: "." });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
