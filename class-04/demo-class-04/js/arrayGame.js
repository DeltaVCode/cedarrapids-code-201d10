
let states = ['ILLINOIS', 'IOWA', 'ARKANSAS', 'CALIFORNIA','TEXAS','OMAN','GERMANY'];
console.log(states.length);
let attempts = 0;
let correctAnswer = 0;


while(attempts !== 7){
  let userAnswer = prompt('What states of the world, have I lived in?');
  let userAnswerTrimmedToUpper = userAnswer.toUpperCase().trim();
  if (states.indexOf(userAnswerTrimmedToUpper) >= 0) {
    alert('Yes! ' + userAnswer + ' is one of my favorite states!');
    correctAnswer++;
  } else {
    alert('WRONG');

  }
  attempts++;
}

alert('All states that I lived in are: ' + states.join(', '));
alert('You answered ' + correctAnswer + ' out of 7 correctly');

alert('Thanks for Playin...');

let results = document.getElementById('results');
let finalResults = 'You guessed ' + attempts + ' and got ' + correctAnswer + ' correct answers.';
results.innerHTML = finalResults;