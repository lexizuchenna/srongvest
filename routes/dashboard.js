const express = require("express");
const router = express.Router();

const {
  viewDashboard,
  viewFund,
  sendFund,
  viewFunded,
  viewWithdraw,
  withdrawalRequest,
  viewReferral,
  viewProfile,
  viewSetting,
  sendProfile,
  requestedWithdrawal,
} = require("../controllers/dashBoardController");
const {
  isLoggedOut,
  isprofileUpdated,
  isFunded,
  withdrawal,
  isWithdrawalRequested,
} = require("../middlewares/auth");

router.get("/dashboard", isLoggedOut, isprofileUpdated, viewDashboard);

router.get("/fund", isLoggedOut, isprofileUpdated, isFunded, viewFund);
router.post("/fund", isLoggedOut, isFunded, sendFund);
router.get("/payment/fund", isLoggedOut, viewFunded);

router.get(
  "/withdraw",
  isLoggedOut,
  isprofileUpdated,
  isWithdrawalRequested,
  viewWithdraw
);
router.post("/withdraw", withdrawal, withdrawalRequest);
router.get("/payment/withdraw", requestedWithdrawal);

router.get("/referral", isLoggedOut, isprofileUpdated, viewReferral);

router.get("/profile", isLoggedOut, viewProfile);
router.post("/profile", isLoggedOut, sendProfile);

router.get("/setting", isLoggedOut, viewSetting);
router.post()

module.exports = router;
