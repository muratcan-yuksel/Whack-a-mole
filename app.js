const grid = document.querySelector('.grid');
// create grid items
function createGrid() {
  for (let i = 1; i < 10; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('class', 'square');
    gridDiv.setAttribute('id', i);
    grid.appendChild(gridDiv);
  }
}

createGrid();

const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
let score = document.getElementById('score');
