const CoinGecko = require('coingecko-api')

const CoinGeckoClient = new CoinGecko()

const viewHome = async (req, res) => {
    // let data = await CoinGeckoClient.coins.all()
    // const coinData = data.data
    // console.log(coinData[2].market_data.current_price)
    // console.log(coinData)
    res.render('public/home');
}

const viewAbout = (req, res) => { 
    res.render('public/about')
}

module.exports = {
    viewHome, viewAbout
} 