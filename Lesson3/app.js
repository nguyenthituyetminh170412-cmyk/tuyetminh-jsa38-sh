let x = 10;
let y = 3;
console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x - y);
console.log(x % y);
console.log(x ** y);

let a=5;
a+=10;
console.log(a);

let b="5";
console.log(b===5); // ===: so sánh kiểu dữ liệu và giá trị
//==: so sánh giá trị ko so sánh kiểu dữ liệu

let c = true;
let d = false;
console.log(c && d); // &&: và
console.log(c && true);

let e = true;
let f = false;
console.log(e || f); // ||: hoặc 
console.log(f || false);

let g = true;
let h = false;
console.log(!g); // !: khác
console.log(!h);

let l=5;
if(l>0){
    console.log("l > 0 rồi đó");
}
else if(e==0){
    console.log("l = 0 rồi đó");
}
else{
    console.log("l < 0 rồi đó");
}

let scoop = 2;
if(scoop>=5){
    console.log("Ăn nhanh lên, kem sắp tan chảy");
}
else if(scoop==3){
    console.log("Kem sắp hết");
}
else if(scoop==2){
    console.log("Lần một");
}
else if(scoop==1){
    console.log("Lần hai");
}
else if(scoop==0){
    console.log("Hết rồi");
}
else{
    console.log("Vẫn còn nhiều kem");
}

// for (thông số 1; thông số 2; thông số 3 )
// thông số 1: giá trị khởi đầu
// thông số 2: điều kiện
// thông số 3: số bước
for(let i = 1; i<=100; i++){
    console.log(i);
}

let k = 10;
for(let i=0; i<=k; i+=2){
    console.log(i);
}

let p = 1;
while(p<=50){
    console.log(p);
    p++
}

let t = 1;
do{
    console.log(t);
    t++;
}while(t<=40);

let r = 5;
let n = 8;
if (r<n){
    console.log(n);
}
else{
    console.log(r);
}

let z = -3;
let s = 5;
let u = 8;
let tich = z*s*u;
if (tich>0){
    console.log (" Dấu +")
}
else{
    console.log (" Dấu -")
}


