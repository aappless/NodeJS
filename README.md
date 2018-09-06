# NodeJS
Learn NODE JS 
要上傳檔案 在cmd 要做三件事 

1.git add --all 或 是 git add "httpserver.js"

2.git commit -m "httpserver.js" , git commit -m --all

3.git push

https://tortoisegit.org/download/


安裝 EXPRESS 
1. 建立一個目錄 來建立  (目錄名和套件名不能相同例EXPRESS)

例如 MD TEST

     cd TEST
     
2.在DOS下執行      

     NPM  init 
     
     以用預設值 (直接按下 ENTER)
     
3.正式安裝套件 save it in the dependencies list express 好像要小寫

      npm install express --save 
     
4.然後就可以 在這個目錄下 寫程式 在index.js (要自已寫啦...COPY其他人的也可以喔)

--例如以下程式碼-------------------------

var express = require('express');

var app = express();


app.get('/', function (req, res) {

   res.send('Hello World');
   
})

var server = app.listen(8081, function () {

   var host = server.address().address
   
   var port = server.address().port
   
   
   console.log("Example app listening at http://%s:%s", host, port)
   
})
 -----------------------------------
 執行  >touch .gitignore 會產生 .gitignore 檔案 再編輯寫 就可以 設定不上傳的檔案
 
 參考檔 https://github.com/github/gitignore     
 
 DEBUG NDB 的安裝
 
 >npm install --global ndb
  
     

