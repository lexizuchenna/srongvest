const bcrypt = require("bcryptjs");
const passport = require("passport");
const nodemailer = require("nodemailer");

const Users = require("../models/Users");
const Ref = require("../models/Referral");
const { emailText } = require("../constants/email");

// Register
const register = async (req, res) => {
  let useremail = await Users.findOne({ email: req.body.email });
  let ers = [];

  if (useremail) {
    ers.push({ msg: "User already exists" });
    console.log(ers);
    return res.status(400).render("public/register", { ers: ers });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(req.body.password, salt);
    const newUser = await Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPwd,
    });

    newUser.save();

    // Referral
    if (req.body.ref) {
      const Referral = await Ref.create({
        refName: req.body.firstName,
        refemail: req.body.refemail,
      });
      Referral.save();
    }
    res.redirect("/users/login");

    // Nodemailer

    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: '"SrongVest" <lexizuchenna488@zoho.com>',
      subject: "Welcome to SrongVest",
      to: req.body.email,
      html: emailText(req.body.firstName, req.body.lastName),
    });
  }
};

//Login
const login = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/users/dashboard",
    failureRedirect: "/users/login",
  })(req, res, next);
};

// Logout
const logout = async (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
  });
  res.redirect("/users/login");
};

module.exports = {
  register,
  login,
  logout,
};
