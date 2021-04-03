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

 let result= 0;
 let currentTime = timeLeft.textContent;
//okay this is beneficial and smart
function randomSquare(){
    //starts by removing all the classes if there's one
    square.forEach(className=>{
        className.classList.remove("mole")
    })
    //and randomly adds the mole class so that each time this function gets invoked,
    //a random square will get the mole class,
    //which has an image on the css
    let randomPosition=square[Math.floor(Math.random() *9)]
    randomPosition.classList.add("mole");
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
      if(id.id === hitPosition){
        result = result + 1
        score.textContent = result
        hitPosition=null
      }
    })
  })

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
  }
  
  moveMole()
  
  
  function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
  
    if(currentTime === 0 ) {
      clearInterval(timerId)
      alert('GAME OVER! Your final score is' + result)
    }
  }
  
  let timerId = setInterval(countDown, 1000)