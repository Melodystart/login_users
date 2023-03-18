// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 User model
const User = require('../../models/user')
const cookieParser = require('cookie-parser');
router.use(cookieParser());

// 設定路由：首頁
router.get('/', (req, res) => {
  //若從cookie可辨認出user身分，則無需再請user輸入帳密登入
  User.findOne({ firstName: Object.keys(req.cookies) })
    .lean()
    .then(user => {
      if (user) {
        res.render('show', { firstName: user.firstName })
      } else {
        res.render('index')
      }
    })
})

//若user選擇登出，則將user的cookie標示移除，並返回首頁
router.get('/logout', (req, res) => {
  User.findOne({ firstName: Object.keys(req.cookies) })
    .lean()
    .then(user => {
      if (user) {
        res.clearCookie(user.firstName)
        res.redirect('/')
      }
    })
})

// 匯出路由模組
module.exports = router