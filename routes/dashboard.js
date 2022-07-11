const express = require("express");
const router = express.Router();

const {
  viewDashboard,
  viewFund,
  sendFund,
  viewFunded,
  viewWithdraw,
  viewReferral,
  viewProfile,
  viewSetting,
  sendProfile,
} = require("../controllers/dashBoardController");
const {
  isLoggedOut,
  isprofileUpdated,
  isFunded,
} = require("../middlewares/auth");

router.get("/dashboard", isLoggedOut, isprofileUpdated, viewDashboard);

router.get("/fund", isLoggedOut, isprofileUpdated, isFunded, viewFund);
router.post("/fund", isLoggedOut, isFunded, sendFund);
router.get("/payment/fund", isLoggedOut, viewFunded);

router.get("/withdraw", isLoggedOut, isprofileUpdated, viewWithdraw);

router.get("/referral", isLoggedOut, isprofileUpdated, viewReferral);

router.get("/profile", isLoggedOut, viewProfile);
router.post("/profile", isLoggedOut, sendProfile);

router.get("/setting", isLoggedOut, viewSetting);

module.exports = router;
