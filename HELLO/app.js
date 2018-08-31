// Shift + Alt + F 快速美化程式碼
// 補充：VSCode 設定擋裡，有一個 editor.formatOnSave 可以設定成  true 這樣會在每次存檔時，自動執行自動排版功能
//  CTRL+/ 

console.log("Hello world");
setTimeout(() => {
    console.log("3 sec")
}, 300);
// 以下是每隔2 秒就輸出
// setInterval(function(){
//     console.log("2 sec");
// },2000)
console.log(__dirname); //顯示 當前目錄
console.log(__filename); //顯示 當前檔名
// 變數
var time = 0;
//timer=物件?
//每2秒就跑一次
var timer = setInterval(function () {
    time += 2;
    console.log(time + " seconds have passed")
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000

)
