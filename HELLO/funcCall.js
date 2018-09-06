// 函式呼叫函式
function callFunc(xxx) //這裏可用fun 來記 測試 我用xxx  來確認 是否有限定字
{
    xxx();   //這應該 是 javascript 的特性 
             //不去定義 傳入值，在使用時才 會做型別的定義or 自動轉換
}

function callFunc1(xxx,yyy) 
{
    xxx(yyy);   
}



function sayhi(name){
    console.log("HI! "+name);
}

// 函式 的另一種寫法
var saybye=function (name){
    console.log(name+"BYE");
}


function sayHELLO(){console.log("hello");}


//callFunc(sayhi); //將函式加了傳入值 所以這一行就會出錯
callFunc1(sayhi,"kitty");
//也可用以下這種寫法 ，很常見 ，不去定義 函式 直接 就將呼叫的函式寫在裏面 
//由 值man 代入
callFunc1(function(name) 
{
    console.log(name+' HELLO~ ');  
},' MAN '
);