// 模組，模塊，module
// 將函式使用var 方式來定義
var counter=function(arr){
    return "陣列元素數量： "+arr.length; 
}
//陣列定〔,,〕以中括號和 ，來分 
// console.log(counter(['1','a','x']));

var adder=function(a,b){
    return `二數相加值： ${a+b}`
}
//${a+b} 是JAVA的格式化輸出 會將大括號裏的東西 replace 注意 要用` 不是用'
//$ 的用法 是取得 物件，函數，在這裏 就是取得 a b 相加值 {}=>格式化輸出 

var pi=3.14
//將 這個函式 輸出(暴露出來Ｆ) 
 //module.exports=counter;  這個語法只能輸出一個，由於要輸出多個 改成以下語法
 //這種寫法 是使用物件的方式 輸出
//  module.exports.counter=counter;
//  module.exports.adder=adder;
//  module.exports.pi=pi;

// 另也可用以下寫法
module.exports={
counter:counter,
adder:adder,
pi:pi
}

