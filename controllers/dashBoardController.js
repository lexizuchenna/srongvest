const Users = require("../models/Users");
const Ref = require("../models/Referral");
const bcrypt = require("bcryptjs");

const viewDashboard = (req, res) => {
  res.render("dashboard/dashboardHome", { layout: "dash" });
};

module.exports = {
  viewDashboard,
};
