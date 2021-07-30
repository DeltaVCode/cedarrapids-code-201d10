'use strict';
console.log('connected');

function lotteryNumberPicker() {
  //Start by creating an Array for the numbers
  let lotteryArray = [];
  //Set the first number in the array to be 10
  lotteryArray[0] = 10;
  console.log('asign value to array index 0');
  //run 5 times to get a random number
 
  for(let i = 0; i < 5; i++){
  //random generated number.
  // lotteryArray[i] = Math.ceil(Math.random() * 99);
  //A method on arrays that allows us to put a value on the end of arrays is called push();
    lotteryArray.push(Math.round(Math.random() * 99));
  }
  console.log(lotteryArray);
  //Pick one number and return it.
  return lotteryArray;
}
lotteryNumberPicker();



function lotteryNumberPickerTwo(){
  let lotteryArray = [];
  lotteryArray[0] = 10;
  for(let i = 0; i < 5; i++){
    lotteryArray[i] = Math.ceil(Math.random() * 99);
  }
  return lotteryArray;
}
lotteryNumberPickerTwo();





function lotteryNumbers(quantity, lotteryMax){
  console.log('should be lotteryQuantity', quantity);
  let lotteryArray = [];
  for(let i = 0; i < quantity; i++){
    console.log(i);
    lotteryArray.push(Math.ceil(Math.random() * lotteryMax));
  }
  console.log(lotteryArray);
  return lotteryArray;
}






let lotteryQuantity = Number(prompt('How many numbers would you like?'));
let lotteryMax = Number(prompt('What is the Max amount per number?'));


alert(lotteryNumbers(lotteryQuantity, lotteryMax));
