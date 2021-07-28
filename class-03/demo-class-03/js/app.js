'use strict';
console.log('The js file is connected.');


//global variable
var userPoints = 0;

alert('Hello, and welcome to the Guessing Game.');

var user = prompt('What is your name?');
var userName = user.toLowerCase();
console.log(userName);

// the user variable
// - string
// - null
// " " empty

//If the user is empty string or null, keep asking them for their name. 
// while(user === ' ' || user === null){   do something. }

//shorter version
// while(!user) {
//   user = prompt('what is your name, Please, provide it now!');
// }

//////////////////////////////////////////

//Control flow, in javascript

// if(condition){......}
// if(condition){....} else {.......}
// if(condition){.....} else if(second condition) {....} else {.....}
// if(condition){.....} else if(second condition) {....} else if (thirdCondition) {.....} else {.......}

//This is the not equals comparison operator
if(user !== 'craig'){
  console.log(user);
  alert('You are not the lower case craig we were looking for.');
}
alert('Hello, ' + userName + ' ready to play the game?');

var answer = prompt('Is my favorite food popcorn?, Please type yes or no.').toLowerCase();
console.log(answer);

//Check user input to add points for the game
if(answer === 'no' || answer === 'n' ) {
  alert('You are right popcorn is not my favorite.');
  //userPoints = userPoints + 1;
  userPoints += 1;
  console.log('this is the user point total', userPoints);
} else {
  alert('Popcorn is gross!, you get no points.');
  console.log('this is the user point total', userPoints);
}






// How long would it take to print the numbers 0 to 100 using console.log? 
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Use a loop to run code many times
console.log("While loops require a starting variable, in this case a variable set to 0");
var count = 0;

console.log("This code will run the loop as long as the variable above is less than or equal to 50");
while(count <= 50) {
  console.log('while loop count starts at 0: ',count);
  count = count + 5;
}
console.log("While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs");
// This loop counts down from 50 to 0, decreasing by -2 each time
count = 50;
while(count >= 40) {
  console.log('while loop count starts 50: ',count);
  count = count - 2;
}



















/**  multi line comment. 
while loops  will run until a condition is true or truthy, or not true

while(condition){
    has to change 
} 
var i = 0;
while(i < value){
   i += 1;
  i++;
   i = i + 1
}
do {here code runs first and always then the condition is checked. }while(condition)



for( setUP    condition  change variable){
    add code to do stuff
}
*/

for(var i = 0; i < 10; i++){
  if(i === 2){
    console.log('keep going past this number 2.');
    continue;
  }
  if(i === 4){
    console.log('this is now breaking the loop.');
    break;
  }
  console.log('the variable i: ', i);
}
// review arrays

var foodsILike = ['tatertots', 'chips', 'popcorn', 'kale'];
console.log(foodsILike);

//use a loop to traverse through an array

for(var x = 0; x < foodsILike.length; x++){
  console.log('for loop doing work ', foodsILike[x]);
}
// lots of different array methods.
foodsILike.push('swiss chard');
console.log('array push', foodsILike);

//pop  removes elements 
var popArrayElement = foodsILike.pop();
console.log('array after the pop():', foodsILike);
console.log('array pop', popArrayElement);


//shift array to remove from the front. 
var shiftArray = foodsILike.shift();
console.log('unshift of array first element', shiftArray);
console.log('shiftArray ', foodsILike);


// yes, js lets you do this (having an array of different data types). don't do it.
var mixedUpArray = ['yeehaw', 42, true, ['yo'], {}];
console.log('mixedUpArray ', mixedUpArray);

// unshift adds elements to the front of the array
foodsILike.unshift('spinach');
console.log('unshift', foodsILike);

// indexOf tells you the index of an element in the array; returns -1 if not found
let index = foodsILike.indexOf('popcorn');
console.log(index);

// on your own: check out splice


// Evaluating Comparisons
// Type coercion, weak typing, truthy/falsy
// falsy values are :
// - 0
// - null
// - NaN
// - ''
// - undefined
// - false


// truthy values. ==== everything else.

// Logical Operators
// - (craig === 'instructor' || 'teacher')    => will not Work

// - (craig === 'instructor' || craig === 'teacher')

// Comparison  operators : Comparison Operator

// - < less than.
// - > great than
// - <= less than or equal to
// - >= great then or equal to

// - == kinda equals
// - != kinda not equals
//stictly sure data type is correct. 
// - === strictly equals
// - !== strictly not equals


