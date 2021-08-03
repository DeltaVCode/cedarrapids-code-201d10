'use strict';
console.log('app js file is connected.');

// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have:
// Name
// Breed
// - random age assigned
// a list of what they like.
// an image
// is good with kids
// is good with dogs
// is good with other animals

// let petOne = {
//   name: 'Tiger',
//   breed: 'Tabby',
//   imageName: 'tommyBob',
//   interests: ['Rainy Days', 'Running', 'Yarn'],
//   isGoodWithKids: true,
//   isGoodWithDogs:  true,
//   isGoodWithCats: true,
//   setAge: function() {
//     this.age = randomAge(3,12) + ' Months old.';
//   }
// };

function Pet(name, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats){
  this.name = name;
  this.breed = breed;
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
}

Pet.prototype.setAge = function(){
  this.age = randomAge(3, 12) + ' months old.';
};

function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//this is pulling from the interests array.
Pet.prototype.getInterests = function(){
  let randomArrayIndex = Math.floor(Math.random() * this.interests.length);
  return this.interests[randomArrayIndex];
};


Pet.prototype.render = function(){
  //Grab the Parent Element
  //Create child elements article h2 p ul li and interests and image
  let parentElement = document.getElementById('kittenProfiles');
  console.log(parentElement);
  let article = document.createElement('article');
  parentElement.appendChild(article);
  //h2
  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);
  //paragraph
  //  <p></p>
  let petPara = document.createElement('p');
  //template literals use the back ticks and the $ to mix stings and js stuff.
  petPara.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
  article.appendChild(petPara);


  //pets interests
  let ul = document.createElement('ul');
  article.appendChild(ul);

  //fill up ul with list items
  for(let i = 0; i < this.interests.length; i++){
    let li = document.createElement('li');
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }

  let img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!, no TODAY!');
  article.appendChild(img);



  //create table for pets
  let petTable = document.getElementById('adoptPets-holder');
  let petRow = document.createElement('tr');
  //create element
  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  //append nameCell to row
  petRow.appendChild(nameCell);
  //breedbreed
  let breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);
  //ageCell
  let ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);
  //interests
  let interestsCell = document.createElement('td');
  interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);

  petTable.appendChild(petRow);




};//closes the render prototype function












































let firstPet = new Pet('lion-O', 'big cat', 'jumper', ['chewy toys', 'chase lights', 'needy', 'plays keep away'],true, true, true);
firstPet.setAge();
firstPet.getInterests();


let adoptPet = [firstPet];


for(let i = 0; i < adoptPet.length; i++){
  console.log(adoptPet[i]);
  adoptPet[i].render();
}
