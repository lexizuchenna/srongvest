const express = require('express')
const router = express.Router()
const { viewDashboard, viewFund, viewWithdraw, viewReferral, viewProfile, viewSetting } = require('../controllers/dashBoardController')

router.get('/dashboard', viewDashboard)
router.get('/fund', viewFund)
router.get('/withdraw', viewWithdraw)
router.get('/referral', viewReferral)
router.get('/profile', viewProfile)
router.get('/setting', viewSetting)

module.exports = router
