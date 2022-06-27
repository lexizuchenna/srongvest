const express = require('express')
const router = express.Router()
const {viewHome,  viewRegister} = require('../controllers/publicController')


router.get('/', viewHome)
router.get('/users/register', viewRegister)

module.exports = router