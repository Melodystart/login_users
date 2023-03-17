// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 User model
const User = require('../../models/user')

// 設定路由：首頁
router.get('/', (req, res) => {
  res.render ('index')
})

// 匯出路由模組
module.exports = router