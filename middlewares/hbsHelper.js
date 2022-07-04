const moment = require('moment')
const formatDate = (date) => {
    return moment(date, 'DD-MM-YYYY, h: mm').format('DD-MM-YYYY, h: mm')
}

module.exports = {
    formatDate
}