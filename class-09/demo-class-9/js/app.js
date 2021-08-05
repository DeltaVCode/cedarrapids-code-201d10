'use strict';
console.log('app js file is connected.');


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
  let parentElement = document.getElementById('kittenProfiles');
  console.log(parentElement);
  let article = document.createElement('article');
  parentElement.appendChild(article);
  //h2
  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);
  //paragraph
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
let secondPet = new Pet('Tiger','Panther', 'diabloBlanco', ['Inquisitive', 'Sleepy', 'Hungary', 'Whiskery'], true, true, true);
secondPet.setAge();
secondPet.getInterests();
let thirdPet = new Pet('Iggy', 'Dragon', 'littleDragon', ['Being Green', 'Scaly', 'Chill', 'Dragony'], true, true, true);
thirdPet.setAge();
thirdPet.getInterests();


let adoptPet = [firstPet, secondPet, thirdPet];


for(let i = 0; i < adoptPet.length; i++){
  // console.log(adoptPet[i]);
  adoptPet[i].render();
}


function handleFormSubmitted(event){
  event.preventDefault();
  console.log('this is the event',event);
  let nameInput = document.getElementById('name');
  let nameValue = nameInput['value'];
  console.log('name value ',nameValue);

  let breedInput = document.getElementById('breed');
  let breedValue = breedInput['value'];


  let imageInput = document.getElementById('imageName');
  let imageValue = imageInput.value;

  // console.log('sssssssss',imageInput.value);

  let interestsInput = document.getElementById('interests');
  let interestsValue = interestsInput.value;

  let isGoodWithKids = event.target.isGoodWithKids.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithCats = event.target.isGoodWithCats.checked;

  let newPet = new Pet(nameValue,breedValue,imageValue,interestsValue,isGoodWithKids,isGoodWithDogs,isGoodWithCats);


  newPet.setAge();
  newPet.getInterests();
  newPet.render();


  let form = document.getElementById('new-pets');
  form.reset();



}




//Set up event listener to watch our form for submission
let formElement = document.getElementById('new-pets');
formElement.addEventListener('submit', handleFormSubmitted);
