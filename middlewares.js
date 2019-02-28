const configs = require('./configs')
const categoryModel = require('./models/category')

exports.global = (req, res, next) => {
    res.locals.site = configs.site

    if (res.app.locals.categoryList) {
        res.locals.categoryList = res.app.locals.categoryList
        next()
    } else {
        categoryModel.getCategory().then(data => {
            res.app.locals.categoryList = data
            res.locals.categoryList = data
            next()
        }).catch(err => next(err))
    }

}