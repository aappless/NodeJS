//應該避免省略var變數，以免所有資料都存放在全域變數，造成資源的消耗
var express=require("express");
var app=express(); //產生Express Application 物件
// 建立 JSON物件 用來做為DB
// 有多種健立方式 如 var json = { "key" : "value" };
//var json = {};json.key = 'value';
//var json = {};json['key'] = 'value';
// 採用第一種


//npm install node-adodb========
const ADODB = require('node-adodb');
//連上mdb
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=chr_basic.mdb;');

//查詢mdb 並列出來看
 connection.query('select * from chr_basic')
.then(data => {
  console.log(JSON.stringify(data, null, 2)); //NULL 第二個參數有斷行的效果 //第三個參數是 tab 效果

});
//===============================


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

function listptdb(){
  var msg;
  msg='';
  for (var i = 0; i < Object.keys(ptdb).length; i++) {
    msg=msg+'<br>'+Object.keys(ptdb)[i]+':'+JSON.stringify(ptdb[Object.keys(ptdb)[i]]);
      }
   return msg;
     };  
     


//ptdb['5']={name:'萬萬芳',birth:'0800101',sex:'1'};

//ptdb.name='萬小芳';

//console.log(ptdb);
//console.log(ptdb['1']);


//這是計算物件的數量 網上抄來的 
//var count = Object.keys(myObject).length;

//console.log(Object.keys(ptdb).length ); 
//console.log(Object.keys(ptdb)[0]);//Object.values(item)[0]
//console.log(Object.values(ptdb)[0]);
// var msg1=listptdb();
// console.log(msg1);

//----------------------------------------------------------
//路徑 選擇 //當使用者連線到伺服器的根目錄 (/)時，做出回應
app.get("/",function(req,res){ 
res.send("Hello <B>WORLD</B>");
});

//查詢===============================
// http://localhost:3000/pt/1
app.get("/pt/:id", function (req, res) { //當使用者連線到伺服器的 (/pt)時，做出回應 :ID 傳參數
  var id = req.params.id;            // 建立一個變數 註：變數本身不帶型態資訊
  // 由輸入的參數取得資料 放入ID
  var msg;
  // console.log(ptdb[id].name);
  if (ptdb[id]) {
    msg = ptdb[id].name;
  } else {
    msg = '沒有找到這個編號：' + id;
  }
  res.send(msg+ '<br>'+listptdb());
});

//新增 =======================================
//http://localhost:3000/ptadd/5/萬萬芳/0800101/1
app.get("/ptadd/:id/:name/:birth/:sex", function (req, res) { //當使用者連線到伺服器的 (/pt)時，做出回應 :ID 傳參數
  var id = req.params.id;            // 建立一個變數 註：變數本身不帶型態資訊
  var  name = req.params.name; 
  var  birth=req.params.birth;
  var  sex=req.params.sex;
  // 由輸入的參數取得資料 放入ID
  var msg;
 // console.log(id);
////  console.log(name);
  if (ptdb[id]) {
    msg = ptdb[id].name;
    msg = '這個編號已經存在：'+id+'-'+ptdb[id].name;
  } else {
    ptdb[id]={name:name,birth:birth,sex:sex};  
  //  msg='新增中‧‧‧';
  msg='已新增...'+id+'-'+JSON.stringify(ptdb[id]);  
  
  }
 // res.send(msg);
  res.send(msg+ '</br>'+listptdb());
});



//刪除=========================================
// http://localhost:3000/ptdel/5
app.get("/ptdel/:id", function (req, res) { //當使用者連線到伺服器的 (/pt)時，做出回應 :ID 傳參數
  var id = req.params.id;            // 建立一個變數 註：變數本身不帶型態資訊
  // 由輸入的參數取得資料 放入ID
  var msg;

  // console.log(ptdb[id].name);
  if (ptdb[id]) {
    //msg = ptdb[id].name;
    
      msg = '已刪除:'+ptdb[id].name;
      delete ptdb[id];  

  } else {
    msg = '沒有找到這個編號：' + id;
  }
  res.send(msg+ '</br>'+listptdb());
}
);

//===================================================
//使用mdb
//http://localhost:3000/ptdb/1
app.get("/ptdb/:id", function (req, res) { //當使用者連線到伺服器的 (/ptdb)時，做出回應 :ID 傳參數
  var id = req.params.id;            // 建立一個變數 註：變數本身不帶型態資訊
  // 由輸入的參數取得資料 放入ID
  var msg;
  connection.query('select * from chr_basic where  chr_no="'+id+'"')
  .then(data => {
    //console.log(Object.keys(data).length);
    if (Object.keys(data).length=0)
    {
      res.send(沒有找到資料);
    }else 
    {
     res.send(JSON.stringify(data));
      // console.log(JSON.stringify(data)); 
    }
    
  });

});

//http://localhost:3000/ptdb/1/萬萬萬芳
app.get("/ptdb/:id/:name", function (req, res) { //當使用者連線到伺服器的 (/ptdb)時，做出回應 :ID 傳參數
  var id = req.params.id;            // 建立一個變數 註：變數本身不帶型態資訊
  // 由輸入的參數取得資料 放入ID
  var name=req.params.name;
  connection.execute('INSERT INTO chr_basic (chr_no,pat_name) VALUES( "'+id+'","'+name+'"') 
 .then(data => {
        console.log(JSON.stringify(data, null, 2));
      })
    
    
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

