'use strict';
console.log('app js is connected');




//6. count initial images that are shown.


//global variables
let imageElements = document.getElementsByTagName('img');

let pizzaIndex1 = 0;
let pizzaIndex2 = 1;
let rounds = 5;
let allPizzas = [];

//Constructor function
function Pizza(name, imageURL, timesClicked, timesShown){
  this.name = name;
  this.imageURL = imageURL;

  //Add persistence./////////////////////
  if(timesClicked){
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }
  if(timesShown){
    this.timesShown = timesShown;
  } else {
    this.timesShown = 0;
  }
  allPizzas.push(this);
}


console.log(allPizzas);

//populate chart with object data.
function getPizzaArray(nameOfThePropertyIWant){
  let answer = [];
  for(let i = 0; i < allPizzas.length; i++){
    answer[i] = allPizzas[i][nameOfThePropertyIWant];
  }
  console.log(answer);
  return answer;
}




//is there local storage if there is lets take the local storage and make them pizza objects and then add the vote count to our object after we run them back through our constructor function.


let savedPizzaString = localStorage.getItem('savedPizza');
// console.log('this is the objects in string form ', savedPizzaString);



if(savedPizzaString){
  // parse our string into object
  let arrayOfNotPizzaObject = JSON.parse(savedPizzaString);
  console.log('if condition what is our type ',arrayOfNotPizzaObject);
  //once we have object we are going to run them through our constructor function so that they are Pizza objects.
  for(let j = 0; j < arrayOfNotPizzaObject.length; j++){
    new Pizza(
      arrayOfNotPizzaObject[j].name,
      arrayOfNotPizzaObject[j].imageURL,
      arrayOfNotPizzaObject[j].timesClicked,
      arrayOfNotPizzaObject[j].timesShown
    );
  }
} else {
  // actually create our Pizza's
  new Pizza('New York Thin', 'images/newYorkPizza.jpeg');
  new Pizza('Detroit Style', 'images/sgDansHtossedMeatLovPizza.jpg');
  new Pizza('Brick Oven Pizza', 'images/brickOvenPizza.jpeg');
  new Pizza('Calzone', 'images/calzonePizza.jpeg');
  new Pizza('Chicago Deep Dish', 'images/chicagoPizza.jpeg');
  new Pizza('Chicago Pizza & Oven Grinder', 'images/cpoGinderPizza.jpeg');
  new Pizza('Detroit Style', 'images/detroitPizza.jpeg');
  new Pizza('Papa Vito\'s Thin', 'images/mwDeluxePizzaThinCrust.jpg');
}
allPizzas[0].timesShown = 1;
allPizzas[1].timesShown = 1;
















let totalClicks = 0;

function imageWasClicked(event){
  //count total clicks
  totalClicks++;

  //what was clicked on and lets increment the count for clicked on.
  if(event.srcElement.id === '1'){
    allPizzas[pizzaIndex1].timesClicked++;
  } else if(event.srcElement.id === '2'){
    allPizzas[pizzaIndex2].timesClicked++;
  }

  //choose new images to render from click to click
  let nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
  let nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);

  console.log('next pizza index one from random ',nextPizzaIndex1);


  console.log('pizza Index at 1 currently', pizzaIndex1);
  while(nextPizzaIndex1 === pizzaIndex1 || nextPizzaIndex2 === nextPizzaIndex1){
    console.log('next pizza index one inside while loop ',nextPizzaIndex1);

    nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
  }
  while(nextPizzaIndex2 === pizzaIndex2 || nextPizzaIndex2 === nextPizzaIndex1){
    nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
  }
  //set up a ref to the pizza index array
  pizzaIndex1 = nextPizzaIndex1;
  pizzaIndex2 = nextPizzaIndex2;
  console.log('now the pizza Index at 1 after new assignment', pizzaIndex1);


  //update the image array positions 0 and 1 with the new pictures url
  imageElements[0].src = allPizzas[pizzaIndex1].imageURL;
  allPizzas[pizzaIndex1].timesShown++;

  imageElements[1].src = allPizzas[pizzaIndex2].imageURL;
  allPizzas[pizzaIndex2].timesShown++;

  if(totalClicks >= rounds){

    localStorage.setItem('savedPizza', JSON.stringify(allPizzas));

    let asideUL = document.getElementById('voteResults');


    //count total clicks vs rounds
    //create li items to show image information on clicks and display the percentages.

    for(let i = 0; i < allPizzas.length; i ++){
      let voteResultListItem = document.createElement('li');
      voteResultListItem.textContent = `${allPizzas[i].name} was clicked on ${allPizzas[i].timesClicked} times and was shown ${allPizzas[i].timesShown} times `;
      asideUL.appendChild(voteResultListItem);

      let percentageListItem = document.createElement('li');
      let math;
      if(allPizzas[i].timesClicked === 0){
        math = `Zero click and shown ${allPizzas[i].timesShown} times. Must be bad pizza.`;
      } else {
        math = Math.round(((allPizzas[i]['timesClicked']/ allPizzas[i]['timesShown']).toFixed(2) * 100)) + '%';
      }
      percentageListItem.textContent = `${allPizzas[i].name} percentage of times clicked on vs times shown is ` + math;
      asideUL.appendChild(percentageListItem);
    }//closes the for loop

    //remove event listener
    for(let i = 0; i < imageElements.length; i++){
      imageElements[i].removeEventListener('click', imageWasClicked);
      console.log('is this thing working?');
    }
    //run chart
    runMyChartsNow();

  }//closes the if statement
}//closes the function








function runMyChartsNow(){

  let ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getPizzaArray('name'),
      datasets: [{
        label: '# of Votes',
        data: getPizzaArray('timesClicked'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}//closes chart function





for(let i = 0; i < imageElements.length; i++){
  imageElements[i].addEventListener('click', imageWasClicked);
  console.log('is this thing working?');
}
