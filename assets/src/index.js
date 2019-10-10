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

//app.use(express.static("public"));

function resize(path, format, width, height) {
  // const readStream = fs.createReadStream(path);
  // let transform = sharp();

  // if (format) {
  //   transform = transform.toFormat(format);
  // }

  // if (width || height) {
  //   transform = transform.resize(width, height);
  // }

  return readStream.pipe(transform);
}

server.get("/:filename", (req, res) => {
  // Extract the query-parameter
  const widthString = req.query.width;
  const heightString = req.query.height;
  const format = req.query.format;
  const filename = req.params.filename;

  // Parse to integer if possible
  let width, height;
  if (widthString) {
    width = parseInt(widthString);
  }
  if (heightString) {
    height = parseInt(heightString);
  }
  // Set the content-type of the response
  res.type(`image/${format || "png"}`);

  // Get the resized image
  resize("public/" + filename, format, width, height).pipe(res);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
