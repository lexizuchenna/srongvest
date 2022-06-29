const express = require('express')
const router = express.Router()
const { viewDashboard } = require('../controllers/dashBoardController')

router.get('/dashboard', viewDashboard)

module.exports = router
