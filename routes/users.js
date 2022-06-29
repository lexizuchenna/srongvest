const express = require('express')
const router = express.Router()
const {validateUser} = require('../middlewares/userValidator')
const {login,  register, logout} = require('../controllers/usersController')



router.post('/register', validateUser, register)
router.post('/login', login)
router.post('/logout', logout)

module.exports = router