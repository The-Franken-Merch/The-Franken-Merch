const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/", express.static(__dirname + "/build"));

app.listen(3000, () => {
    console.log("We're going to be rich!");
  });