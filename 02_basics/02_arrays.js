const marvel_heroes = ["Ironman","Thor","Spiderman"];
const dc_heroes = ["Superman","Flash","Batman"];

const all_heroes1 = marvel_heroes.concat(dc_heroes);
//const all_heroes = [...marvel_heroes,...dc_heroes]
//console.log(all_heroe1s);
//console.log(typeof all_heroes1);

/* example of foreach in array */
marvel_heroes.forEach((items)=>{
   //console.log(items);
})

/* example of filter in array */
const myNumbers = [1,2,3,4,5,6,7,8];
/* this is called explicitly so we don't need to use return keyword */
let result = myNumbers.filter((num)=> num%2==0)
/* this is called implicitly where we need to use return keyword */
let result1 = myNumbers.filter((num)=> {
    return num%2==0;
})
//console.log(result1);

const newNumbers = [];
myNumbers.forEach( (num) => {
  if(num > 4)
  {
    newNumbers.push(num);
  }
} )
//console.log(newNumbers);

/* Example of map function in Array */
 
let result3 = myNumbers.map( (num)=> num *10 ).filter( (num)=>num % 2 === 0 )
//console.log(result3);

/* Example of reduce function in Array */

const marks =  [1,2,3,4];
const passingMarks = 0;
const somewithpassingmarks = marks.reduce(
    (accumulator,currentvalue) => accumulator + currentvalue, passingMarks
);
console.log(somewithpassingmarks);




