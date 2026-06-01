let original = {
    name: "Bob",
    age: 30 ,
};
let coppyOriginal = Object.assign({},original); // coppy đối tượng
coppyOriginal.name = "Charlie";// đổi tên đối tượng coppy
// in ra
console.log(original);
console.log(coppyOriginal);