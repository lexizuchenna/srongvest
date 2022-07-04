const Users = require("../models/Users");
const Ref = require("../models/Referral");
const bcrypt = require("bcryptjs");
const Profile = require("../models/Profile");

const viewDashboard = async (req, res) => {
  const profile = await Profile.findOne({ email: req.user.email });
  const users = await Users.findOne({ email: req.user.email });
  const name = req.user.firstName;
  const openDesc = req.user.desc;
  const openAmt = users.amount;
  const openDate = users.createdAt;
  const activePlan = profile.plan;
  res.render("dashboard/dashboardHome", {
    layout: "dash",
    name,
    activePlan,
    openDate,
    openDesc,
    openAmt,
  });
};
const viewFund = async (req, res) => {
  const profile = await Profile.findOne({ email: req.user.email });
  const activePlan = profile.plan;
  res.render("dashboard/dashboardFund", { layout: "dash", activePlan });
};
const viewWithdraw = (req, res) => {
  res.render("dashboard/dashboardWith", { layout: "dash" });
};
const viewReferral = (req, res) => {
  res.render("dashboard/dashboardRef", { layout: "dash" });
};

// View Profile
const viewProfile = async (req, res) => {
  const profile = await Profile.findOne({ email: req.user.email });
  const firstName = req.user.firstName;
  const lastName = req.user.lastName;
  const phoneNumber = profile?.phoneNumber;
  const walletId = profile?.walletId;
  const country = profile?.country;
  const activePlan = profile?.plan;
  console.log(profile);
  res.render("dashboard/dashboardProf", {
    layout: "dash",
    firstName,
    lastName,
    phoneNumber,
    walletId,
    country,
    activePlan,
  });
};

// Profile Request
const sendProfile = async (req, res) => {
  const profile = await Profile.findOne({ email: req.user.email });
  if (profile !== null) {
    return res.redirect("/users/dashboard");
  } else {
    const userProfile = await Profile.create({
      user: req.user.id,
      email: req.user.email,
      phoneNumber: req.body.phoneNumber,
      walletId: req.body.walletId,
      country: req.body.country,
      plan: req.body.plan,
    });

    userProfile.save();
    return res.status(201).redirect("/users/dashboard");
  }
};

const viewSetting = (req, res) => {
  res.render("dashboard/dashboardSet", { layout: "dash" });
};

module.exports = {
  viewDashboard,
  viewFund,
  viewWithdraw,
  viewReferral,
  viewProfile,
  sendProfile,
  viewSetting,
};
