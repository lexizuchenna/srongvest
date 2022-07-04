const moment = require('moment')
const formatDate = (date, format) => {
    return moment().fromNow(date)
}

module.exports = {
    formatDate
}