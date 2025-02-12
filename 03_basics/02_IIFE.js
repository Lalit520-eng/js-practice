/* Immediately Invoked Function Expression (IIFE) 
   > An IIFE is an function that is defined and exceuted immediatly after its creation.
   > It is a design pattern in JS, often used to create a new scope and avoid polluting the global namespace.
   Why use an IIFE
   1) Encapsulation: It allows you to define variables inside the function that won't leak into the global scope. 
                     This is important in larger codebases to avoid name clashes.
   2) Avoid Global Variables: Any variables declared inside the IIFE are not accessible from outside, preventing them from 
                             polluting the global namespace.
   3) One-Time Initialization: IIFEs are useful for initializing things once, such as setting up configuration, loading data,etc.
*/

(function dbContext(){
    console.log('Db Connected');
})();


(function test(name) {
    console.log(`Hello, ${name}!`);
  })("Krishna"); 

  (()=>{console.log('I am an Arrow message')})()
    
    