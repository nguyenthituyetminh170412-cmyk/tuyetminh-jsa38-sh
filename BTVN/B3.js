
let n;
do {
    n = parseInt(prompt("Mời bạn nhập vào một số nguyên dương n:"));
    if (isNaN(n) || n <= 0) {
        alert("Giá trị không hợp lệ. Vui lòng nhập lại một số nguyên lớn hơn 0!");
    }
} while (isNaN(n) || n <= 0);


let tongChan = 0;
let tongLe = 0;

for (let i = 1; i <= n; i++) {
    
    if (i % 2 === 0) {
        tongChan += i; 
    } else {
        tongLe += i;   
    }
}


console.log("Số n bạn đã nhập là: ${n}");
console.log("Tổng các số chẵn từ 1 đến ${n} là: ${tongChan}");
console.log("Tổng các số lẻ từ 1 đến ${n} là: ${tongLe}");