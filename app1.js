const path = require('path')

const express = require('express')
const expressTPL = require('express-art-template')
const youch = reqquire('youch')
const favicon = require('express-facicon')
const createError = require('http-errors')

const app = express()

app.listen(3001, () => console.log('服务器3001， 已开启'))

app.use('/', express.static(path.join(__dirname, 'public')))

app.engine('art', expressTPL)
app.set('view engine', 'art')

app.set('view options', {debug: process.env.NODE_ENV === 'development'})

app.use(express.json()) //处理json格式的数据
app.use(express.urlencoded({extends: false})) //处理url形式的传参 application/x-www-form-urlencoded

app.use(favicon(path.join(__dirname,'./favicon.ico')))

app.get('/', (req, res, next) => {
    //自己创建一个服务器运行异常
    throw new Error('服务器异常')
    res.send('server ok')
  })