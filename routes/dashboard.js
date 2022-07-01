const express = require("express");
const router = express.Router();

const {
  viewDashboard,
  viewFund,
  viewWithdraw,
  viewReferral,
  viewProfile,
  viewSetting,
  sendProfile,
} = require("../controllers/dashBoardController");
const { isLoggedOut, isprofileUpdated } = require("../middlewares/auth");

router.get("/dashboard", isLoggedOut, isprofileUpdated, viewDashboard);

router.get("/fund", isLoggedOut, isprofileUpdated, viewFund);

router.get("/withdraw", isLoggedOut, isprofileUpdated, viewWithdraw);

router.get("/referral", isLoggedOut, isprofileUpdated, viewReferral);

router.get("/profile", isLoggedOut, viewProfile);
router.post("/profile", isLoggedOut, sendProfile);

router.get("/setting", isLoggedOut, viewSetting);

module.exports = router;
