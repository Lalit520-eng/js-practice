const obj1 ={1:"a",2:"b",3:"c"};
const obj2 = {4:"aa",5:"bb",6:"cc"};
const obj3 = {...obj1,...obj2};
// console.log(obj3);

const tinderUser = {
    id:123,
    name:"Krishana",
    isLoggedIn : false
}

//console.log(tinderUser);
/* 
  Objects.keys() method used for convert object into array and get keys from the objects
*/

// const getIdFromObject = Object.keys(tinderUser);
// console.log(getIdFromObject);
// console.log(`Id from the object ${getIdFromObject}`);

// const getValueFromObject = Object.values(tinderUser);
// console.log(`value from the Object ${getValueFromObject}`);

console.log(tinderUser);
// DeStructuring
const {name} = tinderUser;
console.log(name);





