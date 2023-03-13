// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 User model
const User = require('../../models/user')

//設定路由：接住表單輸入之原始網址，並將頁面導向顯示縮短網址
router.post('/', (req, res) => {
  const { email, password } = req.body

  //搜尋資料庫是否有先前已產生過該網址之短網址
  User.findOne({ email, password })
    .lean()
    .then(user => {
      if (user) {
        return res.render('show', { firstName: user.firstName })
      } else {
        User.findOne({ email })
          .lean()
          .then(user => {
            if (user) {
              return res.render('passwordwrong')
            } else {
              return res.render('notfound', { email })
            }
          })
      }
    })
})

// 匯出路由模組
module.exports = router