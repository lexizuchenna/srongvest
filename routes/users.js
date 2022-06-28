const express = require('express')
const router = express.Router()
const {validateUser} = require('../middlewares/userValidator')
const {login,  register} = require('../controllers/usersController')



router.post('/register', validateUser, register)
router.post('/login', login)

module.exports = router