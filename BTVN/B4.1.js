
let users = [
    { id: 1, name: "An" },
    { id: 2, name: "Bình" },
    { id: 3, name: "Chí" }
];
console.log("Mảng ban đầu:", [...users]);


users.push({ id: 4, name: "Dương" });
console.log("Sau khi thêm:", [...users]);


let idToUpdate = 2;
for (let i = 0; i < users.length; i++) {
    if (users[i].id === idToUpdate) {
        users[i].name = "Bảo"; 
        break; 
    }
}
console.log("Sau khi sửa id 2:", [...users]);


let idToDelete = 3;
for (let i = 0; i < users.length; i++) {
    if (users[i].id === idToDelete) {
        users.splice(i, 1); 
        break; 
    }
}
console.log("Sau khi xóa id 3:", [...users]);