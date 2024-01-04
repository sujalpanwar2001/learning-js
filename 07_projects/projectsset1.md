# Projects Related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-neytkh?file=index.html)

## project 1 (Color Changer)

```javascript
const body = document.querySelector('body');

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```
## project 2 (BMI Calculator)

```javascript 
// this usecase will give you empty value, becoz empty value will be fetched in the starting
// const height = parseInt(document.querySelector('#height'));
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    const guide = document.querySelector('#weight-guide');
    if (bmi < 18.6) {
      guide.innerHTML = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      guide.innerHTML = 'Normal Range';
    } else {
      guide.innerHTML = 'Overweight';
    }
  }
});
```

## project 3 (Digital Clock)
```javascript 
const currtime = document.querySelector('#clock');

setInterval(() => {
  const today = new Date();
  const time = today.toLocaleTimeString();
  currtime.innerHTML = time;
}, 1000);
```

## project 4 (Number Guess Game)
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Number has to be greater than 1');
  } else if (guess > 100) {
    alert('Number has to be less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanupGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`number is tooo high`);
  }
};

const cleanupGuess = (guess) => {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (event) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
};
```