let danhSachHocSinh = ['An', 'Bình', 'Châu'];
for(let i = 0; i<danhSachHocSinh.length; i++){
    console.log(danhSachHocSinh[i]);
}

let arr =[1,2,3,4];
arr.push(5,6,7,8,9,10);
console.log(arr);

let a = [1,2,3,4,5];
a.splice(0, 1, "Phần tử mới"); 
console.log(a);
a[4] = "Giá trị mới"; 
console.log(a); 
a.splice(2,1);// xóa (start, deleteCount)
console.log(a);

// tìm index của giá trị
const fruits = ['apple', 'banana', 'orange', 'mango'];
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('mango'));
console.log(fruits.indexOf('grape')); // k tìm thấy thì index là -1
 
let person ={
    name: 'Alice',
    age: 25,
}
console.log(person.name);
console.log(person['age']);
for(let key in person){
    console.log(key+':'+person[key]);
}
person.gender = 'female';
person['occupation'] = 'developer';
console.log(person);
if('age' in person){ // tìm kiếm
    console.log("Key 'age' tồn tại trong obj person")
}
delete person.age; // delete
console.log(person);

let hocSinh = [
    {ten: 'An', tuoi: 15, lop: '10a1'}, 
    {ten: 'Minh', tuoi: 16, lop: '10a12'}, 
    {ten: 'Ngoc', tuoi: 16, lop: '10a12'}, 
];
hocSinh.push({ten: 'Dung', tuoi: 17, lop: '11a3'});
console.log(hocSinh); 
hocSinh[1].tuoi = 17;
console.log(hocSinh);
hocSinh.splice(0,1);
console.log(hocSinh);

