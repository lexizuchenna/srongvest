const viewHome = async (req, res) => {

    res.render('public/home');
}

const viewAbout = (req, res) => { 
    res.render('public/about')
}

module.exports = {
    viewHome, viewAbout
} 