const Profile = require("../models/Profile");

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

module.exports = {
  isLoggedIn,
  isLoggedOut,
  isprofileUpdated,
};
