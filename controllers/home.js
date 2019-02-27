const settingsModel = require('../modules/settings')

exports.index = (req, res, next) => {
    // throw new Error('服务器异常')
    settingsModel.getSliders()
        .then(data => {
            res.locals.sliders = data
            // res.json(data)
            res.render('home')
        })
        .catch(err => next(err))
}