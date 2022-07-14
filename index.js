const express = require("express");
const path = require("path");
const passport = require("passport");
const dotenv = require("dotenv");
const session = require('express-session')
const MongoStore = require('connect-mongo')
const { engine } = require("express-handlebars");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

require("./config/LocalPassport")(passport);
connectDB();

app.use(express.urlencoded({ extended: false }));

const {formatDate} = require('./middlewares/hbsHelper')

app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    extname: "hbs",
    helpers: {
      formatDate
    },
  })
);

app.set("view engine", ".hbs");

app.use(express.static(path.join(__dirname, "public")));

//Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  }) 
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/public"));
app.use("/users", require("./routes/users"));
app.use("/users", require("./routes/dashboard"));
app.listen(
  process.env.PORT,
  console.log(`App started on port ${process.env.PORT}`)
);
