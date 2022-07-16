const express = require('express')
const router = express.Router()
const {validateUser} = require('../middlewares/userValidator')
const {login,  register, logout, log} = require('../controllers/usersController')



router.post('/register', validateUser, register)
router.post('/login', login, log)
router.get('/logout', logout)

module.exports = router