"use strict";

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(cors());
app.options("*", cors());

var projectRouter = require("./routers/projects");
app.use("/projects", projectRouter);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
