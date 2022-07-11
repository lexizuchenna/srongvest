const Profile = require("../models/Profile");
const Fund = require("../models/Fund");

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
  console.log(fund)
  if (fund !== null) {
    return res.status(403).redirect("/users/payment/fund");
  }
  next()
};

module.exports = {
  isLoggedIn,
  isLoggedOut,
  isprofileUpdated,
  isFunded,
};
