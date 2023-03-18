// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 User model
const User = require('../../models/user')
const cookieParser = require('cookie-parser');
router.use(cookieParser());

//設定路由：接住輸入之帳密
router.post('/', (req, res) => {
  const { email, password } = req.body

  //搜尋資料庫是否有先前已註冊之帳密
  User.findOne({ email, password })
    .lean()
    .then(user => {
      if (user) {
        //登入後, 先清除之前的cookie
        for (const key in req.cookies) { res.clearCookie(key) }
        res.cookie(user.firstName, user._id) //若登入成功, 植入cookie
        return res.render('show', { firstName: user.firstName })

      } else {

        User.findOne({ email })  //若帳密比對失敗，確認是否為信箱對密碼錯
          .lean()
          .then(user => {
            if (user) {
              return res.render('passwordwrong')
            } else {              //若信箱錯誤，則顯示信箱不存在
              return res.render('notfound', { email })
            }
          })
      }
    })
})

// 匯出路由模組
module.exports = router