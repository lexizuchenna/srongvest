const Users = require("../models/Users");
const Ref = require("../models/Referral");
const bcrypt = require("bcryptjs");
const Profile = require("../models/Profile");
const Fund = require("../models/Fund");
const Withdraw = require("../models/Withdraw");

const viewDashboard = async (req, res) => {
  const profile = await Profile.findOne({ email: req.user.email });
  const users = await Users.findOne({ email: req.user.email });
  const fund = await Fund.findOne({ email: req.user.email });
  const name = req.user.firstName;
  const openDesc = req.user.desc;
  const openAmt = users.amount;
  const revenue = users.revenue;
  const openDate = users.createdAt;
  const activePlan = profile.plan.toUpperCase();
  const amount = fund?.amount;
  const fundDesc = fund?.desc;
  const fundDate = fund?.createdAt;
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
    revenue,
    profile,
    profileDesc,
    profileAmt,
    profileDate,
    amount,
    fundDesc,
    fundDate,
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
  const fundData = await Fund.create({
    firstName: req.user.firstName,
    user: req.user.id,
    email: req.user.email,
    paymentId: req.body.walletId,
    plan: req.body.plan,
    amount: req.body.amount,
  });

  fundData.save();
  return res.status(201).redirect("/users/payment/fund");
};

//Funded View
const viewFunded = async (req, res) => {
  const fund = await Fund.findOne({ email: req.user.email });
  const amount = fund.amount;
  const btc = amount / 0.003;
  const firstName = req.user.firstName;
  const lastName = req.user.lastName;
  res.render("dashboard/funded", {
    layout: "dash",
    amount,
    btc,
    firstName,
    lastName,
  });
};

// Withdrawal Page
const viewWithdraw = async (req, res) => {
  const users = await Users.findOne({ email: req.user.email });
  const Prof = await Profile.findOne({ email: req.user.email });
  const revenue = users.revenue;
  const minAmount = Prof.min;
  console.log(Prof.min);
  res.render("dashboard/dashboardWith", { layout: "dash", revenue, minAmount });
};

// Request Withdrawal
const withdrawalRequest = async (req, res) => {
  const withdrawData = await Withdraw.create({
    user: req.user.id,
    firstName: req.user.firstName,
    email: req.user.email,
    amount: req.body.amount,
    paymentId: req.body.paymentId,
  });

  withdrawData.save();
  res.redirect('/users/payment/withdraw')
};

// Withdrawal Request View
const requestedWithdrawal = async (req, res) => {
  const withdraw = await Withdraw.findOne({ email: req.user.email });
  const firstName = req.user.firstName;
  const lastName = req.user.lastName;
  const amount = withdraw?.amount;
  const address = withdraw?.paymentId;
  res.render("dashboard/withdrawal", {
    layout: "dash",
    firstName,
    lastName,
    amount,
    address,
  });
};

const viewReferral = async (req, res) => {
  const referral = await Ref.find({refemail: req.user.email})
  res.render("dashboard/dashboardRef", { layout: "dash", referral });
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
    const Prof = await Profile.findOne({ email: req.user.email });
    let minAmount;
    if (Prof.plan === "Gold") {
      minAmount = 50000;
    }

    const updateProfile = await Profile.findOneAndUpdate(
      { email: req.user.email },
      { min: minAmount },
      { new: true }
    );
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
  withdrawalRequest,
  requestedWithdrawal,
  viewReferral,
  viewProfile,
  sendProfile,
  viewSetting,
};
