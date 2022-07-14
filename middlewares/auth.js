const Profile = require("../models/Profile");
const Fund = require("../models/Fund");
const Users = require("../models/Users");
const Withdraw = require("../models/Withdraw");

const isLoggedOut = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
};

const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/dashboard");
};

// Check Profile Update
const isprofileUpdated = async (req, res, next) => {
  const profile = await Profile.findOne({ email: req.user.email });
  let ers = [];
  if (profile === null) {
    ers.push({
      message: "Please Complete your profile to proceed to dashboard",
    });
    return res.status(403).redirect("/users/profile");
  }

  next();
};

// Check if fund is initiated
const isFunded = async (req, res, next) => {
  const fund = await Fund.findOne({ email: req.user.email });
  console.log(fund);
  if (fund !== null) {
    return res.status(403).redirect("/users/payment/fund");
  }
  next();
};

const withdrawal = async (req, res, next) => {
  const profile = await Profile.findOne({ email: req.user.email });
  const users = await Users.findOne({ email: req.user.email });
  const revenue = users.revenue;
  const minAmount = profile.min;

  let ers = [];
  if (revenue < minAmount) {
    ers.push({
      msg: "Avaiilable amount must  be greater or equal to Min Withdrawal",
    });
    res.render("dashboard/dashboardWith", {
      layout: "dash",
      revenue,
      minAmount,
      ers,
    });
  } else {
    next();
  }
};

const isWithdrawalRequested = async (req, res, next) => {
  const withdraw = await Withdraw.findOne({ email: req.user.email });
  if (withdraw !== null) {
    res.status(403).redirect("/users/payment/withdraw");
  }

  next();
};

module.exports = {
  isLoggedIn,
  isLoggedOut,
  isprofileUpdated,
  isFunded,
  withdrawal,
  isWithdrawalRequested,
};
