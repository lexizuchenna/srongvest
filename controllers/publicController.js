const viewHome = async (req, res) => {
    res.render('public/home');
}

const viewRegister = (req, res) => {
    res.render('public/register')
}

const viewLogin = (req, res) => {
    res.render('public/login')
}

module.exports = {
    viewHome, viewRegister, viewLogin
} 