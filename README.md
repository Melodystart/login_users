1. 功能描述 (features)：   

使用者輸入與資料庫相符之帳號及密碼，即可登入網頁

2. 安裝與執行步驟 (installation and execution)：   

． 將本專案clone至本機位置   
  git clone https://github.com/Melodystart/login_users

． cd進入至專案資料夾url_shortener，並執行以下安裝套件及執行程式指令   
  npm install //安裝 npm 套件   
  npm i express //安裝 express 套件   
  npm install -g nodemon //安裝 nodemon   
  npm i express-handlebars //安裝 handlebars   
  npm install dotenv --save //安裝 dotenv

． 請自行新增.env檔案並將以下資訊儲存於檔案中    
  MONGODB_URI= "您的MongoDB連線資訊"

． 啟動伺服器  (執行程式指令)  
  nodemon app.js

3. 環境建置與需求 (prerequisites)：   

  bootstrap: ^5.2.3,   
  express: ^4.18.2,   
  express-handlebars: ^6.0.7   
  mongoose: ^7.0.0  
  dotenv: ^16.0.3