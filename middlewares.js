const configs = require('./configs')

exports.global = (req, res, next) => {
    res.locals.site = configs.site
    next()
}