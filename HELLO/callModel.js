// var counter= require('./count');

// console.log(counter(['z','a','l','Z']));

// 以上是可以執行的

// 現在由於module改成多輸出就要用以下方式

var test= require('./count');
console.log(test.counter(['z','a','l','Z']));
console.log(test.adder(2,9));
console.log(test.pi);

// 另外 也可以單獨輸出
var pi=require('./count').pi;
console.log(pi);