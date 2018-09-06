var express=require("express");
var app=express(); //產生Express Application 物件
// 建立 JSON物件 用來做為DB
// 有多種健立方式 如 var json = { "key" : "value" };
//var json = {};json.key = 'value';
//var json = {};json['key'] = 'value';
//採用第一種
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
    //,    diag:['DX','XX']
  },
  '3':{
    name:'萬大芳',
    birth:'0980101',
    sex:'0'
 //  ,    diag:['YY','HTY']
  },
  '4':{
    name:'萬老芳',
    birth:'0900101',
    sex:'1'
  //  ,    diag:['YY','HTY']
  }

};


//ptdb.name='萬小芳';

console.log(ptdb);
console.log(ptdb['1']);


app.get("/",function(req,res){ //當使用者連線到伺服器的根目錄 (/)時，做出回應
res.send("Hello <B>WORLD</B>");

});

app.listen(3000,function(){
console.log("伺服器已啟動 http://localhost:3000/")
});
