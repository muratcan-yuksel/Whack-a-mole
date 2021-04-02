// get the squares and style them
const squares = document.querySelectorAll('.squares');
squares.forEach((item) => {
  item.style.width = '50px';
  item.style.height = '50px';
  item.style.border = '1px solid black';
  item.style.background = 'grey';
  item.style.borderRadius = '50%';
});
// get the squares
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');
const square4 = document.getElementById('square4');
// get buttons
const button2 = document.getElementById('button-2');
const button11 = document.getElementById('button-1-1');
const button12 = document.getElementById('button-1-2');

// button2.addEventListener('click', function () {
//   square2.style.background = 'black';
// });

function btn2() {
  if (square1.style.background == 'grey') {
    square1.style.background = 'black';
    square2.style.background = 'black';
  } else if (
    square1.style.background == 'black' &&
    square3.style.background == 'grey'
  ) {
    square2.style.background = 'black';
    square3.style.background = 'black';
  } else if (
    square1.style.background == 'black' &&
    square3.style.background == 'black'
  ) {
    square2.style.background = 'black';
    square4.style.background = 'black';
    alert('good job!');
  }
  button2.setAttribute('id', 'no-more');
}

button2.addEventListener('click', btn2);

function btn11() {
  if (square1.style.background == 'grey') {
    square1.style.background = 'black';
  } else if (square1.style.background == 'black') {
    alert('miss');
    // play an animation of some kind
  }
}

button11.addEventListener('click', btn11);

function btn12() {
  if (square3.style.background == 'grey') {
    square3.style.background = 'black';
  } else if (square3.style.background == 'black') {
    alert('miss');
    // animation
  }
}
button12.addEventListener('click', btn12);
