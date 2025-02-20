/* this called rest operator ...num1 
  which will handle more then one value
*/
function CalculatePriceFromCard(...num1)
{
   return num1;
}
//console.log(CalculatePriceFromCard(10,20,30,40));

const user = {
   name:"krishna",
   age: 1,
   welcomeMessage: function()
   {
      console.log(`Welcome ${this.name}`);
      console.log(this);
   }
}
//console.log(this);
//user.welcomeMessage();

function chai ()
{
   this.lastName ="God";
   const user = {
      name:"krishna",
      age: 1,
      welcomeMessage: function()
      {
         console.log(`Welcome ${this.name}`);
      }
   }
   console.log(this.lastName);
   user.welcomeMessage()
}

chai();



/* ------------------------------------- Arrow Function -----------------------------*/

const ChaiWithArrow = () =>{
   let name = "Lalit";
   console.log(this.name);
   
}
//ChaiWithArrow();


