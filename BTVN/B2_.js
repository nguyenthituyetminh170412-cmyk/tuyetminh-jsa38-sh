
let str = "ahaha ahihi hihi haha";
let strAppend = str + " rất thú vị!"; 
let strSub = str.substring(4, 12); 
let strLength = str.length; 

console.log("Chuỗi sau nối:", strAppend);
console.log("Chuỗi cắt được:", strSub);
console.log("Độ dài chuỗi gốc:", strLength);


let userInput = prompt("Mời bạn nhập một câu bất kỳ:");
if (userInput) {
    console.log("Chuỗi in hoa:", userInput.toUpperCase());
}


let name = "Tuyết Minh"; 
let age = 14; 
console.log("Tên bạn là ${name} và bạn ${age} tuổi.");


let longSentence = prompt("Nhập một câu để đếm ký tự:");
if (longSentence !== null) {
    let count = longSentence.length;
    console.log("Số ký tự trong câu là:", count);
}