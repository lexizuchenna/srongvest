const express = require('express')
const router = express.Router()
const {viewHome,  viewRegister, viewLogin} = require('../controllers/publicController')


router.get('/', viewHome)
router.get('/users/register', viewRegister)
router.get('/users/login', viewLogin)

module.exports = router