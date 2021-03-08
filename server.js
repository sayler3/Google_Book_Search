//Bringing in dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

//setup express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db connection
require("./models/connection");

app.listen(PORT, () => console.log(`connected on http://localhost${PORT}`));
