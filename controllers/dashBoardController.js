const Users = require("../models/Users");
const Ref = require("../models/Referral");
const bcrypt = require("bcryptjs");
const Profile = require("../models/Profile");
const Fund = require("../models/Fund");

const viewDashboard = async (req, res) => {
  const profile = await Profile.findOne({ email: req.user.email });
  const users = await Users.findOne({ email: req.user.email });
  const name = req.user.firstName;
  const openDesc = req.user.desc;
  const openAmt = users.amount;
  const openDate = users.createdAt;
  const activePlan = profile.plan.toUpperCase();
  const profileDesc = profile?.desc;
  const profileAmt = profile?.amount;
  const profileDate = profile?.createdAt;
  console.log(profile.desc);
  res.render("dashboard/dashboardHome", {
    layout: "dash",
    name,
    activePlan,
    openDate,
    openDesc,
    openAmt,
    profile,
    profileDesc,
    profileAmt,
    profileDate,
  });
};

// Fund Page
const viewFund = async (req, res) => {
  const profile = await Profile.findOne({ email: req.user.email });
  const activePlan = profile.plan;
  res.render("dashboard/dashboardFund", { layout: "dash", activePlan });
};

// Fund Request
const sendFund = async (req, res) => {
  const fund = Fund.findOne({ email: req.user.email });

  const fundData = await Fund.create({
    firstName: req.user.firstName,
    user: req.user.id,
    email: req.user.email,
    paymentId: req.body.walletId,
    plan: req.body.plan,
    amount: req.body.amount,
  });

  fundData.save();
  return res.status(201).redirect("/users/fund");
};

//Funded View
const viewFunded = async (req, res) => {
  res.render("dashboard/funded", { layout: "dash" });
};

// Withdrawal Page
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
  const activePlan = profile?.plan.toUpperCase();
  console.log(profile);
  res.render("dashboard/dashboardProf", {
    layout: "dash",
    firstName,
    lastName,
    phoneNumber,
    walletId,
    country,
    activePlan,
    profile,
  });
};

// Profile Request
const sendProfile = async (req, res) => {
  const profile = await Profile.findOne({ email: req.user.email });
  const firstName = req.user.firstName;
  const lastName = req.user.lastName;

  if (profile !== null) {
    return res.redirect("/users/dashboard");
  } else if (req.body.plan === "Select Plan") {
    console.log("Must Select Plan");
    res.render("dashboard/dashboardProf", {
      layout: "dash",
      firstName,
      lastName,
    });
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
  sendFund,
  viewFunded,
  viewWithdraw,
  viewReferral,
  viewProfile,
  sendProfile,
  viewSetting,
};
