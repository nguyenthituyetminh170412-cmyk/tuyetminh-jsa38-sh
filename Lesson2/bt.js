let name = "nguyễn văn a";
let words = name.split(" ");

words[0] = words[0][0].toUpperCase() + words[0].slice(1); 
words[1] = words[1][0].toUpperCase() + words[1].slice(1); 


let result = words.join(" ");
console.log(result); 



const fullName = "trần b";

words = fullName.split(" "); 

let tu1 = words[0][0].toUpperCase() + words[0].slice(1); 
let tu2 = words[1][0].toUpperCase() + words[1].slice(1); 

let ketQua = tu1 + " " + tu2;
console.log("Họ và tên:", ketQua); 



