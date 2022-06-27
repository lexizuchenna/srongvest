const viewHome = async (req, res) => {
    res.render('public/home');
}

const viewRegister = (req, res) => {
    res.render('public/register')
}

module.exports = {
    viewHome, viewRegister
} 