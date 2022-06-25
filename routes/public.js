const express = require('express')
const router = express.Router()
const {viewHome, viewAbout} = require('../controllers/publicController')


router.get('/', viewHome)
router.get('/about', viewAbout)

module.exports = router