const id = 12222;
let name ="lalit";
let email = "lalit.joshi@gmail.com";
/*
prefer not to use var
because of issues in block space and functional scope
*/
var password = "test@123";
var password ="123@test"
console.table([id,name,email,password])

let num1,num2,num3;
num1 = num2=num3=2+2;
console.log("num1 " + num1)
console.log("num2 " + num2)
console.log("num3 " + num3)