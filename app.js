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

const button = document.getElementById('button1');
button.addEventListener('click', function () {
  one.style.background = 'black';
});
