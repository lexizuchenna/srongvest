const express = require("express");
const router = express.Router();

const {
  viewDashboard,
  viewFund,
  viewWithdraw,
  viewReferral,
  viewProfile,
  viewSetting,
} = require("../controllers/dashBoardController");
const { isLoggedOut } = require("../middlewares/auth");

router.get("/dashboard", isLoggedOut, viewDashboard);
router.get("/fund", isLoggedOut, viewFund);
router.get("/withdraw", isLoggedOut, viewWithdraw);
router.get("/referral", isLoggedOut, viewReferral);
router.get("/profile", isLoggedOut, viewProfile);
router.get("/setting", isLoggedOut, viewSetting);

module.exports = router;
