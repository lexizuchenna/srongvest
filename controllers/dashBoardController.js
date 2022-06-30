const Users = require("../models/Users");
const Ref = require("../models/Referral");
const bcrypt = require("bcryptjs");

const viewDashboard = (req, res) => {
  const name = req.user.firstName
  res.render("dashboard/dashboardHome", { layout: "dash", name });
};
const viewFund = (req, res) => {
  res.render("dashboard/dashboardFund", { layout: "dash" });
};
const viewWithdraw = (req, res) => {
  res.render("dashboard/dashboardWith", { layout: "dash" });
};
const viewReferral = (req, res) => {
  res.render("dashboard/dashboardRef", { layout: "dash" });
};
const viewProfile = (req, res) => {
  res.render("dashboard/dashboardProf", { layout: "dash" });
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
  viewSetting,
};
