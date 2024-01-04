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