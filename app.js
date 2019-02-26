const express = require('express')
const path = require('path')
const expressTPL = require('express-art-template')
const youch = require('youch')
const favicon = require('express-favicon')

const createError = require('http-errors')
const app = express()

const middlewares = require('./middlewares')

// 处理静态资源
app.use('/', express.static(path.join(__dirname, './public')))
// 配置模板引擎
app.engine('art', expressTPL)
app.set('view engine', 'art')   // 默认处理.art而那件

// 让模板处于debug模式（不压缩）
app.set('view options', {debug: process.env.NODE_ENV ==='development'})

// 配置请求体
app.use(express.json())
app.use(express.urlencoded({ extend: false }))


// 配置自定义中间件
app.use(middlewares.global)
//定义的业务路由
app.get('/', (req, res, next) => {
    //自己创建一个服务器运行异常
    // throw new Error('服务器异常')
    // res.send('server ok')
    res.render('home')
  })

// 错误挂载中间件
app.use((req, res, next) => {
    // const error = new Error('Not Found')
    // error.status = 404
    // next(error)
    // console.log(error)
    next(createError('Not Found', 404))
})
// 错误统一处理中间件
app.use((err, req, res, next) => {
    const env = req.app.get('env')
    console.log(env)
    if (env === 'development') {
        // 输出详细错误
        // console.log(err.message)
        new youch(err, req).toHTML().then((html) => {res.send(html)})
    }else {
        const status = err.status = 404 ? 404 : 500
        res.locals.status = status
        res.render('error')
    }
})

// 监听端口
app.listen(3000, () => {
    console.log('端口3000.....')
})