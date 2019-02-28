// 管理所有路由
const express = require('express')
const router = express.Router()

const homeController = require('./controllers/home')
const listController = require('./controllers/list')

//渲染首页
router.get('/', homeController.index)
// 猜你喜欢
router.get('/like', homeController.like)

//商品列表页面
router.get('/list/:id', listController.index)


module.exports = router