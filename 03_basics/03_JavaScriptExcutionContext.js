/*  JavaScript Execution Context (means whatever file we created how JS will run it.)
     1) Global Execution Context (where we use this keyword to access variable).
     2) Function Execution Context

     How JavaScript code Execute:
      1st Phase: Memory Creation
      2nd Phase: Execution Phase 

*/

/* 
1) Global Exceution where this will come
2) Memory Pahse 
  where:
    > val1 : undefined
    > val2 : undefined
    > AddNum : defination
    > result1 : undefined
    > result2 : undefined
3) Execution Phase
   > val1 : 10,
   > val2 : 20,
   > AddNum: [new variable environment + Execution Thread ]

*/

let val1 =10;
let val2 =20;

function AddNum (num1,num2)
{
    return num1 + num2;
}

let result1 = AddNum(val1,val2);
let result2 = AddNum(30,40)