// require 這是一個全域使用物件 是 指import 的意思，載入模組
var http = require("http");
// 下面用抄的就好了 ~
http.createServer(function(request, response) {
 // http.createServer(function(respons,request ) {
    // 收到需求時就回傳以下資料
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
   response.end();//回傳結束
}).listen(8888);  //使用port 8888 監聽
// 測試 http://localhost:8888/ 就可以了 使用ctrl+c 結束