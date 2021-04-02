// const squares = [
//   {
//     name: 'first',
//     img: './images/white.png',
//   },
//   {
//     name: 'second',
//     img: './images/white.png',
//   },
//   {
//     name: 'third',
//     img: './images/white.png',
//   },
//   {
//     name: 'fourth',
//     img: './images/white.png',
//   },
// ];

const squares = document.querySelectorAll('.squares');
squares.forEach((item) => {
  item.style.color = 'red';
});
