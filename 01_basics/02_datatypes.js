/* 
Primitive data types / Value Types
string, number,boolean, null, undefined, bigint, symbol
*/

const name = "Lalit";
const age = 48;
let place ="danya";

const number =123.896;
const convertnumber = number.toFixed(2);
//console.log((typeof convertnumber));

/* answer will be 124 and it will return string
 Note: toPrecision() always used for before the .
*/
console.log(number.toPrecision(3));


/* answer will be 123.90 and it will return string 
  Note: toFixed() always used for after .
 */
  console.log(number.toFixed(2));



//console.log(`my name is ${name} and my age is ${age} and i am from ${place}` );

const myName = new String("lalit_mohan_joshi");
const myNameArray = myName.split('_');
//console.log(myNameArray)


/* 
 Non-Primitive data types / Refrence Types
 array, object, functions
*/

const heros = ["Shaktiman","Nagraj","Dogra"];

let myObje = {
    name:"lalit",
    age: 38,
}