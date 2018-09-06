//應該避免省略var變數，以免所有資料都存放在全域變數，造成資源的消耗
var express=require("express");
var app=express(); //產生Express Application 物件
// 建立 JSON物件 用來做為DB
// 有多種健立方式 如 var json = { "key" : "value" };
//var json = {};json.key = 'value';
//var json = {};json['key'] = 'value';
// 採用第一種
var ptdb={
  '1':{
    name:'萬小芳',
    birth:'1000101',
    sex:'0'
   // ,  diag:['DM','HTM']
  },
  '2':{
    name:'萬中芳',
    birth:'0990101',
    sex:'0'

  },
  '3':{
    name:'萬大芳',
    birth:'0980101',
    sex:'0'

  },
  '4':{
    name:'萬老芳',
    birth:'0900101',
    sex:'1'
  }

};


//ptdb.name='萬小芳';

//console.log(ptdb);
//console.log(ptdb['1']);

//路徑 選擇 //當使用者連線到伺服器的根目錄 (/)時，做出回應
app.get("/",function(req,res){ 
res.send("Hello <B>WORLD</B>");
});

app.get("/pt/:id",function(req,res){ //當使用者連線到伺服器的 (/pt)時，做出回應 :ID 傳參數
    var id=req.params.id;            // 建立一個變數 註：變數本身不帶型態資訊
          // 由輸入的參數取得資料 放入ID
    var msg;

   // console.log(ptdb[id].name);
if (ptdb[id]){
    msg=ptdb[id].name;
}else
{
    msg='沒有找到這個編號：'+id;
}
res.send(msg);
 
});



app.listen(3000,function(req,res){
console.log("伺服器已啟動 http://localhost:3000/")
});


//cd..
//git add .
//git commit -m -a
//git push  
//在不同台電腦 如檔案不同步 先 git pull 將他拉下來..
// git push origin master  修改過上傳

