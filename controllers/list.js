const productModel = require('../models/product')
const BreadcrumbModel = require('../models/category')

exports.index = (req, res, next) => {
    const id = req.params.id
    const page = req.query.page || 1
    const per_page = 5
    const sort = req.query.sort || 'commend'

    Promise.all([productModel.getProductByCategory(id, page, per_page, sort),BreadcrumbModel.getBreadcrumb(id)])
    .then(results => {
        res.locals.list = results[0].list
        res.locals.sort = sort
        res.locals.categorylId = id
        res.locals.breadcrumb = results[1]
        // res.json(res.locals)
        res.render('list')
    }).catch(err => next(err))
} 