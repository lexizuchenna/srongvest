const Users = require("../models/Users");
const bcrypt = require("bcryptjs");
const passport = require('passport');
const nodemailer = require('nodemailer');
const { getMaxListeners } = require("../models/Users");
const register = async (req, res) => {
  let useremail = await Users.findOne({ email: req.body.email });
  let ers = [];

  if (useremail) {
    ers.push({ msg: "User already exists" });
    console.log(ers);
    return res.status(400).render("public/register", { ers: ers });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPwd = await bcrypt.hash(req.body.password, salt);
  const newUser = await Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPwd,
  });

  newUser.save();
  res.redirect("/users/login");

  let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'lexizuchenna488@zoho.com',
      pass: 'Spech!al123'
    }
  })

  await transporter.sendMail({
    from: 'lexizuchenna488@zoho.com',
    to: req.body.email,
    text: 'Welcome to SrongVest'
  })
};
const login = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/users/dashboard",
    failureRedirect: "/users/login",
  })(req, res, next);
};

module.exports = {
  register,
  login,
};
