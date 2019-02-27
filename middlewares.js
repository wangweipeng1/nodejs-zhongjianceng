const configs = require('./configs')
const categoryModel = require('./models/category')

exports.global = (req, res, next) => {
    res.locals.site = configs.site
    categoryModel.getCategory().then(data => {
        res.locals.categoryList = data
        next()
    }).catch(err => next(err))
}