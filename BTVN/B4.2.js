
let person = {
    name: "Tuyết Minh",
    age: 14,
    city: "TP. Hồ Chí Minh"
};
console.log("Đối tượng person ban đầu:", person);

person.email = "tuyetminh@gmail.com";
console.log("Sau khi thêm thuộc tính email:", person);


delete person.age;
console.log("Sau khi xóa thuộc tính tuổi:", person);