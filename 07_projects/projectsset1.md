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