// 管理所有路由
const express = require('express')
const router = express.Router()

const homeController = require('./controllers/home')

//渲染首页
router.get('/', homeController.index)



module.exports = router