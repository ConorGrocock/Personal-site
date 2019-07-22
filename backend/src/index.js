'use strict';

const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const cors = require('cors');

let databaseConnection = "Waiting for Database response...";

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());
app.options('*', cors());

mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
    databaseConnection = "Error connecting to Database";
});

mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
    databaseConnection = "Connected to Database";
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
