const settingsModel = require('../modules/settings')

exports.index = (req, res, next) => {
    // throw new Error('服务器异常')
    res.render('home')
}