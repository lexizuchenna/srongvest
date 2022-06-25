const express = require("express");
const path = require('path')
const dotenv = require("dotenv");
const {engine } = require("express-handlebars");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));

app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    extname: "hbs",
  })
);

app.set('view engine', '.hbs')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/public'))
app.listen(
  process.env.PORT,
  console.log(`App started on port ${process.env.PORT}`)
);
