let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

let newDate = new Date();
let timezone = newDate.toLocaleString('en-US', { timeZoneName: 'short' }).split(' ')[2];
console.log(timezone);
let timezoneFullName = new Intl.DateTimeFormat('en-US', { timeZoneName: 'long' }).format(newDate);
console.log(timezoneFullName);
//  console.log(newDate.getMonth());
//  console.log(newDate.getMonth()+1);

